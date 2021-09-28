import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
    <div>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Postlight</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/employees">View All Employee</Link>
                    </li>
            </ul>
    </div>
  </div>
    </nav>
    </div>
    )
}
