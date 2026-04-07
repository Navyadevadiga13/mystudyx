const multer = require('multer');
const path = require('path');

// Configure storage - where and how files are saved
exports.storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Files will be saved in uploads folder
  },
  filename: function (req, file, cb) {
    // Give unique name to each file: timestamp + original filename
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// File filter - only allow Excel files
exports.fileFilter = (req, file, cb) => {
  const allowedTypes = [
    'application/vnd.ms-excel', // .xls files
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' // .xlsx files
  ];
  
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // Accept file
  } else {
    cb(new Error('Only Excel files (.xls, .xlsx) are allowed'), false); // Reject file
  }
};

// Create multer upload instance with configuration
exports.upload = multer({
  storage: exports.storage,
  fileFilter: exports.fileFilter,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50 MB
  },
});

