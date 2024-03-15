import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextData } from '../context/Context';

function Registaratsiya() {
    const {
        errorState,
        handleLogin,
        handleRegister,
        getUserValue,
    } = useContext(ContextData);
    return (
        <div className='aftarizatsiyaspan'>
            <div>
                <h1><span>Регистрация</span></h1>
            </div>

            <div className='aptarizatsiyacenter'>
                <form className='labelflex' style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #F2F2F2", padding: "30px 0", borderBottom: "1px solid #F2F2F2" }}>
                    <label style={{ display: "flex", gap: "10px", fontSize: "20px" }}><input type="radio" name="myRadioGroup" value="option1" />Физическое лицо</label>
                    <label style={{ display: "flex", gap: "10px", fontSize: "20px" }}><input type="radio" name="myRadioGroup" value="option1" />Юридическое лицо</label>
                    <div></div>
                </form>


                <div className='aftarizatsiyafle1' style={{ display: "flex", marginTop: "8%", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <h4>Общество</h4>
                        {/* Электро́нная по́чта */}
                        <input style={{ width: "100px" }} className='inputaftarizatsiya' type="text" name='next' placeholder='ОАО' />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <h4>Название</h4>
                        <input style={{ width: "330px" }} className='inputaftarizatsiya' type="text" name='innane' placeholder='Строй групп' />
                    </div>
                </div>


                <div className='aftarizatsiyafle1' style={{ display: "flex", marginTop: "2%", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <h4>ИНН</h4>
                        {/* Электро́нная по́чта */}
                        <input style={{ width: "220px" }} className='inputaftarizatsiya' type="text" name='next' placeholder='0000000000' />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <h4>КПП</h4>
                        <div><input style={{ width: "220px" }} className='inputaftarizatsiya' type="text" name='innane' placeholder='0000000000' /></div>
                    </div>
                </div>


                <div style={{ marginTop: "2%", }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <h4>Р/С</h4>
                        {/* Электро́нная по́чта */}
                        <input style={{ width: "100%" }} className='inputaftarizatsiya' type="text" name='next' placeholder='0000000000' />
                    </div>
                </div>


                <div style={{ marginTop: "2%", }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <h4>Компания занимается</h4>
                        {/* Электро́нная по́чта */}
                        <input style={{ width: "100%" }} className='inputaftarizatsiya' type="text" name='next' placeholder='Производство пиломатериалов' />
                    </div>
                </div>


                <div style={{ marginTop: "2%", }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <h4>Адрес</h4>
                        {/* Электро́нная по́чта */}
                        <input style={{ width: "100%" }} className='inputaftarizatsiya' type="text" name='next' placeholder='Москва, ул. Пушкина д. 32 корп. 3' />
                    </div>
                </div>


                <div style={{ marginTop: "2%", }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <h4 style={{ display: "flex" }}>Сайт компании <h4 style={{ color: "#B3B3B3", marginLeft: "10px" }}>(не обязательно)</h4></h4>
                        {/* Электро́нная по́чта */}
                        <input style={{ width: "100%" }} className='inputaftarizatsiya' type="text" name='next' placeholder='site.ru' />
                    </div>
                </div>


                <div style={{ display: "flex", marginTop: "2%", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <h4>Телефон</h4>
                        {/* Электро́нная по́чта */}
                        <input className='inputaftarizatsiya' type="tel" name='telefon' placeholder='+998 77 095 00 25' />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <h4>Почта</h4>
                        <div><input className='inputaftarizatsiya' type="text" name='password' placeholder='ex@mail.com' /></div>
                    </div>
                </div>


                <div style={{ marginTop: "2%", borderBottom: "2px solid #F2F2F2", paddingBottom: "20px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <h4 style={{ display: "flex" }}>Пароль учетной записи</h4>
                        {/* Электро́нная по́чта */}
                        <input style={{ width: "100%" }} className='inputaftarizatsiya' type="password" name='password' placeholder='• • • • • • • • • ' />
                    </div>
                </div>
                <div style={{ marginTop: "2%", }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <h4 style={{ display: "flex" }}>ФИО контактного лица</h4>
                        {/* Электро́нная по́чта */}
                        <input style={{ width: "100%" }} className='inputaftarizatsiya' type="text" name='next' placeholder='Иванов Иван Иванович' />
                    </div>
                </div>


                <div style={{ display: "flex", marginTop: "2%", justifyContent: "space-between", borderBottom: "2px solid #F2F2F2", paddingBottom: "20px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <h4>Телефон</h4>
                        {/* Электро́нная по́чта */}
                        <input className='inputaftarizatsiya' type="password" name='password' placeholder='+998 77 095 00 25' />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <h4>Почта</h4>
                        <div><input className='inputaftarizatsiya' type="email" name='username' placeholder='ex@mail.com' /></div>
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: "2%", justifyContent: "space-between", paddingBottom: "20px" }}>
                    <div className='textarea' style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", color: "#B3B3B3" }}><h4 style={{ display: "flex", color: "black" }}>Доп. информация <h4 style={{ color: "#B3B3B3", marginLeft: "10px" }}>(не обязательно)</h4></h4>512</div>
                        {/* Электро́нная по́чта */}
                        <textarea style={{ width: "480px", height: "100px", border: "none", boxShadow: "0px 4px 7px 0px #00000026", borderRadius: "10px", padding: "10px" }} placeholder='Текст'></textarea>
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: "2%", justifyContent: "space-between", borderBottom: "2px solid #F2F2F2", paddingBottom: "20px" }}>
                    <div className='textarea' style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", color: "#B3B3B3" }}><h4 style={{ display: "flex", color: "black" }}>Доп. информация <h4 style={{ color: "#B3B3B3", marginLeft: "10px" }}>(не обязательно)</h4></h4>512</div>
                        {/* Электро́нная по́чта */}
                        <textarea style={{ width: "480px", height: "100px", border: "none", boxShadow: "0px 4px 7px 0px #00000026", borderRadius: "10px", padding: "10px" }} placeholder='Текст'></textarea>
                    </div>
                </div>


                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "30px" }}>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <button className='btnshadovhome ryiewi' style={{ width: "175px", margin: "0 0 0 160px" }} onClick={handleRegister} type="button">Зарегистрироваться</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Registaratsiya