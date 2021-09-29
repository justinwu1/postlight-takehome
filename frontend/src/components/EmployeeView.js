import React,{ useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

export default function EmployeeView() {
    const [employeeData, setEmployeeData] = useState([]);
    const [deletedEmployee,setDeltedEmployee] = useState(false);
    // Fetch data from the backend first render
    useEffect(() => {
        const fetchData = async()=>{
            const { data } = await axios.get("http://localhost:5000/employees")
            setEmployeeData(data)
        }
        fetchData();
        // If rerender, reset it back to false for next deletion
        setDeltedEmployee(false)
    },[deletedEmployee])
    // Render all employees in a card
    const renderEmployees = ()=>{
        return employeeData.map((ele)=>{
            return (
                <Card key={ele._id}deleteEmployee={deleteEmployee} data = { ele }/>
            )
        })
    }
    // Delete request, setting deletedEmployee true will rerender the page.
        const deleteEmployee = async(id)=>{
            await axios.delete(`http://localhost:5000/employee/${id}`)
            setDeltedEmployee(true);
        }
    return (
       <>   
            <div>
                <h1 className="text-center">Employees List</h1>
            </div>
            <div className="mt-5 row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5">
                {renderEmployees()}
            </div>
       </>
    )
}
