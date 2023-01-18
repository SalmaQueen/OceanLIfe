import React, { Component } from 'react'
import Subscribe from '../Layout/Subscribe'
export default class About extends Component {
    render() {
        return (
            <>
     



    <div className="about-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <div className="line-dec"></div>
              <h1>About Us</h1>
            </div>
          </div>
          <div className="col-md-6">
            <div className="left-image">
              <img src="https://images.unsplash.com/photo-1545315003-c5ad6226c272?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFwcHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
            </div>
          </div>
          <div className="col-md-6 py-4 px-2 " style={{display:"flex", justifyContent:"center", alignItems:"center",fontSize:"30px"}}>
            <div className="right-content " >
            
              <p>We have existed since 2015. We deliver fish in wholesale and in retail to different premises including hotels, events etc</p>
             <br/>
              <p>You can book us today and you will never get disappointed</p>
             <br/>
              <div className="share">
                <h6>Find us on: <span><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-linkedin"></i></a><a href="#"><i className="fa fa-twitter"></i></a></span></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <Subscribe/>
                
            </>
        )
    }
}
