import React from 'react'
import rasim from '../img/Screenshot from 2024-03-13 14-04-37.png'
import { NavLink } from 'react-router-dom';

function Zakasta() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div className='zakastayyor'>
            <h1 style={{margin:"20px 0 40px 0"}}><span>Оформление заказа</span></h1>
            <div style={{ textAlign: "center" }}>
                <img src={rasim} alt="rasim" />
                <p>Заявка оформлена, ожидайте звонка специалиста</p>
                <p style={{ color: "#10BB87" }}>{today.toLocaleDateString('en-US', options)}</p>
                <p style={{ color: "#10BB87", display: "flex", justifyContent: "center" }}><p style={{ color: "black" }}>Дата прибытия: </p> {tomorrow.toLocaleDateString('en-US', options)}</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                    <NavLink to={"/"}><button style={{ boxShadow: "0px 9px 25px -4px #487B6C80", background: "#10BB87", border: "none", color: "white", padding: "10px 10px", borderRadius: "8px", margin: "20px 0 0 0", fontSize: "14px" }}>На главную</button></NavLink>
                    <button style={{ boxShadow: "0px 9px 25px -4px #487B6C80", background: "white", border: "none", color: "black", padding: "10px 15px", borderRadius: "8px", margin: "20px 0 0 0", fontSize: "14px" }}>Контакты</button>
                </div>
            </div>
        </div>
    )
}

export default Zakasta