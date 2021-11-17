import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <>

            
    {/* <!-- Page Content --> */}
    {/* <!-- About Page Starts Here --> */}
    <div className="contact-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <div className="line-dec"></div>
              <h1>Contact Us</h1>
            </div>
          </div>
          <div className="col-md-6">
            <div id="map">
            		{/* <!-- How to change your own map point
                           1. Go to Google Maps
                           2. Click on your location point
                           3. Click "Share" and choose "Embed map" tab
                           4. Copy only URL and paste it within the src="" field below
                    --> */}
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63820.99517545476!2d36.8388852!3d-1.2867539!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f16b02d007251%3A0xb8beb2dbf14a0af4!2sEastleigh%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1637142374141!5m2!1sen!2ske" width="500" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy">

</iframe>
              {/* <iframe src="<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.99517502029!2d36.838885192871075!3d-1.2867539173708413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f16b02d007251%3A0xb8beb2dbf14a0af4!2sEastleigh%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1637140866413!5m2!1sen!2ske" 
               style={{border:"0"}}></iframe> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-content">
              <div className="container">
                <form id="contact" action="" method="post">
                  <div className="row">
                    <div className="col-md-6">
                      <fieldset>
                        <input name="name" type="text" className="form-control" id="name" placeholder="Your name..." required="" />
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <input name="email" type="text" className="form-control" id="email" placeholder="Your email..." required="" />
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject..." required="" />
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your message..." required="" ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="button">Send Message</button>
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <div className="share">
                        <h6>You can also keep in touch on: <span><a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a><a href="#"><i className="fa fa-twitter"></i></a></span></h6>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- About Page Ends Here --> */}

                
            </>
        )
    }
}
