import React, { Component } from "react";
import Subscribe from "../Layout/Subscribe";
import { Link } from "react-router-dom";
export default class Products extends Component {
  render() {
    return (
      <>
        {/* <!-- Page Content --> */}
        {/* <!-- Items Starts Here --> */}
        <div className="featured-page">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="section-heading">
                  <div className="line-dec"></div>
                  <h1>Featured Items</h1>
                </div>
              </div>
              {/* <div className="col-md-8 col-sm-12">
                <div id="filters" className="button-group">
                  <button className="btn btn-primary" data-filter="*">
                    All Products
                  </button>
                  <button className="btn btn-primary" data-filter=".new">
                    Newest
                  </button>
                  <button className="btn btn-primary" data-filter=".low">
                    Low Price
                  </button>
                  <button className="btn btn-primary" data-filter=".high">
                    Hight Price
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="featured container no-gutter">
          <div className="row posts">
            <div id="1" className="item new col-md-4">
              <Link to="/products/single">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/1578445/pexels-photo-1578445.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <h4>Proin vel ligula</h4>
                  <h6>$15.00</h6>
                </div>
              </Link>
            </div>
            <div id="2" className="item high col-md-4">
              <Link to="/products/single">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/229789/pexels-photo-229789.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <h4>Erat odio rhoncus</h4>
                  <h6>$25.00</h6>
                </div>
              </Link>
            </div>
            <div id="3" className="item low col-md-4">
              <Link to="/products/single">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/2792153/pexels-photo-2792153.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <h4>Integer vel turpis</h4>
                  <h6>$35.00</h6>
                </div>
              </Link>
            </div>
            <div id="4" className="item low col-md-4">
              <Link to="/products/single">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/1894346/pexels-photo-1894346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                  <h4>Sed purus quam</h4>
                  <h6>$45.00</h6>
                </div>
              </Link>
            </div>
            <div id="5" className="item new high col-md-4">
              <Link to="/products/single">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/676560/pexels-photo-676560.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <h4>Morbi aliquet</h4>
                  <h6>$55.00</h6>
                </div>
              </Link>
            </div>
            <div id="6" className="item new col-md-4">
              <Link to="/products/single">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/3311091/pexels-photo-3311091.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <h4>Urna ac diam</h4>
                  <h6>$65.00</h6>
                </div>
              </Link>
            </div>
            <div id="7" className="item new high col-md-4">
              <Link to="/products/single">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/1409050/pexels-photo-1409050.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <h4>Proin eget imperdiet</h4>
                  <h6>$75.00</h6>
                </div>
              </Link>
            </div>
            <div id="8" className="item low new col-md-4">
              <Link to="/products/single">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/1683545/pexels-photo-1683545.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <h4>Nullam risus nisl</h4>
                  <h6>$85.00</h6>
                </div>
              </Link>
            </div>
            <div id="9" className="item new col-md-4">
              <Link to="/products/single">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/1342391/pexels-photo-1342391.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <h4>Cras tempus</h4>
                  <h6>$95.00</h6>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="page-navigation">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul>
                  <li className="current-page">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!--  Page content Ends Here --> */}

        <Subscribe />
      </>
    );
  }
}
