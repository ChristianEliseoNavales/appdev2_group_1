const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: () => new Date().toLocaleDateString(),
  },
  timeIn: {
    type: String,
    default: () => new Date().toLocaleTimeString(),
  },
  timeOut: {
    type: String,
  },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
