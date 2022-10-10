// nodemon npm package to run constantly
const express = require("express");
const Joi = require("joi");
const app = express();

// Allow parse in request's bodies
app.use(express.json()); // Middleware that is used in the request processing pipeline

// '/' slash representes the root of the website
// req object has bunch of methods about the request https://expressjs.com/en/4x/api.html#req

app.get("/", (req, res) => {
  res.send("Hello Juanito Torres");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

// How to read URL parameters (Required Parameters)
app.get("/api/courses/:id", (req, res) => {
  // res.send(req.params.id); // 8
  res.send(req.params); // { id: "8"}
});

// Query Strig Parameters (Optional)
app.get("/api/posts", (req, res) => {
  res.send(req.query); // {"likes":"7"} from http://localhost:5000/api/posts?likes=7
});

const students = [
  { id: 1, name: "Jorge Campos" },
  { id: 2, name: "Hugo Sanchez" },
  { id: 3, name: "Benjamin Galindo" },
];

app.get("/api/students", (req, res) => {
  res.send(students);
});

// res.status sends  the HTTP Status
app.get("/api/students/:id", (req, res) => {
  const student = students.find((stu) => stu.id === parseInt(req.params.id));
  if (!student)
    res.status(404).send("The course with the given ID was not found.");
  res.send(student);
});

// POST
app.post("/api/students", (req, res) => {
  // Input validation
  if (!req.body.name || req.body.name.lenth < 3) {
    // 400 Bad Request
    res.status(400).send("Name is required and should be minimum 3 characters");
    return; // Since we don't want it to continue
  }
  const student = {
    id: students.length + 1,
    name: req.body.name, // Assuming the POST request has a body with a name in it
  }; // For this to work we need to enable parsing of JSON objects in the body of a response
  students.push(student);
  res.send(student);
});

const courses = [
  { id: 1, name: "Math" },
  { id: 2, name: "Writing" },
];

// Validation using joi
app.post("/api/courses", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  const result = schema.validate(req.body);

  if (result.error) {
    // 400 Bad Request
    res.status(400).send(result.error.details[0].message); // Thats where the error message is
    return; // Since we don't want it to continue
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name, // Assuming the POST request has a body with a name in it
  }; // For this to work we need to enable parsing of JSON objects in the body of a response
  courses.push(course);
  res.send(course);
});


// PUT
app.put('/api/students/:id', (req, res) => {
  // Find id
  const student = students.find((stu) => stu.id === parseInt(req.params.id));
  if (!student) 
    return res.status(404).send("The student with the given ID was not found.");
  // Validate update (Refactored)
  // const result = validateStudnet(req.body);
  // Object destructuring
  const { error, value } = validateStudnet(req.body); // Can be written without the value
  if (error) 
    return res.status(400).send(error.details[0].message);

  student.name = req.body.name
  res.send(student);
});

function validateStudnet(student) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(student);
}


// DEELETE
app.delete('/api/students/:id', (req, res) => {
  const student = students.find((stu) => stu.id === Number(req.params.id));
  if (!student) 
    return res.status(404).send("The student with the given ID was not found.");
  
  const index = students.indexOf(student);
  students.splice(index, 1);

  res.send(student);
});



// PORT
// Environment variable, variable whose value is set outside this application
// To set an Env Var use export (Mac) or set (Windows)  export/set PORT=5000 in CLI
// In PowerShell $env:PORT = 5000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
