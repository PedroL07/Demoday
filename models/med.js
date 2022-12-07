const mongoose = require("mongoose");

const MedSchema = new mongoose.Schema({
  med: {
    type: String,
    required: true,
  },
  when: {
    type: String,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Med', MedSchema);
