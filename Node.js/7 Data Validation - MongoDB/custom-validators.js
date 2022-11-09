const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

const relationshipsSchema = new mongoose.Schema({
  friends: {
    type: Array,
    validate: {
      // With require an empty array would pass
      validator: function (v) {
        return v && v.length > 0; // To prevent from reading length property of nulls
      }, // If this property isn't set it will be defaulted to an empty array
      message: "A person should have at least one friend.",
    },
  },
});
const Relationships = mongoose.model("Relationships", relationshipsSchema);
const juan = new Relationships({ friends: [] });
juan.validate().then(() => console.log("Valid")).catch(err => console.log(err.message));
// Relationships validation failed: friends: A person should have at least one friend.