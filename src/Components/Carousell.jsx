import React from 'react'
import c1 from "../Product Images/c&r panel.jpg"
import c2 from "../Product Images/fcma soft.jpg"
import c3 from "../Product Images/Lt PCC.jpg"
import { Link } from 'react-router-dom'

const Carousell = () => {
    return (
        <>
            <div className="carousel slide carouselB" data-bs-ride="carousel" id="carouselExampleIndicators">
                <div className="carousel-indicators">
                    <button aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item  active">
                        <Link to="/about"><img alt="..." className="d-block  imgCarousel" src={c3} /></Link>
                        <div className="carousel-caption caption1">
                            <p className="animated bounceInRight carouselHeader" ><span>Welcome to HT Switchgears </span></p>

                            <p className="animated bounceInLeft d-none d-md-block carouselP1">Established in 2006, HTSwitchgears Pune (India) is a multi-product, vertically integrated manufacturer. Specialized in entire range of Medium Voltage, Low voltage Switchgears & Services.  Company is motivated & promoted by first generation entrepreneurs.</p>
                            <p className="animated bounceInRight carouselP2"><Link to="/about">Learn More</Link></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Link to="/about"><img alt="..." className="d-block  imgCarousel1" src={c2} /></Link>
                        <div className="carousel-caption caption2">
                            <p className="animated bounceInRight carouselHeader" ><span>FCMA Soft Starter for HT & LT </span></p>

                            <p className="animated bounceInLeft d-none d-md-block carouselP1">For 415V to 12KV</p>
                            <p className="animated bounceInRight carouselP2"><Link to="/product">Learn More</Link></p>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <Link to="/about"><img alt="..." className="d-block  imgCarousel" src={c1} /></Link>
                        <div className="carousel-caption caption3">
                            <p className="animated bounceInRight carouselHeader" ><span>C & R panel</span></p>
                            <p className="animated bounceInLeft d-none d-md-block carouselP1">For Local Electricity Board as per specification</p>
                            <p className="animated bounceInRight carouselP2"><Link to="/about">Learn More</Link></p>
                        </div>
                    </div>
                </div><button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" className="carousel-control-prev-icon"></span> <span className="visually-hidden">Previous</span></button> <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" className="carousel-control-next-icon"></span> <span className="visually-hidden">Next</span></button>
            </div>



        </>
    )
}

export default Carousell