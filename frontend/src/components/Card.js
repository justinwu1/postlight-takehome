import React from 'react'
import { Link } from 'react-router-dom'
export default function Card(props) {
    const { lastName,firstName,zipcode,streetAddress,country,state,city,portfolioImg,jobTitle,jobType,department } = props.data;
    console.log(props.data)
    return (
        <div className="col">
            <div className="card">
                <img src={portfolioImg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{`${firstName} ${lastName}`}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{jobTitle}</h6>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Department:</b> {`${department}`}</li>
                    <li className="list-group-item"><b>Job type:</b> {`${jobType}`}</li>
                    <li className="list-group-item"><b>Address:</b> {`${streetAddress},${city},${state},${zipcode}`}</li>
                    <li className="list-group-item"><b>Born:</b> {`${country}`}</li>
                </ul>
                <div className="card-body">
                    <Link to="#" className="card-link">Card link</Link>
                    <Link to="#" className="card-link">Another link</Link>
                </div>
            </div>
        </div>
    )
}
