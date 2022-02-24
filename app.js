const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use("/styles",express.static(__dirname + "/views/styles"));
app.use("/scripts",express.static(__dirname + "/views/scripts"));

const port = 5000;

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});
app.get('/login', function(req, res) {
    res.render('pages/login');
});

app.get('/sign-up', function(req, res) {
    res.render('pages/signUp');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})