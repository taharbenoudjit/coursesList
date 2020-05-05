const express = require('express');
const app = express();
const courseRoute = express.Router();

// Employee model
let Course = require('../models/Course');

// Add Employee
courseRoute.route('/create').post((req, res, next) => {
  Course.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Employees
courseRoute.route('/').get((req, res) => {
  Course.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single employee
courseRoute.route('/read/:id').get((req, res) => {
  Course.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
courseRoute.route('/update/:id').put((req, res, next) => {
  Course.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete employee
courseRoute.route('/delete/:id').delete((req, res, next) => {
  Course.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = courseRoute;