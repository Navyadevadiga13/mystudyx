const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
// Make sure you load GOOGLE_CLIENT_ID from your .env file or directly paste your Client ID.
const Student = require("../models/Students");    // <-- Required! Adjust path if needed
const Course = require("../models/Course");
const bcrypt = require("bcryptjs");  
const jwt=require('jsonwebtoken');

//google login

exports.googleLogin = async (req, res) => {
  try {
    const { credential } = req.body;

    // 🔐 Verify Google token
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    // 🔍 Find student by email
    let student = await Student.findOne({ email: payload.email });

    // =========================
    // EXISTING USER
    // =========================
    if (student) {
      // ❌ Manual signup user
      if (!student.googleId) {
        return res.status(400).json({
          success: false,
          message:
            "User with this email already exists. Please log in using email and password",
        });
      }

      // 🔄 Update profile picture if missing
      if (payload.picture && !student.profilePic) {
        student.profilePic = payload.picture;
        await student.save();
      }

      // 📱 Phone missing → ASK PHONE
      if (!student.phone) {
        const tempToken = jwt.sign(
          { id: student._id },
          process.env.JWT_SECRET,
          { expiresIn: "10m" }
        );

        return res.json({
          success: true,
          requiresPhone: true,
          tempToken,
          user: {
            id: student._id,
            name: student.name,
            email: student.email,
            picture: student.profilePic,
          },
        });
      }

      // ✅ Phone exists → LOGIN
      student.isProfileComplete = true;
      await student.save();

      const token = jwt.sign(
        { id: student._id, role: "student" },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      return res.json({
        success: true,
        token,
        user: {
          id: student._id,
          name: student.name,
          email: student.email,
          picture: student.profilePic,
        },
      });
    }

    // =========================
    // NEW GOOGLE USER
    // =========================
    const newStudent = await Student.create({
      name: payload.name || "",
      email: payload.email,
      googleId: payload.sub,
      profilePic: payload.picture,
      phone: null,
      isProfileComplete: false,
    });

    // ⏳ TEMP TOKEN (phone required)
    const tempToken = jwt.sign(
      { id: newStudent._id },
      process.env.JWT_SECRET,
      { expiresIn: "10m" }
    );

    return res.json({
      success: true,
      requiresPhone: true,
      tempToken,
      user: {
        id: newStudent._id,
        name: newStudent.name,
        email: newStudent.email,
        picture: newStudent.profilePic,
      },
    });

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid Google Token",
      error: error.message,
    });
  }
};
// SAVE PHONE AFTER GOOGLE SIGNUP
exports.googleCompleteSignup = async (req, res) => {
  try {
    const { phone, tempToken } = req.body;

    if (!phone || !tempToken) {
      return res.status(400).json({
        success: false,
        message: "Phone number required",
      });
    }

    if (!/^\d{10,}$/.test(phone)) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number",
      });
    }

    const decoded = jwt.verify(tempToken, process.env.JWT_SECRET);

    const student = await Student.findById(decoded.id);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    student.phone = phone;
    student.isProfileComplete = true;
    await student.save();

    return res.json({
      success: true,
      message: "Phone number saved successfully",
    });

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

//Registration 
exports.signup = async (req, res) => {
  try {
    console.log("Incoming request body:", req.body);

    const {
      name,
      email,
      password,
      confirmPassword,
      phone,
      dob,
      studyPreference,
      interestedCountries,
      interestedCourses,
      interestedIntake
    } = req.body;

    // ✅ Only validate fields you actually send from frontend
    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      !phone ||
      !dob ||
      !studyPreference
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // ✅ Password match
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    // ✅ Password length
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    // ✅ Phone validation
    if (!/^\d{10}$/.test(phone)) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number (must be 10 digits)",
      });
    }

    // ✅ DOB validation
    const parsedDOB = new Date(dob);
    if (isNaN(parsedDOB.getTime())) {
      return res.status(400).json({
        success: false,
        message: "Invalid date of birth",
      });
    }

    // ✅ Enum validation
    const validPreferences = [
      "Study in India",
      "Study Abroad",
      "Both",
      "Work"
    ];

    if (!validPreferences.includes(studyPreference)) {
      return res.status(400).json({
        success: false,
        message: "Invalid study preference",
      });
    }

    // ✅ Check existing user
    const studentExists = await Student.findOne({ email });
    if (studentExists) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create user (safe defaults)
    const student = await Student.create({
      name,
      email,
      phone,
      dob: parsedDOB,
      password: hashedPassword,
      studyPreference,
      interestedCountries: interestedCountries || [],
      interestedCourses: interestedCourses || [],
      interestedIntake: interestedIntake || [],
      wishlist: []
    });

    return res.status(201).json({
      success: true,
      message: "Signup successful",
      user: {
        id: student._id,
        name: student.name,
        email: student.email
      },
    });

  } catch (error) {
    console.error("Signup Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};


//login 
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    // ✅ ADD THIS CHECK
    if (!student.password) {
      return res.status(400).json({
        success: false,
        message: "Please login using Google or reset your password"
      });
    }

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: student._id, email: student.email },
      process.env.JWT_SECRET || "yoursecretkey",
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      token,
      user: {
        id: student._id,
        name: student.name,
        email: student.email,
        phone: student.phone,
        dob: student.dob
      }
    });
  } catch (error) {
    console.error("Signin error:", error); // ✅ add this
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};
//Retrieve profile
exports.get_profile = async (req, res) => {
  try {
    // Assuming JWT middleware sets req.studentId (or req.user.id)
    const studentId = req.studentId || (req.user && req.user.id);
    if (!studentId) {
      return res.status(401).json({ success: false, message: "Not authenticated" });
    }

const student = await Student.findById(studentId)
  .populate({
    path: "wishlist",
    select: "title university country tuition_fee duration image", // add fields you need
  })
  .select("-password");


    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    res.json({ success: true, student });
  } catch (err) {
    console.error("Error in get_profile:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

//add course to wishlist
// Replace your wishlist controllers with these fixed versions:

exports.addToWishlist = async (req, res) => {
  try {
    const studentId = req.user.id; // get from JWT middleware
    const { courseId } = req.body;

    // Optional: Validate courseId exists
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ success: false, message: "Course not found" });

    const student = await Student.findById(studentId);
    if (!student) return res.status(404).json({ success: false, message: "Student not found" });

    // Add only if not exists
    if (!student.wishlist.includes(courseId)) {
      student.wishlist.push(courseId);
      await student.save();
    }

    // IMPORTANT: Populate the wishlist before sending response
    await student.populate('wishlist');

    res.json({ 
      success: true, 
      wishlist: student.wishlist // Now this contains full course objects with _id
    });
  } catch (error) {
    console.error("Add to wishlist error:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

exports.removeWishlist = async (req, res) => {
  try {
    const studentId = req.user.id;
    const { courseId } = req.body;

    const student = await Student.findById(studentId);
    if (!student) return res.status(404).json({ success: false, message: "Student not found" });

    // Remove from wishlist
    student.wishlist = student.wishlist.filter(id => id.toString() !== courseId.toString());
    await student.save();

    // IMPORTANT: Populate the wishlist before sending response
    await student.populate('wishlist');

    res.json({ 
      success: true, 
      wishlist: student.wishlist 
    });
  } catch (error) {
    console.error("Remove from wishlist error:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

exports.displayWishlist = async (req, res) => {
  try {
    const studentId = req.user.id;

    const student = await Student.findById(studentId).populate('wishlist');
    if (!student) return res.status(404).json({ success: false, message: "Student not found" });

    res.json({ 
      success: true, 
      wishlist: student.wishlist 
    });
  } catch (error) {
    console.error("Display wishlist error:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Edit/Update Student Profile
exports.edit_profile = async (req, res) => {
  try {
    // Assume JWT middleware sets req.studentId (or req.user.id)
    const studentId = req.studentId || (req.user && req.user.id);
    if (!studentId) {
      return res.status(401).json({ success: false, message: "Not authenticated" });
    }

    // Only allow editable fields
    const updateFields = {};
    const allowedFields = [
      "name",
      "phone",
      "dob",
      "profilePic",
      "interestedCountries",
      "interestedCourses",
      "interestedIntake"
    ];
    allowedFields.forEach(field => {
      if (typeof req.body[field] !== "undefined") {
        updateFields[field] = req.body[field];
      }
    });

    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      { $set: updateFields },
      { new: true, runValidators: true }
    )
      .populate("wishlist", "title _id")
      .select("-password");

    if (!updatedStudent) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    res.json({ success: true, student: updatedStudent });
  } catch (err) {
    console.error("Error in edit_profile:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
