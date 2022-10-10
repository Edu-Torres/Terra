const express = require('express');
const router = express.Router();

const courses = [
    { id: 1, name: "Math" },
    { id: 2, name: "Writing" },
    { id: 3, name: "Calculus" }
];

router.get("/", (req, res) => {
    res.send(courses);
});

router.post("/", (req, res) => {
    const course = {
      id: courses.length + 1,
      name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

module.exports = router;