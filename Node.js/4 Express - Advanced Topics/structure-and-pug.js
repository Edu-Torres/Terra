const express = require("express");
const app = express();
const courses = require('./routes/courses')

// Pug
// View Engine to pass html as response
app.set('view engine', 'pug'); // pug doesnt need require
app.set('views', './views'); // default where we store the templates

app.get('/', (req, res) => {
    res.render('index.pug', {title: 'My Express App', message: 'Hello'});
});



// Structure
app.use('/api/courses', courses) // For any api that has /api/courses



// For DB go to 
// https://expressjs.com/en/guide/database-integration.html

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));