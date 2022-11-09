const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

// Takes (collection, schema)
const Course = mongoose.model("Course", courseSchema);

// Update
//Approach query first
async function updateCourse(id) {
  const course = await Course.findById(id);
  if (!course) return;
  course.isPublished = true;
  course.author = "Another Author";
  course.set({
    isPublished: true,
    author: "Another Author",
  });
  const result = await course.save();
  console.log(result);
}

// Update First
// Without looking at it
// $currentDate, $inc, $min, $max, $mul, $rename, $set, $unset
async function updateCourse2(id) {
  // const course = await Course.updateMany({isPublished: false}); // Could update multiple
  // const result = await Course.updateOne(
  //   { _id: id },
  //   {
  //     $set: {
  //       author: "Juan",
  //       isPublished: false,
  //     },
  //     $currentDate: {
  //       date: "timestamp",
  //     },
  //   }
  // );

  // To get the updated course
  const course = await Course.findByIdAndUpdate(
    id,
    {
      $set: {
        author: "Iris",
        isPublished: false,
      },
      $currentDate: {
        date: "timestamp",
      },
    },
    { new: true }
  );
  // With new true we get the new one instead of old one

  console.log(course);
}


// Delete
async function removeCourse(id) {
  // Course.deleteOne({isPublished: false}); // Since its deleteOne will delete the first one that matches
  // const result = await Course.deleteOne({ _id: id });
  // const result = await Course.deleteMany({ price: { $gte: 20 } }); // To delete Many
  // console.log(result); // { acknowledged: true, deletedCount: 1 }

  // To get the deleted course
  const result = await Course.findByIdAndRemove(id); // will return null if course was already deleted
  console.log(result); 

}


removeCourse("6359ecba1e1a46a2f28dff1a");
