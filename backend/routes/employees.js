const router = require('express').Router()
let Employee = require('../models/employees.model')


// Return all the employees
router.get('/employees',(req, res) => {
    Employee.find({}).exec((err, result) => {
      if (err) {
        return res.status(400).json(err)
      }
      res.status(200).json(result)
    })
})

// Add an employee
router.post('/employees', (req, res) => {
    const lastName = req.body.lastName;
    const firstName = req.body.firstName;
    const streetAddress = req.body.streetAddress;
    const zipcode = req.body.zipcode;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;
    const portfolioImg = req.body.portfolioImg;
    const department = req.body.department
    const jobType = faker.name.jobType();
    const jobTitle = faker.name.jobTitle();
    const data = { lastName, firstName, streetAddress,zipcode,city,state,country,portfolioImg,department,jobType,jobTitle }
    const employee = new Employee(data)
    employee.save((err, result) => {
      if (err) {
        return res.status(400).json(err)
      }
      res.status(200).json(result)
    })
  })

  // Return single employee data
router.get('/employee/:id', (req, res) => {
    Employee.findOne({ _id: req.params.id }).exec((err, employee) => {
      if (err) {
        return res.status(400).json(err)
      }
      res.json(employee)
    })
})

 // Delete an employee from  the database
router.delete('/employee/:id',(req, res) => {
    Employee.findOneAndDelete({ _id: req.params.id }).exec((err, result) => {
      if (err) {
        return res.status(400).json(err)
      }
      res.status(200).json(result)
    })
  })

// Update the data for an employee
router.patch('/employee/update/:id',(req, res) => {
    const data = {
        id: req.params.id,
        lastName:req.body.lastName,
        firstName:req.body.firstName,
        streetAddress:req.body.streetAddress,
        zipcode:req.body.zipcode,
        city:req.body.city,
        state:req.body.state,
        country:req.body.country,
        portfolioImg:req.body.portfolioImg,
        department:req.body.department,
        jobTitle:req.body.jobTitle,
        jobType:req.body.jobType
    }
    Employee.findOneAndUpdate({ _id: data.id }, data, {
      returnOriginal: false,
    }).exec((err, result) => {
      if (err) {
        return res.status(400).json(err)
      }
      res.status(200).json(result)
    })
  })
module.exports = router