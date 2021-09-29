const { image } = require('faker')
const mongoose = require('mongoose')

const Schema = mongoose.Schema


// Portfoio image usually shouldn't be a string, but we're using fakerjs and it comes with a url.

const employeeSchema = new Schema(
    {
        lastName: {
          type: String,
          trim: true,
        },
        firstName: {
          type: String,
          trim:true
        },
        streetAddress: {
          type: String,
          trim:true
        },
        zipcode: {
            type: String,
            trim:true
          },
        city: {
            type: String,
            trim:true
          },
        state: {
            type: String,
            trim:true
          },
        country: {
            type: String,
            trim:true
          },
        portfolioImg: {
            type: String,
            trim:true
          },
        department:{
          type:String,
          trim:true
        }
      },
      {
        timestamps: true,
      }
)
const employee = mongoose.model('employee', employeeSchema)

module.exports = employee
