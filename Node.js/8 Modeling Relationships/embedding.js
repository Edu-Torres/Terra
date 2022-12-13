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
    author: authorSchema, // To embedd directly
    // Most features available in documents will also be available in subdocuments
    // you can make it required { type: authorSchema, required: true }
  })
);

async function createCourse(name, author) {
  const course = new Course({
    name,
    author,
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find();
  console.log(courses);
}

// Update subdocument 
async function updateAuthorName(courseId, name) {
  const course = await Course.findById(courseId);
  course.author.name = name;
  course.save(); // The whole document not only the subdocument
}

// Update author directly
async function updateAuthorNameDirectly(courseId, name) {
  const course = await Course.updateOne(
    { _id: courseId },
    {
      $set: {
        "author.name": name, // Access nested property with dot notation
      },
    }
  ); // Remember update takes a query object and a update object
}

// Delete an attribute
async function updateAuthorNameDirectly(courseId, name) {
  const course = await Course.updateOne(
    { _id: courseId },
    {
      $unset: {
        author: "", // or 'author': '' to delete the whole subdocument
      },
    }
  );
}

// createCourse('Node Course', new Author({ name: 'Mosh' }));
updateAuthorNameDirectly("6370fcdaa10af30456c55a8a", "Juan");
