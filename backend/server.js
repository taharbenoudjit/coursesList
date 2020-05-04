let express = require('express'),
   path = require('path'),
   cors = require('cors'),
   bodyParser = require('body-parser'),



// Set port 
const coursesRoute = require('./routes/course.route')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cors()); 
app.use(express.static(path.join(__dirname, 'dist/Courses')));
app.use('/', express.static(path.join(__dirname, 'dist/Courses')));
app.use('/api', coursesRoute)


// Creat port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 error
app.use((req, res, next) => {
    next(createError(404));
 });


//error handler 
app.use(function (err, req, res, next) {
    console.error(err.message); //Log error message in the console of server
    if (!err.statusCode) err.statusCode = 500; //if the error has unknown code, set it to 500 (server error)
    res.status(err.statusCode).send(err.message); // send a stutus code and a message in case of an error
  });