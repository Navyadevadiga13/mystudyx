// const mongoose = require("mongoose");
// const StudentSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//  studyPreference: {
//   type: String,
//   enum: [
//     "Study in India",
//     "Study Abroad",
//     "Both",
//     "Work"
//   ],
//   default: "Study in India",
//   trim: true
// },
//   phone: { type: String },                 // optional for Google
//   password: { type: String },              // optional for Google
//   isProfileComplete: {
//   type: Boolean,
//   default: false
// },

//   dob: { type: Date },                     // optional for Google
//   googleId: { type: String },              // ADD: for Google login
//   profilePic: { type: String },            // ADD: for Google login
//    wishlist: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Course"
//   }],
//    interestedCountries: [{
//     type: String,   // example: "USA", "Canada"
//     trim: true
//   }],
//   interestedCourses: [{
//     type: String,   // example: "Computer Science", "MBA"
//     trim: true
//   }],
//     interestedIntake: [{ type: String }],
// });

// module.exports = mongoose.model("Student", StudentSchema);



const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    trim: true 
  },

  email: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true 
  },

  studyPreference: {
    type: String,
    enum: [
      "Study in India",
      "Study Abroad",
      "Both",
      "Work"
    ],
    required: true,
    default: "Study in India",
    trim: true
  },

  phone: { 
    type: String, 
    required: true 
  },

  password: { 
    type: String, 
    required: true 
  },

  isProfileComplete: {
    type: Boolean,
    default: false
  },

  dob: { 
    type: Date, 
    required: true 
  },

wishlist: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: "Course"
}],

interestedCountries: [{
  type: String,
  trim: true
}],

interestedCourses: [{
  type: String,
  trim: true
}],

interestedIntake: [{ 
  type: String 
}],

},  { 
  timestamps: { 
    createdAt: "created_at",   // ✅ custom name
    updatedAt: "updated_at"
  } 
});

module.exports = mongoose.model("Student", StudentSchema);