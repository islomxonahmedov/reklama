import React, { useContext, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Slider from "react-slick";
import axios from "axios";
import { MdCurrencyRuble } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ContextData } from "./context/Context";

function Card() {
    const {
        data,
    } = useContext(ContextData);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1500,
        rtl: false,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <div className="caruselcontainer">
            <Slider {...settings}>
                {data.map(item => (
                    <NavLink to={`/${item.id}`}>
                        <div className='card_container'>
                            <div>
                                <figure><img id="imgradius" src={item.img} alt="rsim1" /></figure>
                                <h4 className="cardhover">от {item.price}<MdCurrencyRuble /></h4>
                            </div>
                            <div style={{ position: "relative", bottom: "30px" }}>
                                <h3 style={{ color: "black" }}>{item.name.length > 25 ? item.name.slice(0, 25) + "..." : item.name}</h3>
                                <NavLink to={`/${item.id}`}><button className="btnshadovhome">Выбрать вид <FaPlus /></button></NavLink>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </Slider>
        </div>
    );
}

export default Card;

