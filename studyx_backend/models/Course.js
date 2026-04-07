// models/Course.js

const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
      default: '' 
  },
  university: {
    type: String,
    trim: true,
      default: '' 
  },
  country: {
    type: String,
    trim: true,
      default: '' 
  },
tuition_fee: {
  type: String,
  trim: true,
  default: '',
  set: (value) => value?.toString()
},
  duration: {
    type: String,
    trim: true,
      default: '' 
  },
  credits: {
    type: String,
    trim: true,
      default: '' 
  },
  official_website: {
    type: String,
    trim: true,
      default: '' 
  },
  about: {
    type: String,
    trim: true,
      default: '' 
  },
  programme_structure: {
    type: String,
    trim: true,
      default: '' 
  },
  academic_requirements: {
    type: String,
    trim: true,
      default: '' 
  },
  english_requirements: {
    type: String,
    trim: true,
      default: '' 
  },
  other_requirements: {
    type: String,
    trim: true,
      default: '' 
  },
  partners: {
    type: Boolean,
    default: false
  },
types: {
  type: String,
  enum: ["Masters", "Bachelors", "Phd"],
  default: "Bachelors", // or whatever default you want
},
 rank: {
    type: String,
    trim: true,
    default: '',
    set: (value) => value?.toString() // optional but good
  },
}, {
  timestamps: true
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
