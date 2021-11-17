import React, { Component } from 'react'
import logo from './fish.png'
import {Link } from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
              <a className="navbar-brand" href="#">
                  <img src={logo} alt="" style={{width:"115px", height:"115px", paddingBottom:"2rem"}}/></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products">Products
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/about">About Us</Link>
                    <span className="sr-only">(current)</span>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}
