import React, { useContext } from 'react'
import { ContextData } from '../context/Context';
import { FaArrowRight } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { Link, NavLink } from 'react-router-dom';

function Aftarizatsiya() {
    const {
        errorState,
        handleLogin,
        handleRegister,
        getUserValue,
    } = useContext(ContextData);
    return (
        <div className='aftarizatsiyaspan'>
            <div>
                <h1><span>Авторизация</span></h1>
            </div>
            <div className='aptarizatsiyacenter'>
                <button style={{ marginLeft: "70%", boxShadow: '0px 4px 7px 0px #00000026', width: "150px" }} className='btnshadovhome bvcx'>Пропустить<FaArrowRight /></button>
                <div id='aftarizatsiyastyle' style={{ display: "flex", marginTop: "8%", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <h4>Логин</h4>
                        {/* Электро́нная по́чта */}
                        <input className='inputaftarizatsiya' onInput={(e) => getUserValue(e)} type="text" name='username' placeholder='ex@mail.com' />
                        <p style={{ color: "red" }}>{errorState?.username}</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <h4>Password</h4>
                        <div><input className='inputaftarizatsiya' onInput={(e) => getUserValue(e)} type="text" name='password' placeholder='• • • • • • • •' /><FiEye style={{ position: "relative", right: "30px" }} /></div>
                        <p style={{ color: "red" }}>{errorState?.password}</p>
                    </div>
                </div>
                <div className='zaplitparol' style={{ display: "flex", justifyContent: "space-between", marginTop: "30px" }}>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <button className='btnshadovhome' style={{ width: "80px" }} onClick={handleLogin} type="button">Войти</button>
                        <Link to={"/registratsiya"}><button className='btnshadovhome bcds' style={{ width: "120px" }}
                            // onClick={handleRegister}
                            type="button">Регистрация</button></Link>
                    </div>
                    <div style={{ marginTop: "10px", textDecoration: "underline", color: "#10BB87", cursor: "pointer" }}>Забыли пароль?</div>
                </div>
            </div>
        </div>
    )
}

export default Aftarizatsiya