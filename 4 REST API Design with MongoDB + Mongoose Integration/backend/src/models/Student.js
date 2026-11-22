const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must contain at least 2 characters"],
      maxlength: [80, "Name cannot exceed 80 characters"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address"]
    },
    course: {
      type: String,
      required: [true, "Course is required"],
      trim: true,
      maxlength: [100, "Course cannot exceed 100 characters"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
