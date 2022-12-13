const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

// Schema types: String, Number, Date, Buffer(binary data), Boolean, ObjectID, Array
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

// Classes, objects
// Course, math

// Compile the Schema into a model
// Takes (collection, schema)
const Course = mongoose.model("Course", courseSchema);


// POST
// Now an object is created from that class
// This object maps to a document in a mongoose db
async function createCourse() {
  const course = new Course({
    name: "Angular Course",
    author: "Eduardo Torres",
    tags: ["angular", "frontend"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  // Show all courses or filter them
  const courses = await Course.find({ name: "Node.js Course" })
    .limit(2)
    .sort({ name: 1 }) // by name, 1 ascending -1 descending
    .select({ name: 1, tags: 1 }); // only retrieve certain properties
  // .count(); // to retrieve the number of documents instead
  console.log(courses);
}

// Comparison operators
// eq ==
// ne !=
// gt >
// gte >=
// lt <
// lte <=
// in
// nin

// Comparison Operators
async function getCoursesComplex() {
  const courses = await Course
    //comparison operators, placed in another object
    // dollar sign indicates it is an operator
    .find({ price: { $gte: 10, $lt: 20 } })
    .find({ price: { $in: [10, 15, 20] } })

    // logical operators
    // or and
    .find()
    .or([{ author: "Eduardo" }, { isPublished: true }])
    .and([{ tag: "science" }, { date: { $lt: new Date(2021, 0) } }]);
}

// Regular Expressions /pattern/
// Pagination
async function getCoursesComplex2() {
  const pageNumber = 2;
  const pageSize = 3;
  // This should be passed as parameters
  // /api/courses?pageNumber=2&pageSize=10

  const courses = await Course
    // Starts with Edu (^)
    .find({ author: /^Edu/ })
    // Ends with Torres ($)
    // case insensitive (i)
    .find({ author: /Torres$/i })
    // Contains Tor (.*)
    .find({ author: /.*Tor.*/ })
    .skip((pageNumber - 1) * pageSize) // To get only documents that fit in page
    .limit(pageSize);
  console.log(courses);
}

getCourses();
