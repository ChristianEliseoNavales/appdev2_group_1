const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");

// GET all attendance records
router.get("/", async (req, res) => {
  const records = await Attendance.find().sort({ date: -1 });
  res.json(records);
});

// POST new attendance record (auto date/time)
router.post("/", async (req, res) => {
  const { name } = req.body;
  const record = new Attendance({ name }); // auto date/time handled by schema
  await record.save();
  res.json(record);
});

// PUT update timeOut
router.put("/:id", async (req, res) => {
  const updated = await Attendance.findByIdAndUpdate(
    req.params.id,
    { timeOut: new Date().toLocaleTimeString() },
    { new: true }
  );
  res.json(updated);
});

// DELETE attendance record
router.delete("/:id", async (req, res) => {
  await Attendance.findByIdAndDelete(req.params.id);
  res.json({ message: "Record deleted" });
});

module.exports = router;
