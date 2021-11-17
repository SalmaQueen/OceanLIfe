import React, { Component } from 'react'
import Subscribe from '../Layout/Subscribe'
export default class singleProduct extends Component {
    render() {
        return (
            <>

{/* <!-- Single Starts Here --> */}
    <div className="single-product">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <div className="line-dec"></div>
              <h1>Single Product</h1>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-slider">
              <div id="slider" className="flexslider">
                <ul className="slides">
                  <li>
                    <img src="https://images.pexels.com/photos/1894346/pexels-photo-1894346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </li>
                  <li>
                    <img src="https://images.pexels.com/photos/1894346/pexels-photo-1894346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </li>
                  <li>
                    <img src="https://images.pexels.com/photos/1894346/pexels-photo-1894346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </li>
                  <li>
                    <img src="https://images.pexels.com/photos/1894346/pexels-photo-1894346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </li>
                  {/* <!-- items mirrored twice, total of 12 --> */}
                </ul>
              </div>
              <div id="carousel" className="flexslider">
                <ul className="slides">
                  <li>
                    <img src="https://images.pexels.com/photos/1894346/pexels-photo-1894346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260pg" />
                  </li>
                  <li>
                    <img src="https://images.pexels.com/photos/1894346/pexels-photo-1894346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260pg" />
                  </li>
                  <li>
                    <img src="https://images.pexels.com/photos/1894346/pexels-photo-1894346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260pg" />
                  </li>
                  <li>
                    <img src="https://images.pexels.com/photos/1894346/pexels-photo-1894346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260pg" />
                  </li>
                  {/* <!-- items mirrored twice, total of 12 --> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-content">
              <h4>Single Product Name</h4>
              <h6>$55.00</h6>
              <p>Proin commodo, diam a ultricies sagittis, erat odio rhoncus metus, eu feugiat lorem lacus aliquet arcu. Curabitur in gravida nisi, non placerat nibh. Praesent sit amet diam ultrices, commodo turpis id, dignissim leo. Suspendisse mauris massa, porttitor non fermentum vel, ullamcorper scelerisque velit. </p>
              <span>7 left on stock</span>
              <form action="" method="get">
                <label for="quantity">Quantity:</label>
                <input name="quantity" type="quantity" className="quantity-text" id="quantity" 
                	onfocus="if(this.value == '1') { this.value = ''; }" 
                    onBlur="if(this.value == '') { this.value = '1';}"
                    value="1"/>
                <input type="submit" className="button" value="Order Now!"/>
              </form>
              <div className="down-content">
                <div className="categories">
                  <h6>Category: <span><a href="#">Pants</a>,<a href="#">Women</a>,<a href="#">Lifestyle</a></span></h6>
                </div>
                <div className="share">
                  <h6>Share: <span><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-linkedin"></i></a><a href="#"><i className="fa fa-twitter"></i></a></span></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Single Page Ends Here --> */}


    
    {/* <!-- Similar Starts Here --> */}
    <div className="featured-items">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <div className="line-dec"></div>
              <h1>You May Also Like</h1>
            </div>
          </div>
          <div className="col-md-12">
            <div className="owl-carousel owl-theme">
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/1894346/pexels-photo-1894346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260g" alt="Item 1"/>
                  <h4>Proin vel ligula</h4>
                  <h6>$15.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/1894346/pexels-photo-1894346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260g" alt="Item 2"/>
                  <h4>Erat odio rhoncus</h4>
                  <h6>$25.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/1894346/pexels-photo-1894346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260g" alt="Item 3"/>
                  <h4>Integer vel turpis</h4>
                  <h6>$35.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/1894346/pexels-photo-1894346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260g" alt="Item 4"/>
                  <h4>Sed purus quam</h4>
                  <h6>$45.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/1894346/pexels-photo-1894346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260g" alt="Item 5"/>
                  <h4>Morbi aliquet</h4>
                  <h6>$55.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/1894346/pexels-photo-1894346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260g" alt="Item 6"/>
                  <h4>Urna ac diam</h4>
                  <h6>$65.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/1894346/pexels-photo-1894346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260g" alt="Item 7"/>
                  <h4>Proin eget imperdiet</h4>
                  <h6>$75.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/1894346/pexels-photo-1894346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260g" alt="Item 8"/>
                  <h4>Nullam risus nisl</h4>
                  <h6>$85.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="https://images.pexels.com/photos/1894346/pexels-photo-1894346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260g" alt="Item 9"/>
                  <h4>Cras tempus</h4>
                  <h6>$95.00</h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Similar Ends Here --> */}

    <Subscribe/>


                
            </>
        )
    }
}
