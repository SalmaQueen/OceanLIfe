import React, { Component } from 'react'
import Subscribe from '../Layout/Subscribe'

export default class Home extends Component {
    render() {
        return (
            <>
               {/* <!-- Page Content --> */}
    {/* <!-- Banner Starts Here --> */}
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="caption">
              <h2>Get Fish At affordable price today</h2>
              <div className="line-dec"></div>
              <p>We have existed since <strong>2015</strong> and we are excited to serve you best in our ability 
              <br/><br/>Please tell your friends about <a rel="nofollow" href="https://www.facebook.com/">OceanLife</a></p>
              <div className="main-button">
                <a href="#">Order Now!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Banner Ends Here --> */}

    {/* <!-- Featured Starts Here --> */}
    <div className="featured-items">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <div className="line-dec"></div>
              <h1>Featured Items</h1>
            </div>
          </div>
          <div className="col-md-12">
            <div className="owl-carousel owl-theme">
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/1578445/pexels-photo-1578445.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Item 1"/>
                  <h4>Proin vel ligula</h4>
                  <h6>$15.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/229789/pexels-photo-229789.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Item 2"/>
                  <h4>Erat odio rhoncus</h4>
                  <h6>$25.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/2792153/pexels-photo-2792153.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Item 3"/>
                  <h4>Integer vel turpis</h4>
                  <h6>$35.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/676560/pexels-photo-676560.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Item 4"/>
                  <h4>Sed purus quam</h4>
                  <h6>$45.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/3311091/pexels-photo-3311091.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Item 5"/>
                  <h4>Morbi aliquet</h4>
                  <h6>$55.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/1409050/pexels-photo-1409050.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Item 6"/>
                  <h4>Urna ac diam</h4>
                  <h6>$65.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/1683545/pexels-photo-1683545.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Item 7"/>
                  <h4>Proin eget imperdiet</h4>
                  <h6>$75.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/1342391/pexels-photo-1342391.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Item 8"/>
                  <h4>Nullam risus nisl</h4>
                  <h6>$85.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/3010500/pexels-photo-3010500.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Item 9"/>
                  <h4>Cras tempus</h4>
                  <h6>$95.00</h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/* <!-- Featred Ends Here --> */}
  <Subscribe/>

                
            </>
        )
    }
}
