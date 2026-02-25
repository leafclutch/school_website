const Result = require("../models/Result");

exports.checkResult = async (req, res) => {
  try {
    const { rollNo, dob } = req.body;

    if (!rollNo || !dob) {
      return res.status(400).json({ message: "Roll No and DOB are required" });
    }

    const student = await Result.findOne({ rollNo, dob });

    if (!student) {
      return res.status(404).json({ message: "Result not found" });
    }

    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
