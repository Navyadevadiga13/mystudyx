const Course = require("../models/Course");
const Student = require("../models/Students");
const fs = require("fs");
const XLSX = require("xlsx");
const multer = require("multer");
const path = require('path');
const util = require('util');
const BulkUpload = require('../models/BulkUpload');
const unlinkAsync = util.promisify(fs.unlink);
// Create new course
exports.add_course = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    const courseData = await Course.findById(course._id).lean();

    res.status(201).json({
      success: true,
      message: 'Course created successfully',
      data: courseData  // Plain object without Mongoose metadata
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating course',
      error: error.message
    });
  }
};


//bbulk upload

exports.bulk_upload_courses = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Please upload an Excel file" });
    }

    const workbook = XLSX.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);

    if (!Array.isArray(data) || data.length === 0) {
      return res.status(400).json({ success: false, message: "Excel file is empty" });
    }

    // ✅ ENUM MAPPING (same as yours)
    const mapToEnumType = (raw) => {
      if (!raw) return "";

      const s = String(raw).trim().toLowerCase();

      if (["masters", "master", "msc", "m.sc", "ms"].includes(s)) return "Masters";
      if (["bachelors", "bachelor", "bsc", "b.sc", "ba"].includes(s)) return "Bachelors";
      if (["phd", "ph.d", "doctorate"].includes(s)) return "Phd";

      return "";
    };

    const validCourses = [];
    const failedRows = [];

    data.forEach((row, index) => {
      try {
        const rawType =
          row.types ??
          row.type ??
          row.Types ??
          row.Type ??
          row.program_type ??
          "";

        const normalized = mapToEnumType(rawType);

        // ✅ CLEAN + VALIDATE REQUIRED FIELDS
        const title = row.title || row.Title;
        const university = row.university || row.University;
        const country = row.country || row.Country;

        if (!title || !university || !country) {
          throw new Error("Missing required fields (title/university/country)");
        }

        const doc = {
          title: String(title).trim(),
          university: String(university).trim(),
          country: String(country).trim(),
          tuition_fee: row.tuition_fee || row["Tuition Fee"] || "",
      rank: row.rank || row.Rank || "",
          duration: row.duration || "",
          credits: row.credits || "",
          official_website: row.official_website || "",
          about: row.about || "",
          programme_structure: row.programme_structure || "",
          academic_requirements: row.academic_requirements || "",
          english_requirements: row.english_requirements || "",
          other_requirements: row.other_requirements || "",
       partners: String(row.partners).trim().toLowerCase() === "true",
        };

        if (normalized) {
          doc.types = normalized;
        }

        validCourses.push(doc);
      } catch (err) {
        failedRows.push({
          row: index + 1,
          error: err.message,
        });
      }
    });

    // 🚨 If nothing valid
    if (validCourses.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No valid rows found",
        failedRows,
      });
    }

    // ✅ SAFE INSERT
    const insertedCourses = await Course.insertMany(validCourses, {
      ordered: false,
      rawResult: true, // 🔥 important
    });

    const insertedDocs = insertedCourses?.insertedIds
      ? Object.values(insertedCourses.insertedIds)
      : [];

    const bulkUpload = await BulkUpload.create({
      filename: req.file.filename,
      courseIds: insertedDocs,
      coursesCount: insertedDocs.length,
      uploadedBy: req.admin?._id,
    });

    return res.status(201).json({
      success: true,
      message: `${insertedDocs.length} courses uploaded successfully`,
      insertedCount: insertedDocs.length,
      failedCount: failedRows.length,
      failedRows,
      bulkUploadId: bulkUpload._id,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error uploading courses",
      error: error.message,
    });
  }
};
const moment = require("moment");

exports.display_all_users = async (req, res) => {
  try {
    // ✅ get page from query (default = 1)
    const page = parseInt(req.query.page) || 1;
    const limit = 50;
    const skip = (page - 1) * limit;

    // ✅ total count
    const totalUsers = await Student.countDocuments();

    // ✅ fetch latest users first
    const users = await Student.find()
      .select("-password")
      .sort({ created_at: -1, createdAt: -1, _id: -1 }) // newest first
      .skip(skip)
      .limit(limit)
      .lean();

    const formattedUsers = users.map(u => {
      const createdDate =
        u.created_at || u.createdAt || u._id.getTimestamp();

      return {
        _id: u._id,
        name:
          u.name && u.name.trim() !== "" ? u.name : "User",
        email: u.email || "-",
        phone:
          u.phone && u.phone.trim() !== "" && u.phone !== "-"
            ? u.phone
            : "-",
        studyPreference:
          u.studyPreference && u.studyPreference.trim() !== ""
            ? u.studyPreference
            : "Study in India",
        created_at: moment(createdDate).format(
          "DD MMM YYYY, hh:mm A"
        ),
      };
    });

    res.status(200).json({
      success: true,
      count: formattedUsers.length,
      total: totalUsers,
      currentPage: page,
      totalPages: Math.ceil(totalUsers / limit),
      data: formattedUsers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching users",
      error: error.message,
    });
  }
};
exports.get_uploaded_files = async (req, res) => {
  try {
    const uploads = await BulkUpload.find().sort({ uploadedAt: -1 }).lean();

    res.json({
      success: true,
      files: uploads.map(u => ({
        filename: u.filename,
        uploadedAt: u.uploadedAt,
        coursesCount: u.coursesCount,
        _id: u._id
      }))
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch uploads', error: error.message });
  }
};


exports.bulk_download_courses = async (req, res) => {
  try {
    const uploadId = req.params.id;

    // ✅ Get bulk upload record
    const bulkUpload = await BulkUpload.findById(uploadId);

    if (!bulkUpload) {
      return res.status(404).json({
        success: false,
        message: "Bulk upload not found",
      });
    }

    // ✅ Get all courses of that upload
    const courses = await Course.find({
      _id: { $in: bulkUpload.courseIds },
    }).lean();

    if (!courses.length) {
      return res.status(404).json({
        success: false,
        message: "No courses found for this upload",
      });
    }

    // ✅ Clean data
    const cleanedCourses = courses.map(({ _id, __v, createdAt, updatedAt, ...rest }) => rest);

    // ✅ Excel
    const worksheet = XLSX.utils.json_to_sheet(cleanedCourses, {
      header: [
        "title",
        "university",
        "country",
        "tuition_fee",
        "duration",
        "credits",
        "official_website",
        "about",
        "programme_structure",
        "academic_requirements",
        "english_requirements",
        "other_requirements",
        "partners",
        "types",
        "rank",
      ],
    });

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Courses");

    const buffer = XLSX.write(workbook, {
      type: "buffer",
      bookType: "xlsx",
    });

    const filename = `bulk-${bulkUpload.filename || uploadId}.xlsx`
      .replace(/[^a-z0-9.-]/gi, "_");

    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.send(buffer);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error downloading bulk courses",
      error: error.message,
    });
  }
};

exports.delete_bulk_upload = async (req, res) => {
  const { filename } = req.params;
  try {
    if (!filename || filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
      return res.status(400).json({ success: false, message: 'Invalid filename' });
    }

    // Find BulkUpload record by filename
    const bulkUpload = await BulkUpload.findOne({ filename });

    if (!bulkUpload) {
      return res.status(404).json({ success: false, message: 'Bulk upload record not found' });
    }

    const filePath = path.join(__dirname, '..', 'uploads', filename);

    // Delete Excel file
    await unlinkAsync(filePath).catch((err) => {
      if (err.code !== 'ENOENT') throw err;
    });

    // Delete all courses linked to this bulk upload
    const deleteResult = await Course.deleteMany({ _id: { $in: bulkUpload.courseIds } });

    // Delete BulkUpload record itself
    await BulkUpload.deleteOne({ _id: bulkUpload._id });

    res.json({
      success: true,
      message: 'Bulk file, metadata, and all related courses deleted.',
      filename,
      deletedCoursesCount: deleteResult.deletedCount
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting by filename', error: error.message });
  }
};

//get all courses

exports.get_courses = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 100;
    const skip = (page - 1) * limit;

    const totalCount = await Course.countDocuments();

    // true first, then false, then by newest
    const courses = await Course.find()
      .sort({ partners: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      count: courses.length,
      total: totalCount,
      page,
      pages: Math.ceil(totalCount / limit),
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching courses",
      error: error.message,
    });
  }
};


// Get single course by ID
exports.get_course_by_id = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching course',
      error: error.message
    });
  }
};

// Update course
exports.update_course = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Course updated successfully',
      data: course
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating course',
      error: error.message
    });
  }
};


exports.delete_course = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Course deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting course',
      error: error.message
    });
  }
};

function escapeRegex(text = "") {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

exports.search_courses = async (req, res) => {
  try {
    const { search = "", suggest, q = "" } = req.query;

    /* =====================================================
       AUTOCOMPLETE MODE (CONTAINS)
       ===================================================== */
    if (suggest === "true" && q.trim().length > 0) {
      const searchText = q.trim();
      const escaped = escapeRegex(searchText);
      const regex = new RegExp(escaped, "i");

      const suggestions = await Course.aggregate([
        { $match: { title: { $regex: regex } } },
        { $group: { _id: "$title" } },
        { $sort: { _id: 1 } },
        { $limit: 7 },
        { $project: { _id: 0, value: "$_id" } },
      ]);

      return res.status(200).json({
        success: true,
        data: suggestions.map((s) => s.value),
      });
    }

    /* =====================================================
       NORMAL SEARCH MODE
       ===================================================== */
    if (!search.trim()) {
      return res.status(200).json({
        success: true,
        count: 0,
        total: 0,
        data: [],
        message: "Please enter a search term.",
      });
    }

    const page = parseInt(req.query.page) || 1;
    const limit = Math.max(1, parseInt(req.query.limit) || 100);
    const skip = (page - 1) * limit;

    const searchTerm = search.trim().toLowerCase();
    const escapedSearch = escapeRegex(searchTerm);
    const baseRegex = new RegExp(escapedSearch, "i");

    /* =====================================================
       🔥 IMPORTANT FIX: FETCH PARTIAL WORD MATCHES TOO
       ===================================================== */
    const words = searchTerm.split(/\s+/).filter(Boolean);

    const wordRegexConditions = words.map((w) => ({
      title: { $regex: new RegExp(escapeRegex(w), "i") },
    }));

    const matchedCourses = await Course.find({
      $or: [
        { title: { $regex: baseRegex } }, // full phrase
        ...wordRegexConditions,           // partial word matches
        { country: { $regex: baseRegex } }
      ],
    });

    /* =====================================================
       SCORING LOGIC (Exact → Starts → Contains → Partial)
       ===================================================== */
    /* =====================================================
SMART SCORING (COMPLETE - filter-only works!)
===================================================== */
const scoredCourses = matchedCourses.map((course) => {
  let score = 0;
  const courseTitle = normalizeText(course.title);
  const words = title.trim() ? normalizeText(title).split(/\s+/).filter(Boolean) : [];

  // 1️⃣ BASE SCORE for filter-only results (no title search)
  if (!title.trim() && filterConditions.length > 0) {
    score = 10000; // High score for pure filter matches
  } else {
    score = 1000; // Base for title search
  }

  // 2️⃣ TITLE SCORING (if title provided)
  if (title.trim() && words.length > 0) {
    if (courseTitle === normalizeText(title)) {
      score += 100000; // Exact match
    } else if (courseTitle.startsWith(normalizeText(title))) {
      score += 60000;  // Starts with
    } else if (courseTitle.includes(normalizeText(title))) {
      score += 30000;  // Contains phrase
    } else {
      // Partial word matching
      const matchedWords = words.filter((w) => courseTitle.includes(w)).length;
      const matchPercentage = matchedWords / words.length;
      
      if (matchPercentage >= 0.8) score += 20000;
      else if (matchPercentage >= 0.6) score += 15000;
      else if (matchPercentage >= 0.4) score += 10000;
      else score += 5000;
      
      score += matchedWords * 3000; // Bonus per word
    }
  }

  // 3️⃣ PARTNER BOOST
  if (course.partners) score += 500;

  return {
    ...course.toObject(),
    _score: Math.max(1000, score),
  };
});


    /* =====================================================
       SORT → PAGINATE → RESPOND
       ===================================================== */
    scoredCourses.sort((a, b) => {
      if (b._score !== a._score) return b._score - a._score;
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    const paginated = scoredCourses.slice(skip, skip + limit);
    const finalData = paginated.map(({ _score, ...rest }) => rest);

    return res.status(200).json({
      success: true,
      count: finalData.length,
      total: scoredCourses.length,
      page,
      pages: Math.ceil(scoredCourses.length / limit),
      data: finalData,
    });
  } catch (error) {
    console.error("SEARCH ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching courses",
      error: error.message,
    });
  }
};


// helper to escape regex-special characters
function escapeRegex(text = "") {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// ---- Fee filter helper (IGNORE non-numeric fees) ----
// const buildFeeExpr = (min_fee, max_fee) => {
//   if (!min_fee && !max_fee) return null;

//   const minValue = min_fee ? Number(min_fee) : null;
//   const maxValue = max_fee ? Number(max_fee) : null;

//   const feeAsNumber = {
//     $cond: [
//       { $isNumber: "$tuition_fee" },
//       "$tuition_fee",
//       {
//         $cond: [
//           {
//             $regexMatch: {
//               input: { $toString: "$tuition_fee" },
//               regex: "^[0-9]+(\\.[0-9]+)?$",
//             },
//           },
//           { $toDouble: "$tuition_fee" },
//           null,
//         ],
//       },
//     ],
//   };

//   return {
//     $expr: {
//       $or: [
//         { $eq: [feeAsNumber, null] },
//         {
//           $and: [
//             ...(minValue !== null ? [{ $gte: [feeAsNumber, minValue] }] : []),
//             ...(maxValue !== null ? [{ $lte: [feeAsNumber, maxValue] }] : []),
//           ],
//         },
//       ],
//     },
//   };
// };

exports.filter_courses = async (req, res) => {
  try {
    const {
      title = "",
      university = "",
      country = "",
      min_fee,
      max_fee,
      suggest,
      q = "",
      suggest_field = "title",
      types,
    } = req.query;

    // ---- GET ALL COUNTRIES ----
    if (req.query.all_countries === "true") {
      const countries = await Course.distinct("country");
      return res.json({ success: true, data: countries.sort() });
    }

    // ---- AUTOSUGGEST ----
    if (suggest === "true" && q.trim()) {
      const field = ["title", "university", "country"].includes(suggest_field)
        ? suggest_field
        : "title";

      const regex = new RegExp("^" + escapeRegex(q.trim()), "i");

      const data = await Course.aggregate([
        { $match: { [field]: { $regex: regex } } },
        { $group: { _id: "$" + field } },
        { $limit: 7 },
        { $project: { value: "$_id", _id: 0 } },
      ]);

      return res.json({ success: true, data: data.map(d => d.value) });
    }

    // ---- PAGINATION ----
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(50, parseInt(req.query.limit) || 10);
    const skip = (page - 1) * limit;
    const sort = { partners: -1, createdAt: -1 };

    const feeExpr = buildFeeExpr(min_fee, max_fee);

    /* =====================================================
       1️⃣ COUNTRY + TITLE (HIGHEST PRIORITY)
    ===================================================== */
    if (country.trim() && title.trim()) {
      const words = title.split(/\s+/).map(escapeRegex);

      const pipeline = [
        { $match: { country: { $regex: country, $options: "i" } } },
        {
          $addFields: {
            score: {
              $add: words.map(w => ({
                $cond: [
                  { $regexMatch: { input: "$title", regex: w, options: "i" } },
                  1,
                  0,
                ],
              })),
            },
          },
        },
        { $match: { score: { $gt: 0 } } },
        ...(feeExpr ? [{ $match: feeExpr }] : []),
  {
  $sort: {
    partners: -1,   // ⭐ MOST IMPORTANT
    score: -1,
    title: 1
  }
},
        { $skip: skip },
        { $limit: limit },
      ];

      const data = await Course.aggregate(pipeline);
      if (data.length) {
        return res.json({
          success: true,
          data,
          count: data.length,
          fallback: "country_title",
        });
      }
    }

    /* =====================================================
       2️⃣ COUNTRY ONLY (IF TITLE FAILS)
    ===================================================== */
    if (country.trim()) {
      const query = {
        country: { $regex: country, $options: "i" },
        ...(feeExpr || {}),
      };

      const total = await Course.countDocuments(query);
      if (total > 0) {
        const data = await Course.find(query)
          .sort(sort)
          .skip(skip)
          .limit(limit);

        return res.json({
          success: true,
          data,
          total,
          page,
          pages: Math.ceil(total / limit),
          fallback: "country_only",
        });
      }
    }

    /* =====================================================
       3️⃣ NO COUNTRY → NORMAL TITLE SEARCH
    ===================================================== */
    if (title.trim()) {
      const query = {
        title: { $regex: title, $options: "i" },
        ...(feeExpr || {}),
      };

      const total = await Course.countDocuments(query);
      if (total > 0) {
        const data = await Course.find(query)
          .sort(sort)
          .skip(skip)
          .limit(limit);

        return res.json({
          success: true,
          data,
          total,
          page,
          pages: Math.ceil(total / limit),
          fallback: "title_only",
        });
      }
    }

    /* =====================================================
       4️⃣ FINAL RANDOM (LAST RESORT)
    ===================================================== */
    const data = await Course.aggregate([{ $sample: { size: limit } }]);
    const total = await Course.countDocuments();

    return res.json({
      success: true,
      data,
      total,
      page: 1,
      pages: Math.ceil(total / limit),
      fallback: "random",
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};
/* =========================
NORMALIZATION HELPERS
====================== */


// Controller: title-only search (kept name as requested)
// Controller: title-only search (kept name as requested)



exports.search_and_filter_courses = async (req, res) => {
  try {
let {
  suggest,
  q = "",
  page = 1,
  limit = 10,
  country = "",
  university = "",
  type = "",
  scholarship   // ✅ ADD THIS
} = req.query;

    page = Math.max(1, Number(page) || 1);
    limit = Math.max(1, Math.min(Number(limit) || 10, 50));

    const sanitizeInput = (v) => String(v || "").trim();
    const normalizeText = (v) => String(v || "").trim();
    const escapeRegex = (str) => String(str).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const STOP = new Set([
  "and", "with", "the", "of", "in", "to", "for", "a", "an",
  "masters", "bachelors", "phd", "degree", "program", "course",
  "hons", "honours","master","bachelor"
]);

    const toTokens = (raw) => {
      const s = normalizeText(raw).toLowerCase();
      return s
        .split(/[^a-z0-9]+/gi)
        .map((t) => t.trim())
        .filter(Boolean)
        .filter((t) => t.length >= 2)
        .filter((t) => !STOP.has(t));
    };

    const parseCountries = (raw) =>
      sanitizeInput(raw)
        .split(",")
        .map((c) => c.trim())
        .filter(Boolean);

    q = sanitizeInput(q);
    university = sanitizeInput(university);
    type = sanitizeInput(type);

    const tokens = toTokens(q);
    if (!tokens.length && q) {
  tokens.push(q.toLowerCase());
}
    const countries = parseCountries(country); // "UK,Canada" => ["UK","Canada"]

    const countryMatch = countries.length ? { country: { $in: countries } } : {};

    // ✅ University exact (case-insensitive)
    const universityMatch = university
      ? { university: { $regex: new RegExp(`^${escapeRegex(university)}$`, "i") } }
      : {};

    // ✅ NEW: Types exact (case-insensitive)
    // field name is "types" (as per your schema)
    const typeMatch = type ? { types: { $regex: new RegExp(`^${escapeRegex(type)}$`, "i") } } : {};

    // Base filter applied to results (and can be applied to autocomplete too when appropriate)
const scholarshipMatch =
  scholarship === "true" ? { partners: true } : {};

const baseMatch = {
  ...countryMatch,
  ...universityMatch,
  ...typeMatch,
  ...scholarshipMatch, // ✅ THIS IS THE FIX
};
    /* ===================== AUTOCOMPLETE ===================== */

    // ✅ Country autocomplete
    if (suggest === "country") {
      if (!q) return res.json({ success: true, data: [] });

      const rx = new RegExp(escapeRegex(normalizeText(q)), "i");

      const suggestions = await Course.aggregate([
        { $match: { country: { $regex: rx } } },
        { $group: { _id: "$country" } },
        { $sort: { _id: 1 } },
        { $limit: 10 },
        { $project: { _id: 0, value: "$_id" } },
      ]);

      return res.json({
        success: true,
        data: suggestions.map((s) => s.value).filter(Boolean),
      });
    }

    // ✅ University autocomplete (filtered by country if provided)
    if (suggest === "university") {
      if (!q) return res.json({ success: true, data: [] });

      const rx = new RegExp(escapeRegex(normalizeText(q)), "i");

      const suggestions = await Course.aggregate([
        { $match: { ...countryMatch, university: { $regex: rx } } },
        { $group: { _id: "$university" } },
        { $sort: { _id: 1 } },
        { $limit: 10 },
        { $project: { _id: 0, value: "$_id" } },
      ]);

      return res.json({
        success: true,
        data: suggestions.map((s) => s.value).filter(Boolean),
      });
    }

    // ✅ NEW: Types autocomplete (Bachelors / Masters / Phd)
    // Call: /search_and_filter_courses?suggest=type&q=ba
    // Optional: you can still pass country/university to keep context-based suggestions
    if (suggest === "type") {
      if (!q) return res.json({ success: true, data: [] });

      const rx = new RegExp(escapeRegex(normalizeText(q)), "i");

      const suggestions = await Course.aggregate([
        // keep current context filters; do NOT apply typeMatch here (because user is typing type)
        { $match: { ...countryMatch, ...universityMatch, types: { $regex: rx } } },
        { $group: { _id: "$types" } },
        { $sort: { _id: 1 } },
        { $limit: 10 },
        { $project: { _id: 0, value: "$_id" } },
      ]);

      return res.json({
        success: true,
        data: suggestions.map((s) => s.value).filter(Boolean),
      });
    }

    // ✅ Title autocomplete (filtered by country + university + type if provided)
    if (suggest === "true") {
      if (!q) return res.json({ success: true, data: [] });

      const pattern =
        tokens.length > 0 ? tokens.map(escapeRegex).join(".*") : escapeRegex(normalizeText(q));
      const regex = new RegExp(pattern, "i");

      const suggestions = await Course.aggregate([
        { $match: { ...baseMatch, title: { $regex: regex } } },
        { $group: { _id: "$title" } },
        { $sort: { _id: 1 } },
        { $limit: 7 },
        { $project: { _id: 0, value: "$_id" } },
      ]);

      return res.json({ success: true, data: suggestions.map((s) => s.value) });
    }

    /* ===================== SEARCH ===================== */

    const skip = (page - 1) * limit;

    // empty q => default paginated list (still apply country/university/type if provided)
    if (!q) {
      const [data, total] = await Promise.all([
        Course.find(baseMatch)
.sort({ partners: -1, rank: 1 }).skip(skip).limit(limit),
        Course.countDocuments(baseMatch),
      ]);

      return res.json({
        success: true,
        data,
        total,
        page,
        pages: Math.max(1, Math.ceil(total / limit)),
      });
    }

    // tokens empty => fallback contains search (still apply baseMatch)
    if (tokens.length === 0) {
      const rx = new RegExp(escapeRegex(normalizeText(q)), "i");
      const filter = { ...baseMatch, title: { $regex: rx } };

      const [data, total] = await Promise.all([
    Course.find(filter)
  .sort({ partners: -1, rank: 1 }) 
  .skip(skip)
  .limit(limit),
        Course.countDocuments(filter),
      ]);

      return res.json({
        success: true,
        data,
        total,
        page,
        pages: Math.max(1, Math.ceil(total / limit)),
      });
    }

    // ---- Aggregation: related + ranking (apply baseMatch early) ----
    const safeTitleInput = { $ifNull: ["$title", ""] };
    const phrasePattern = tokens.map(escapeRegex).join(".*");

    const tokenScoreParts = tokens.map((t) => ({
      $cond: [
        { $regexMatch: { input: safeTitleInput, regex: escapeRegex(t), options: "i" } },
        1,
        0,
      ],
    }));

const minMatches = 1;

 const orMatch = {
  $or: [
    ...tokens.map((t) => ({
      title: { $regex: new RegExp(escapeRegex(t), "i") }
    })),
    { title: { $regex: new RegExp(escapeRegex(q), "i") } } // ✅ FULL TITLE MATCH
  ]
};

    // ✅ Always enforce country/university/type filters + title token match
    const firstMatch =
      Object.keys(baseMatch).length > 0 ? { $and: [baseMatch, orMatch] } : orMatch;

    const pipeline = [
      { $match: firstMatch },
      {
        $addFields: {
          _phraseMatch: {
            $regexMatch: { input: safeTitleInput, regex: phrasePattern, options: "i" },
          },
     _tokenMatches: {
  $sum: tokenScoreParts.length ? tokenScoreParts : [0]
},
        },
      },
      { $match: { _tokenMatches: { $gte: minMatches } } },
      {
        $addFields: {
          score: { $add: [{ $cond: ["$_phraseMatch", 100, 0] }, "$_tokenMatches"] },
        },
      },
{
$sort: {
  partners: -1,
  rank: 1,     // ✅ ascending rank
  score: -1,
  title: 1
}
},
      {
        $facet: {
          data: [{ $skip: skip }, { $limit: limit }],
          meta: [{ $count: "total" }],
        },
      },
    ];

    const agg = await Course.aggregate(pipeline).allowDiskUse(true);

    const data = agg?.[0]?.data || [];
    const total = agg?.[0]?.meta?.[0]?.total || 0;
// ✅ FIX partners type here
const fixedData = data.map(c => ({
  ...c,
  partners:
    c.partners === true ||
    c.partners === "true" ||
    c.partners === 1
}));

return res.json({
  success: true,
  data: fixedData,   // ✅ use fixedData
  total,
  page,
  pages: Math.max(1, Math.ceil(total / limit)),
});
  } catch (error) {
    console.error("SEARCH ERROR:", error);
    return res.status(500).json({ success: false, message: "Search failed" });
  }
};
