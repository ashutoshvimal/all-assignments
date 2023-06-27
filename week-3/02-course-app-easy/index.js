//## Routes
//### Admin Routes:
// - POST /admin/signup
//   Description: Creates a new admin account.
//   Input: { username: 'admin', password: 'pass' }
//   Output: { message: 'Admin created successfully' }
// - POST /admin/login
//   Description: Authenticates an admin. It requires the admin to send username and password in the headers.
//   Input: Headers: { 'username': 'admin', 'password': 'pass' }
//   Output: { message: 'Logged in successfully' }
// - POST /admin/courses
//   Description: Creates a new course.
//   Input: Headers: { 'username': 'admin', 'password': 'pass' }
//   Input: Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }
//   Output: { message: 'Course created successfully', courseId: 1 }
// - PUT /admin/courses/:courseId
//   Description: Edits an existing course. courseId in the URL path should be replaced with the ID of the course to be edited.
//   Input: Headers: { 'username': 'admin', 'password': 'pass' }
//   Input: Body { title: 'updated course title', description: 'updated course description', price: 100, imageLink: 'https://updatedlinktoimage.com', published: false }
//   Output: { message: 'Course updated successfully' }
// - GET /admin/courses
//   Description: Returns all the courses.
//   Input: Headers: { 'username': 'admin', 'password': 'pass' }
//   Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
//   User Routes:

const express = require('express');
const app = express();
const {v4: uuid} = require('uuid');
//const cors = require('cors');
//const cors = require('cors');

app.use(express.json());
//app.use(cors());

let ADMINS = [];
let USERS = [];
let COURSES = [];

COURSES.push({
               "title": "course title",
               "description": "course description",
               "price": 100,
               "imageLink": "https://linktoimage.com",
               "published": true,
               "id":"123"
             });

function findIndex(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return i;
  }
  return -1;
}

// Admin routes
app.post('/admin/signup', (req, res) => {
  // logic to sign up admin
    const id = uuid();
//    let lastIdx = ADMINS.length-1;
    let newAdmin = req.body;
    newAdmin.id = id;
    ADMINS.push(newAdmin);
    res.send('Admin created successfully');
});

app.post('/admin/login', (req, res) => {
  // logic to log in admin
  const { username, password } = req.headers;

  if(username == 'admin' && password == 'pass'){
    res.send('Logged in successfully')
  }
  else{
    res.send();
  }
//  let idx = findIndex(ADMINS, id)
//  if(idx == -1){
//    res.status(404).send();
//  }
//  else{
//    if(arr[idx].)
//  }
});

app.post('/admin/courses', (req, res) => {
  // logic to create a course
    const { username, password } = req.headers;

    if(username == 'admin' && password == 'pass'){
        let course = req.body;
        let id = uuid();
        course.id = id;
        COURSES.push(course);
        res.send(`Course created successfully, courseId: ${id}`)
    }
    else res.send();
});

app.put('/admin/courses/:courseId', (req, res) => {
  // logic to edit a course
    const { username, password } = req.headers;

    if(username == 'admin' && password == 'pass'){
        const id = req.params.courseId;
        let idx = findIndex(COURSES, id);

        if(idx == -1){
            res.send();
        }
        else{
            let course = req.body;
            COURSES[idx].title = course.title;
            COURSES[idx].description = course.description;
            COURSES[idx].price = course.price;
            COURSES[idx].imageLink = course.imageLink;
            COURSES[idx].published = course.published;

            res.send('Course updated successfully');
        }
    }
    else res.send();
});

app.get('/admin/courses', (req, res) => {
  // logic to get all courses
  res.json(COURSES);
});

// User routes
app.post('/users/signup', (req, res) => {
  // logic to sign up user

});

app.post('/users/login', (req, res) => {
  // logic to log in user
});

app.get('/users/courses', (req, res) => {
  // logic to list all courses
});

app.post('/users/courses/:courseId', (req, res) => {
  // logic to purchase a course
});

app.get('/users/purchasedCourses', (req, res) => {
  // logic to view purchased courses
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
