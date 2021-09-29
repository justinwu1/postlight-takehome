import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

export default function EmployeeEdit() {
    const params = useParams()
        // Use hooks for controlled input elements
        const [firstName,setFirstName] = useState('')
        const [lastName,setlastName] = useState('')
        const [jobType,setJobType] = useState('')
        const [jobTitle,setJobTitle] = useState('')
        const [streetAddress,setStreetAddress] = useState('')
        const [city,setCity] = useState('')
        const [state,setState] = useState('')
        const [country,setCountry] = useState('')
        const [zipcode,setZipCode] = useState('')
        const [portfolioImg,setPortfolioImg] = useState('')

    // Edit an employee
    const editEmployee = async(event)=>{
        event.preventDefault()
        const data = {firstName,lastName,jobType,jobTitle,streetAddress,city,state,country,zipcode,portfolioImg}
        await axios.patch(`http://localhost:5000/employee/update/${params.id}`,data)
    }
    return (
        <form onSubmit={editEmployee}>
            <div className="mb-3">
                <label  className="form-label">First Name</label>
                <input type="text" className="form-control" onChange={(e)=>{setFirstName(e.target.value)}} />
            </div>
            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" onChange={(e)=>{setlastName(e.target.value)}} />
            </div>
            <div className="mb-3">
                <label  className="form-label">Job Type</label>
                <input type="text" className="form-control" onChange={(e)=>{setJobType(e.target.value)}} />
            </div>
            <div className="mb-3">
                <label  className="form-label">Job Title</label>
                <input type="text" className="form-control"onChange={(e)=>{setJobTitle(e.target.value)}} />
            </div>
            <div className="mb-3">
                <label  className="form-label">Street Address</label>
                <input type="text" className="form-control"onChange={(e)=>{setStreetAddress(e.target.value)}} />
            </div>
            <div className="mb-3">
                <label  className="form-label">City</label>
                <input type="text" className="form-control" onChange={(e)=>{setCity(e.target.value)}}/>
            </div>
            <div className="mb-3">
                <label  className="form-label">State</label>
                <input type="text" className="form-control" onChange={(e)=>{setState(e.target.value)}}/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Zipcode</label>
                <input type="text" className="form-control"onChange={(e)=>{setZipCode(e.target.value)}} />
            </div>
            <div className="mb-3">
                <label  className="form-label">Country</label>
                <input type="text" className="form-control" onChange={(e)=>{setCountry(e.target.value)}}/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Portfolio Image</label>
                <input type="text" className="form-control" onChange={(e)=>{setPortfolioImg(e.target.value)}}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
