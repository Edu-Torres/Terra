const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    minlength: 3,
    maxlength: 25,
  },
  category: {
    type: String,
    enum: ["drama", "comedy", "thriller"],
  },
});
const Movie = mongoose.model("Movies", movieSchema);

async function createMovie() {
  const movie = new Movie({
    name: "Revenant",
    director: "Q",
    category: "historic",
  });
  try {
    // try since we are using await
    const result = await movie.save();
    console.log(result);
  } catch (ex) {
    for (field in ex.errors) // Each one has message, properties, kind, path, value
      console.log(ex.errors[field].message);
  }
}

createMovie();
