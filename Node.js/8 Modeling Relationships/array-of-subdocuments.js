const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});

const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    authors: [authorSchema],
  })
);

async function createCourse(name, authors) {
  const course = new Course({
    name,
    authors,
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find();
  console.log(courses);
}

// Add author to array
async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);
  course.authors.push(author); // to take the array an add an author
  course.save();
}

async function removeAuthor(courseId, authorId) {
  const course = await Course.findById(courseId);
  const author = course.authors.id(authorId); // Array method id to look up the child's object by its id
  author.remove();
  course.save();
}

// createCourse('Node Course', [
//     new Author({ name: 'Mosh' }),
//     new Author({ name: 'Juan' }),
//     new Author({ name: 'Lalo' }),
// ]);

// addAuthor('6371059a6b09005d2f368660', new Author({name: 'Iris', bio: 'She is from Missouri'}))
removeAuthor("6371059a6b09005d2f368660", "6371059a6b09005d2f36865f");
