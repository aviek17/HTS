import React from 'react'
import c1 from "../photo for flashing/33KV, kiosk for wind mil.JPG"
import c2 from "../Product Images/generator relay.jpg"
import c3 from "../photo for flashing/33KV__LBS_PANEL-removebg-preview.png"
import c4 from "../Product Images/vacum contractor.jpg"
import c5 from "../photo for flashing/BUS_CAPACITOR_PANEL-removebg-preview.png"
import c6 from "../Product Images/Synchronizing panel.jpg"
import c7 from "../Product Images/load isolator.jpg"
import { Link } from 'react-router-dom'

const Carousell = () => {
    return (
        <>
            <div className="carousel slide carouselB" data-bs-ride="carousel" id="carouselExampleIndicators">
                <div className="carousel-indicators">
                    <button aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button>
                    <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button>
                    <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button>
                    <button aria-label="Slide 4" data-bs-slide-to="3" data-bs-target="#carouselExampleIndicators" type="button"></button>
                    <button aria-label="Slide 5" data-bs-slide-to="4" data-bs-target="#carouselExampleIndicators" type="button"></button>
                    <button aria-label="Slide 6" data-bs-slide-to="5" data-bs-target="#carouselExampleIndicators" type="button"></button>
                    <button aria-label="Slide 7" data-bs-slide-to="6" data-bs-target="#carouselExampleIndicators" type="button"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item  active">
                        <Link to="/about"><img alt="..." className="d-block  imgCarousel" src={c3} /></Link>
                        <div className="carousel-caption caption1">
                            <p className="animated bounceInRight carouselHeader" ><span>Welcome to HT Switchgears </span></p>

                            <p className="animated bounceInLeft d-none d-md-block carouselP1">One Stop Electrical Solution</p>
                            <p className="animated bounceInRight carouselP2"><Link to="/about">Learn More</Link></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Link to="/about"><img alt="..." className="d-block  imgCarousel1" src={c2} /></Link>
                        <div className="carousel-caption caption2">
                            <p className="animated bounceInRight carouselHeader" ><span>Welcome to HT Switchgears </span></p>

                            <p className="animated bounceInLeft d-none d-md-block carouselP1">One Stop Electrical Solution</p>
                            <p className="animated bounceInRight carouselP2"><Link to="/product">Learn More</Link></p>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <Link to="/about"><img alt="..." className="d-block  imgCarousel" src={c1} /></Link>
                        <div className="carousel-caption caption3">
                            <p className="animated bounceInRight carouselHeader" ><span>Welcome to HT Switchgears </span></p>
                            <p className="animated bounceInLeft d-none d-md-block carouselP1">One Stop Electrical Solution</p>
                            <p className="animated bounceInRight carouselP2"><Link to="/about">Learn More</Link></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Link to="/about"><img alt="..." className="d-block  imgCarousel1" src={c4} /></Link>
                        <div className="carousel-caption caption2">
                            <p className="animated bounceInRight carouselHeader" ><span>Welcome to HT Switchgears </span></p>

                            <p className="animated bounceInLeft d-none d-md-block carouselP1">One Stop Electrical Solution</p>
                            <p className="animated bounceInRight carouselP2"><Link to="/product">Learn More</Link></p>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <Link to="/about"><img alt="..." className="d-block  imgCarousel" src={c5} /></Link>
                        <div className="carousel-caption caption3">
                            <p className="animated bounceInRight carouselHeader" ><span>Welcome to HT Switchgears </span></p>
                            <p className="animated bounceInLeft d-none d-md-block carouselP1">One Stop Electrical Solution</p>
                            <p className="animated bounceInRight carouselP2"><Link to="/about">Learn More</Link></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Link to="/about"><img alt="..." className="d-block  imgCarousel1" src={c6} /></Link>
                        <div className="carousel-caption caption2">
                            <p className="animated bounceInRight carouselHeader" ><span>Welcome to HT Switchgears </span></p>

                            <p className="animated bounceInLeft d-none d-md-block carouselP1">One Stop Electrical Solution</p>
                            <p className="animated bounceInRight carouselP2"><Link to="/product">Learn More</Link></p>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <Link to="/about"><img alt="..." className="d-block  imgCarousel" src={c7} /></Link>
                        <div className="carousel-caption caption3">
                            <p className="animated bounceInRight carouselHeader" ><span>Welcome to HT Switchgears </span></p>
                            <p className="animated bounceInLeft d-none d-md-block carouselP1">One Stop Electrical Solution</p>
                            <p className="animated bounceInRight carouselP2"><Link to="/about">Learn More</Link></p>
                        </div>
                    </div>
                   

                    {/* here remove the div and use map function to view in banner          
                                    write code here

                                    
                     */}

                </div>
                <button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" ></span> <span><box-icon name='chevron-left' type='solid' ></box-icon></span></button>
                <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" ></span> <span ><box-icon type='solid' name='chevron-right'></box-icon></span></button>
            </div>



        </>
    )
}

export default Carousell