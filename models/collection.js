const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  endpoints: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Endpoint"
    }
  ]
});

// Add `createdAt` and `updatedAt` fields
collectionSchema.set("timestamps", true);

// Transform output during `res.json(data)`, `console.log(data)` etc.
collectionSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, result) => {
    delete result._id;
    delete result.__v;
  }
});

module.exports = mongoose.model("Collection", collectionSchema);
