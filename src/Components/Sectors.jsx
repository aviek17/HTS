import React from 'react'
import auto from "../Images/auto.png"
import education from "../Images/education.jpg"
import cement from "../Images/cement.jpg"
import chemical from "../Images/chemical.jpg"
import defence from "../Images/defence.jpg"
import food from "../Images/food.jpg"
import generation from "../Images/gTSector.jpg"
import hospital from "../Images/hospital.jpg"
import it from "../Images/it.jpg"
import mine from "../Images/mine.jpg"
import oil from "../Images/oilGas.jpg"
import reatEstate from "../Images/realEsate.jpg"
import sanitization from "../Images/sanitization department.jpg"
import shopping from "../Images/shopping.jpg"
import solar from "../Images/solar.jpg"
import steel from "../Images/steel.jpg"
import sugar from "../Images/sugar.jpg"
import textile from '../Images/textile.jpg'
import wind from "../Images/wind.jpg"
import "../Styles/Sector.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const data = [
    {
        id: 1,
        src: auto,
        name: "Automobile Sector",
    }, {
        id: 2,
        src: generation,
        name: "Generation & Transmission Sector",
    }, {
        id: 3,
        src: textile,
        name: "Textile & Garments sector ",
    }, {
        id: 4,
        src: steel,
        name: "Steel & other Metallurgical Sectors",
    },
    {
        id: 5,
        src: chemical,
        name: "Chemical & Pharmaceuticals Sector",
    },
    {
        id: 6,
        src: mine,
        name: "Mine Industries ",
    },
    {
        id: 7,
        src: food,
        name: "Food & Beverages Sector ",
    },
    {
        id: 8,
        src: hospital,
        name: "Hospitality & Hospital Sector",
    },
    {
        id: 9,
        src: it,
        name: "I.T Sector ",
    }, {
        id: 10,
        src: education,
        name: "Educational Institutes",
    }, {
        id: 11,
        src: cement,
        name: "Cement Industry ",
    }, {
        id: 12,
        src: oil,
        name: "Oil & Gas Petroleum ",
    }, {
        id: 13,
        src: defence,
        name: "Defence Sector",
    }, {
        id: 14,
        src: wind,
        name: "Wind power",
    }, {
        id: 15,
        src: solar,
        name: "Solar Power",
    }, {
        id: 16,
        src: reatEstate,
        name: "Real Estate",
    }, {
        id: 17,
        src: shopping,
        name: "Commercial Complex",
    }, {
        id: 18,
        src: sanitization,
        name: "Sanitization Department",
    }, {
        id: 19,
        src: sugar,
        name: "Sugar Industry",
    }
]

const Sectors = () => {
    return (
        <>
            <div className="row why1" data-aos="zoom-out">
                <h2> Sectors We Are Working With...</h2>
            </div>



            <div className="bodyA">
                <div className="containerS">
                    <OwlCarousel
                        className='owl-theme'
                        items={4}
                        loop margin={10}
                        nav={true}
                        autoplay={true}
                        autoplayTimeout={2000}
                        autoplayHoverPause ={true}
                        responsive = {{
                            0:{
                                items:1,
                                nav : false
                            },
                            600 : {
                                items:2,
                                nav : false,
                            },
                            1000 : {
                                items:3,
                                nav : false,
                            },
                            1200  : {
                                items : 4
                            }
                        }}
                    >
                        {
                            data.map(user => {
                                return (

                                    <div className="cardS">
                                        <div className="contentS">
                                            <img src={user.src} alt="" />
                                            <h3>{user.name}</h3>
                                            <p></p>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </OwlCarousel>
                </div>
            </div>

        </>
    )
}

export default Sectors;