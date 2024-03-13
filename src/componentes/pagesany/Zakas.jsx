import { useContext } from "react";
import { ContextData } from "../context/Context";

function Zakas() {
    const {
        basket,
        totalPrice
    } = useContext(ContextData);
    return (
        <form>
            <div className="zakascontainer">
                <div className="zakascontainer_box1">
                    <div className="zakascontainer_1">
                        <div className='aftarizatsiyafle1' style={{ display: "flex", marginTop: "2%", flexDirection: "column", gap: "20px" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                <h4>ФИО / Организация</h4>
                                <input style={{ width: "300px" }} className='inputaftarizatsiya' type="text" name='next' placeholder='Иванов Иван Иванович' />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                <h4>ИНН (не обязательно)</h4>
                                <div><input style={{ width: "300px" }} className='inputaftarizatsiya' type="text" name='innane' placeholder='0000000000' /></div>
                            </div>
                        </div>
                        <div className='aftarizatsiyafle1' style={{ display: "flex", marginTop: "2%", justifyContent: "space-between", width: "310px" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                <h4>Телефон</h4>
                                <input style={{ width: "135px" }} className='inputaftarizatsiya' type="text" name='next' placeholder='+7 000 000 00 00' />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                <h4>Почта</h4>
                                <div><input style={{ width: "135px" }} className='inputaftarizatsiya' type="text" name='innane' placeholder='ex@mail.com' /></div>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div style={{ display: "flex", justifyContent: "space-around" }} className="zakascontainer_2">
                            <label style={{ display: "flex", gap: "10px" }}><input type="radio" name="myRadioGroup" value="option1" />Самовывоз</label>
                            <label style={{ display: "flex", gap: "10px" }}><input type="radio" name="myRadioGroup" value="option1" />Доставка</label>
                        </div>
                    </form>
                    <div className='zakascontainer_1' style={{ display: "flex", marginTop: "2%", flexDirection: "column", gap: "20px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <h4>Адрес</h4>
                            <input style={{ width: "300px" }} className='inputaftarizatsiya' type="text" name='next' placeholder='Москва, ул. Пушкина д. 32 корп. 3' />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <h4>Адрес</h4>
                            <textarea style={{ border: "none", width: "290px", padding: "10px" }} className="inputaftarizatsiya" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </div>
                <div className="zakascontainer_box2">
                    <div className="birinchirang1">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h4 style={{ color: "#487B6C", display: "flex", gap: "10px" }}><h4 style={{ color: "white" }}>+</h4> Продукт</h4>
                            <del>{ }</del>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h4>{ }</h4>
                            <h1 style={{ color: "white" }}>{totalPrice} ₽</h1>
                        </div>
                    </div>
                    <div className="birinchirang1">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h4 style={{ color: "#487B6C", display: "flex", gap: "10px" }}><h4 style={{ color: "white" }}>+</h4>Доставка</h4>
                            <del>{ }</del>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <h4 style={{ color: "white" }}>по России</h4>
                            <h1 style={{ color: "white" }}>{Math.floor((totalPrice * 5) / 100)} ₽</h1>
                        </div>
                    </div>
                    <div className="birinchirang2">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h4 style={{ color: "#D87B00", display: "flex", gap: "10px" }}>Итог</h4>
                            <del>{ }</del>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <h4 style={{ color: "white" }}>за {basket.length} позиции{ }</h4>
                            <h1 style={{ color: "white" }}>{Math.floor((totalPrice * 5) / 100) + totalPrice} ₽</h1>
                        </div>
                    </div>
                    <div>
                        <button style={{ boxShadow: "0px 9px 25px -4px #487B6C80", background: "#10BB87", border: "none", color: "white", padding: "15px 30px", borderRadius: "10px", margin: "20px 0 0 0", fontSize: "16px" }}>Отправить заказ</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Zakas