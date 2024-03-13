import React from 'react'
import { FaRegHandPointRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Tezhavola() {
    return (
        <div style={{marginTop:"30px"}} className="section1foter">
            <h1>Быстрые <span>ссылки</span></h1>
            <div className="section1foterflex">
                <div className="flexfoter">
                    <NavLink to={"/"}><div className="section1fotericon">
                        <h3>Гарантия <FaRegHandPointRight /></h3>
                    </div></NavLink>
                    <div className="section1fotericon">
                        <h3>Обмен и возврат <FaRegHandPointRight /></h3>
                    </div>
                    <div className="section1fotericon">
                        <h3>Портфолио<FaRegHandPointRight /></h3>
                    </div>
                </div>
                <div className="flexfoter">
                    <div className="section1fotericon">
                        <h3>Диллерам <FaRegHandPointRight /></h3>
                    </div>
                    <div className="section1fotericon">
                        <h3 >Доставка<FaRegHandPointRight /></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tezhavola