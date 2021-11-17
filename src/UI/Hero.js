import React from 'react'
import './hero.css'
// import fish from './fish.png'

const Hero=()=> {
    return (
        <div className="hero">
            <div className="left-hero">
                <img src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
            </div>

            <div className="right-hero">
                <h1>OceanLife suppliers</h1>
                <p>This company has existed for sometime now and we are very delighted
                    to have achieved some great success in a period of 3 months.
                </p>

                <h1>What do we do?</h1>
                <p>We supply raw fish to our customers by supplying them at affordable price.</p>

                <h2>Where are we based?</h2>
                <p>We are based in Kilifi county, and we will be very delighted to welcome you all to buy quality fish from us at a wholesale price</p>
            </div>

            
        </div>
    )
}

export default Hero
