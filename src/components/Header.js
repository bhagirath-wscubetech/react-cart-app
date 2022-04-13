import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Header() {
    const cartCount = useSelector(state => state.total)
    return (
        <nav className="container navbar navbar-expand-lg bg-primary navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Shopper</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className='nav-link active' to={'/'}>Product</Link>
                            {/* <a className="nav-link active" aria-current="page" href="#">Product</a> */}
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link active' to={'/cart'}>Cart ({cartCount})</Link>
                            {/* <a className="nav-link active" aria-current="page" href="cart.html">Cart (0)</a> */}
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
