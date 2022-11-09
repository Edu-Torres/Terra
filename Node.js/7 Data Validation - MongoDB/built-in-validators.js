const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

const bookSchema = new mongoose.Schema({
  // Required implements validation, but not on the DB level only on Mongoose
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    minlength: 3,
    maxlength: 25,
    match: /^J/i // Only authors that start with letter E
  },
  category: {
    type: String,
    enum: ['novel', 'treaty', 'play']
  },
  isPublished: Boolean,
  price: {
    type: Number,
    // Can be dynamically required or not
    // can't be arrow function, 'this' would the mongoose function that encloses it and executes it
    required: function () { return this.isPublished; }
  }
    
});
const Book = mongoose.model('Books', bookSchema);

const bookOne = new Book({
  name: 'Ulysses',
  author: 'James Joyce',
  category: 'novel',
});
bookOne.save().then(res => console.log(res)).catch(err => console.log('error: ', err.message));
// Books validation failed: name: Path `name` is required.

// Trigger validation manually
bookOne.validate().catch(err => console.log(err.message));
// But since it returns a void Promise the way to use this as a boolean is (but probably with an await)
bookOne.validate().then(() => console.log(true)).catch(() => console.log(false));