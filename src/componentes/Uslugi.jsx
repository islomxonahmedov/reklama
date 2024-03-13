import { FaArrowRight } from "react-icons/fa6";
import { FaAngleDown } from 'react-icons/fa'
import React from 'react'
import rasim2 from './img/Screenshot from 2024-02-21 16-39-01.png'
import rasim3 from './img/Rectangle 4001.png'
import rasim4 from './img/Screenshot from 2024-02-18 13-10-00.png'
import rasim5 from './img/Rectangle 4002.png'
import rasim6 from './img/Screenshot from 2024-02-18 13-24-07.png'
import rasim7 from './img/Rectangle 4003.png'
import rasim8 from './img/Screenshot from 2024-02-18 13-35-57.png'
import rasim9 from './img/Rectangle 4004.png'
import rasim10 from './img/Screenshot from 2024-02-18 13-37-12.png'
import rasim11 from './img/Rectangle 4005.png'
import rasim12 from './img/Screenshot from 2024-02-22 14-53-41.png'
import rasim13 from './img/Rectangle 4006.png'
import rasim14 from './img/Screenshot from 2024-02-22 14-52-03.png'


function Uslugi() {
    return (
        <div>
            <div className='uslugicontainer'>
                <h1><span>Услуги</span></h1>
                <p>Следует отметить, что разбавленное изрядной долей эмпатии, рациональное мышление требует определения и уточнения прогресса профессионального сообщества. Но глубокий уровень погружения влечет за собой процесс внедрения и модернизации глубокомысленных рассуждений.</p>
                <button className='katalogbtn'>Развернуть<FaAngleDown /></button>
            </div>
            <div className='imgsohtacontainer'>
                <div>
                    <img src={rasim2} alt="" />
                </div>
            </div>
            <div className="kattaflexuslugi">
                <div className='uslugiflex'>
                    <div><img  src={rasim3} alt="" /></div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <img style={{ width: "50px" }} src={rasim4} alt="" />
                        <h3>Гравировка</h3>
                        <p>Нанесем на изделия логотип, рисунок или надпись</p>
                        <button style={{ width: "165px", fontSize: "14px", marginTop: "10px" }} className='katalogbtn'>Подробнее <FaArrowRight /></button>
                    </div>
                </div>
                <div className='uslugiflex2'>
                    <div><img src={rasim5} alt="" /></div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <img  style={{ width: "50px" }} src={rasim6} alt="" />
                        <h3>Шелкография</h3>
                        <p>Изображения высоко качества на любых материалах</p>
                        <button style={{ width: "165px", fontSize: "14px", marginTop: "10px" }} className='katalogbtn'>Подробнее <FaArrowRight /></button>
                    </div>
                </div>
                <div className='uslugiflex'>
                    <div><img src={rasim7} alt="" /></div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <img  style={{ width: "50px" }} src={rasim8} alt="" />
                        <h3>Тиснение</h3>
                        <p>Нанесения рельефного рисунка</p>
                        <button style={{ width: "165px", fontSize: "14px", marginTop: "10px" }} className='katalogbtn'>Подробнее <FaArrowRight /></button>
                    </div>
                </div>
                <div className='uslugiflex2'>
                    <div><img src={rasim9} alt="" /></div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <img  style={{ width: "50px" }} src={rasim10} alt="" />
                        <h3>Тампопечать</h3>
                        <p>Перенос изображения с помощью силиконового валика</p>
                        <button style={{ width: "165px", fontSize: "14px", marginTop: "10px" }} className='katalogbtn'>Подробнее <FaArrowRight /></button>
                    </div>
                </div>
                <div className='uslugiflex'>
                    <div><img src={rasim11} alt="" /></div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <img  style={{ width: "50px" }} src={rasim12} alt="" />
                        <h3>Запись на USB</h3>
                        <p>Накопители с записью презентации или иной документации компании</p>
                        <button style={{ width: "165px", fontSize: "14px", marginTop: "10px" }} className='katalogbtn'>Подробнее <FaArrowRight /></button>
                    </div>
                </div>
                <div className='uslugiflex2'>
                    <div><img src={rasim13} alt="" /></div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <img  style={{ width: "50px" }} src={rasim14} alt="" />
                        <h3>Услуги дизайнера</h3>
                        <p>В любой вещи в первую очередь люди смотрят на ее оформление</p>
                        <button style={{ width: "165px", fontSize: "14px", marginTop: "10px" }} className='katalogbtn'>Подробнее <FaArrowRight /></button>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Uslugi