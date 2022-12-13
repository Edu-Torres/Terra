const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const Author = mongoose.model('Author', new mongoose.Schema({
  name: String,
  bio: String,
  website: String
}));

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  author: { // Looks tight but MDB wont complain if id is invalid
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author' // So it knows from which Collection to get the data
  }
}));

async function createAuthor(name, bio, website) { 
  const author = new Author({
    name, 
    bio, 
    website 
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, author) {
  const course = new Course({
    name, 
    author
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course
    .find()
    .populate('author', 'name -_id') // Tell which property to check its ref
    // If id in ref doesn't match it returns null
    // Second parameter is the selected params to look at, - excludes them
    .select('name author');
  console.log(courses);
}

// createAuthor('Edu', 'My bio', 'My Website');

// createCourse('Node Course', '6370ddf08778ea031dc651f0')

listCourses();