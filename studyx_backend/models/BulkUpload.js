const mongoose = require('mongoose');

const bulkUploadSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  courseIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  coursesCount: { type: Number, default: 0 },
  uploadedAt: { type: Date, default: Date.now },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }, // optional
});

module.exports = mongoose.model('BulkUpload', bulkUploadSchema);
