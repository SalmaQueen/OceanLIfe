import React, { Component } from 'react'
import logo from './fish.png'
export default class Footer extends Component {
    render() {
        return (
            <div>
                {/* <!-- Footer Starts Here --> */}
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="logo">
              <img src={logo} alt="" style={{width:"100px", height:"100px"}}/>
            </div>
          </div>
          <div className="col-md-12">
            <div className="footer-menu">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">How It Works ?</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-12">
            <div className="social-icons">
              <ul>
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fa fa-rss"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


    
                
            </div>
        )
    }
}
