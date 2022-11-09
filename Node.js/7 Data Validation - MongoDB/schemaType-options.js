const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

const productSchema = new mongoose.Schema({
  // Extra properties
  name: { // For strings
    type: String,
        lowercase: true,
        // uppercase: true,
        trim: true // remove sapce paddings around
  },
  price: { // universal properties getter setter
      type: Number,
      get: v => Math.round(v), // How we read it
      set: v => Math.round(v) // How we save it
  },
  category: {
    type: String,
    enum: ["fruit", "vegetable", "jam"],
  },
});
const Product = mongoose.model("Products", productSchema);

product = new Product({
    name: Papaya,

})
