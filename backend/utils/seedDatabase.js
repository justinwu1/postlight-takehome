const faker = require('faker')
const Employee = require('../models/employees.model')
// Seeding the database with some random data, note: it will be random everytime the server starts.
const seedDatabase = async ()=>{
    for(let i = 0; i < 20; i++){
        const lastName = faker.name.lastName();
        const firstName = faker.name.firstName();
        const streetAddress = faker.address.streetAddress();
        const zipcode = faker.address.zipCode();
        const city = faker.address.city();
        const state = faker.address.state();
        const country = faker.address.country();
        const portfolioImg = faker.image.people();
        const department = faker.commerce.department();
        const jobType = faker.name.jobType();
        const jobTitle = faker.name.jobTitle();
        const data = { lastName, firstName, streetAddress,zipcode,city,state,country,portfolioImg,department,jobTitle,jobType }
        const employee = new Employee(data)
        await employee.save();
    }
  }
module.exports = seedDatabase;