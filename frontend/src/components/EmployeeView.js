import React,{ useEffect } from 'react'
import Card from './Card'

export default function EmployeeView() {
    useEffect(() => {
        // Fetch data from the backend

    },[])
    return (
       <>
            <h1 className="text-center">Employees List</h1>
            <div className="mt-5 row row-cols-1 row-cols-md-4 g-5">
            </div>
       </>
    )
}
