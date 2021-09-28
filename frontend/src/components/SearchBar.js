import React from 'react'

export default function SearchBar() {
    return (
    <>
        <h1 className="mt-5 form-label text-center">Search Employees by name</h1>
        <div className="d-flex justify-content-center">
            <input style={{width:"70%"}}type="text" id="inputPassword5" className="form-control"/>
            <button style={{verticalAlign:'top'}}type="button" className="btn btn-primary">Search </button>
        </div>
    </>
    )
}
