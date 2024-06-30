const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide contact name."],
    },
    email: {
      type: String,
      required: [true, "Please provide email address."],
    },
    mobile: {
      type: Number,
      required: [true, "Please provide mobile number."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
