import React, { useContext } from 'react'
import rasim1 from './img/Screenshot from 2024-02-21 09-57-04.png'
import { FaAngleDown } from 'react-icons/fa'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imag9 from "./img/Screenshot from 2024-02-18 14-41-37.png"
import imag10 from "./img/Screenshot from 2024-02-18 14-43-19.png"
import imag11 from "./img/Screenshot from 2024-02-18 14-44-41.png"
import imag12 from "./img/Screenshot from 2024-02-18 14-45-47.png"
import imag13 from "./img/Screenshot from 2024-02-18 14-48-44.png"
import imag14 from "./img/Screenshot from 2024-02-18 14-49-51.png"
import imag15 from "./img/Screenshot from 2024-02-18 14-51-06.png"
import imag16 from "./img/Screenshot from 2024-02-18 14-52-46.png"
import imag17 from "./img/Screenshot from 2024-02-18 14-53-51.png"
import imag18 from "./img/Screenshot from 2024-02-18 14-55-16.png"
import { ContextData } from './context/Context';
import Product from './Prudects';

function Katalog() {
    const {
        data,
    } = useContext(ContextData);

    // karusel
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1500,
        rtl: false,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 7,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 676,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    };
    return (
        <>
            <div className='katalog'>
                <div className="section_1_katalog">
                    <div className="section1katalog_box1">
                        <h1><span>Каталог</span></h1>
                        <p>Следует отметить, что разбавленное изрядной долей эмпатии, рациональное мышление требует определения и уточнения прогресса профессионального сообщества. Но глубокий уровень погружения влечет за собой процесс внедрения и модернизации глубокомысленных рассуждений.</p>
                        <button className='katalogbtn'>Развернуть<FaAngleDown /></button>
                    </div>
                    <div className="section1katalog_box2">
                        <img src={rasim1} alt="rasimlar" />
                    </div>
                </div>
                <div style={{ marginTop: "60px" }} className="slidercarusel">
                    <Slider {...settings}>
                        <div >
                            <img src={imag9} alt="rasimlar" />
                            <h4>Кружки</h4>
                        </div>
                        <div>
                            <img src={imag10} alt="rasimlar" />
                            <h4>Термосы</h4>
                        </div>
                        <div>
                            <img src={imag11} alt="rasimlar" />
                            <h4>Аксессуары</h4>
                        </div>
                        <div>
                            <img src={imag12} alt="rasimlar" />
                            <h4>Канцелярия</h4>
                        </div>
                        <div>
                            <img src={imag13} alt="rasimlar" />
                            <h4>Флеш-карты</h4>
                        </div>
                        <div>
                            <img src={imag14} alt="rasimlar" />
                            <h4>HDD</h4>
                        </div>
                        <div>
                            <img src={imag15} alt="rasimlar" />
                            <h4>SSD</h4>
                        </div>
                        <div>
                            <img src={imag16} alt="rasimlar" />
                            <h4>Текстиль</h4>
                        </div>
                        <div>
                            <img src={imag17} alt="rasimlar" />
                            <h4>Упаковка</h4>
                        </div>
                        <div>
                            <img src={imag18} alt="rasimlar" />
                            <h4>Xiaomi</h4>
                        </div>
                    </Slider>
                </div>
                <Product />
            </div>

        </>
    )
}

export default Katalog