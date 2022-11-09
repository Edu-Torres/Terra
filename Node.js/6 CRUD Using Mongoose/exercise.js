const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/mongo-exercises")
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.log("Could not connect to MongoDB...", err));


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: Date,
    isPublished: Boolean,
    price: Number,
});

const Course = mongoose.model("courses", courseSchema);

Course.find({ isPublished: true, tags: 'backend' }).select({ name: 1, author: 1 }).sort({ name: 1 })
    .then(courses => console.log("First Query", courses));

Course.find({ isPublished: true, tags: { $in: ['backend', 'frontend'] } }).select('name author price').sort('-price')
    .then(courses => console.log("\n\nSecond Query", courses));

Course.find({ isPublished: true }).or([ { price: { $gte: 15 } }, { name: /.*by.*/i } ])
    .then(courses => console.log("\n\nThird Query", courses)).catch(err => console.log(err));
