import { useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import axios from "axios";
import ColorPicker from "./pagesany/Rang";
import { FaAngleDown, FaPlus } from "react-icons/fa6";
import { GoXCircle } from "react-icons/go";
import { GiBrain } from "react-icons/gi";
import { PiPrinterLight } from "react-icons/pi";
import { ContextData } from "./context/Context";
import { MdCurrencyRuble } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Card from "./Card";

function
    Cardinfo() {
    const { addToCart } = useContext(ContextData);
    const { id } = useParams();
    const [targetCard, setTargetCard] = useState({});
    const [count, setCount] = useState(1);
    const [activeIndex, setActiveIndex] = useState(null);
    const [showCardInfo2, setShowCardInfo2] = useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/users/${id}`)
            .then((res) => setTargetCard(res.data))
            .catch((err) => console.log(err.response.data));
    }, [id]);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount((prevCount) => prevCount - 1);
        }
    };

    const toggleParagraphVisibility = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const itogo = Math.floor(targetCard.price * count);
    const shiping = Math.floor((itogo * targetCard.diskaunt) / 100);
    const itogo2 = itogo - shiping;

    const toggleCardInfo2 = () => {
        setShowCardInfo2(!showCardInfo2);
    };
    return (
        <>
            <div style={{ marginTop: "5%" }} className="cardinfocontainer">
                <div className="cardinofo011">
                    <div className="cardinfo1">
                        <div className="cardinfodagi1img">
                            <img src={targetCard.img} alt="" />
                        </div>
                        <div className="cardinfodagi2img">
                            <img src={targetCard.img} alt="" />
                            <img src={targetCard.img} alt="" />
                        </div>
                    </div>
                    <button className="nonebutton" onClick={toggleCardInfo2}>Заказ<FaArrowRightLong /></button>
                    <div className="ichmaich">
                        <div style={{ display: "flex", alignItems: "center", border: "1px solid #F2F2F2", background: "#FAFAFA", width: "200px", marginTop: "50px" }}>
                            <Link style={{ color: "black" }} to={"pruductdeskiription"}><h4 style={{ padding: "15px" }}>Описание</h4></Link>
                            <h4 style={{ padding: "15px" }}>Файлы</h4>
                        </div>
                        <Outlet />
                    </div>
                </div>
                <div className="cardinfo2 dlfkasdkjf">
                    <h1 style={{ fontSize: "24px" }}>{targetCard.name}</h1>
                    <div className="shutik">
                        <h4 style={{ color: "#10BB87" }}>Арт. 1256.60.2</h4>
                        <h4 style={{ color: "#FFA630" }}>На складе {targetCard.shutik} шт</h4>
                    </div>
                    <div style={{ padding: "10px", border: "1px solid #F2F2F2", borderRadius: "7px", background: "#FAFAFA" }}>
                        <div onClick={() => toggleParagraphVisibility(0)} className="" style={{ width: "100%", display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
                            <h4>Цвет</h4>
                            <FaAngleDown />
                        </div>
                        {activeIndex === 0 && (
                            <ColorPicker />
                        )}

                    </div>
                    <div style={{ padding: "10px", border: "1px solid #F2F2F2", borderRadius: "7px", background: "#FAFAFA", cursor: "pointer" }}>
                        <div className="" style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                            <h4>Вид</h4>
                            <FaAngleDown />
                        </div>
                    </div>
                    <div style={{ padding: "10px", border: "1px solid #F2F2F2", borderRadius: "7px", background: "#FAFAFA" }}>
                        <div onClick={() => toggleParagraphVisibility(1)} className="" style={{ width: "100%", display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
                            <h4>Способ нанесения</h4>
                            <FaAngleDown />
                        </div>
                        {activeIndex === 1 && (
                            <>
                                <div className="idvrain">
                                    <GoXCircle className="rain" />
                                    <h4>Без нанесения</h4>
                                </div>
                                <div className="idvrain">
                                    <GiBrain className="rain" />
                                    <h4>Без нанесения</h4>
                                </div>
                                <div className="idvrain">
                                    <PiPrinterLight className="rain" />
                                    <h4>Без нанесения</h4>
                                </div>
                            </>
                        )}

                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }} className="caunter">
                        <button onClick={() => addToCart(targetCard)} style={{ padding: "10px 40px" }} className="navbarbutton">В корзину</button>
                        <div className="increment">
                            <button onClick={() => decrement(targetCard)} className="indx1"><i class="fa-solid fa-minus"></i></button>
                            <h3>{count}</h3>
                            <button onClick={() => increment(targetCard)} className="indx1"><i class="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                    <div className="bacraunditogo0">
                        <div style={{ display: "flex", justifyContent: "space-around", gap: "10px", marginTop: "10px" }}>
                            <h4 style={{ color: "#487B6C" }}>Итог</h4>
                            <h4 style={{ display: "flex", color: "white" }}>{itogo}<MdCurrencyRuble /></h4>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-around", gap: "10px", marginTop: "10px", alignItems: "center" }}>
                            <h4 style={{ fontSize: "25px", color: "white" }}>{itogo2}</h4>
                            <h4 style={{ color: "#487B6C" }} >за шт</h4>
                        </div>
                    </div>
                    <button className="mn">Открыть в конструкторе <FaPlus /></button>
                    <p>Обратите внимание, что у каждого товара есть минимальное количество для добавления в корзину.</p>
                </div>

                {showCardInfo2 && (
                    <div className="cardinfo2">
                        <div onClick={toggleCardInfo2}>&times;</div>
                        <h1 style={{ fontSize: "24px" }}>{targetCard.name}</h1>
                        <div className="shutik">
                            <h4 style={{ color: "#10BB87" }}>Арт. 1256.60.2</h4>
                            <h4 style={{ color: "#FFA630" }}>На складе {targetCard.shutik} шт</h4>
                        </div>
                        <div style={{ padding: "10px", border: "1px solid #F2F2F2", borderRadius: "7px", background: "#FAFAFA" }}>
                            <div onClick={() => toggleParagraphVisibility(0)} className="" style={{ width: "100%", display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
                                <h4>Цвет</h4>
                                <FaAngleDown />
                            </div>
                            {activeIndex === 0 && (
                                <ColorPicker />
                            )}

                        </div>
                        <div style={{ padding: "10px", border: "1px solid #F2F2F2", borderRadius: "7px", background: "#FAFAFA", cursor: "pointer" }}>
                            <div className="" style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                                <h4>Вид</h4>
                                <FaAngleDown />
                            </div>
                        </div>
                        <div style={{ padding: "10px", border: "1px solid #F2F2F2", borderRadius: "7px", background: "#FAFAFA" }}>
                            <div onClick={() => toggleParagraphVisibility(1)} className="" style={{ width: "100%", display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
                                <h4>Способ нанесения</h4>
                                <FaAngleDown />
                            </div>
                            {activeIndex === 1 && (
                                <>
                                    <div className="idvrain">
                                        <GoXCircle className="rain" />
                                        <h4>Без нанесения</h4>
                                    </div>
                                    <div className="idvrain">
                                        <GiBrain className="rain" />
                                        <h4>Без нанесения</h4>
                                    </div>
                                    <div className="idvrain">
                                        <PiPrinterLight className="rain" />
                                        <h4>Без нанесения</h4>
                                    </div>
                                </>
                            )}

                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }} className="caunter">
                            <button onClick={() => addToCart(targetCard)} style={{ padding: "10px 40px" }} className="navbarbutton">В корзину</button>
                            <div className="increment">
                                <button onClick={() => decrement(targetCard)} className="indx1"><i class="fa-solid fa-minus"></i></button>
                                <h3>{count}</h3>
                                <button onClick={() => increment(targetCard)} className="indx1"><i class="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                        <div className="bacraunditogo0">
                            <div style={{ display: "flex", justifyContent: "space-around", gap: "10px", marginTop: "10px" }}>
                                <h4 style={{ color: "#487B6C" }}>Итог</h4>
                                <h4 style={{ display: "flex", color: "white" }}>{itogo}<MdCurrencyRuble /></h4>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", gap: "10px", marginTop: "10px", alignItems: "center" }}>
                                <h4 style={{ fontSize: "25px", color: "white" }}>{itogo2}</h4>
                                <h4 style={{ color: "#487B6C" }} >за шт</h4>
                            </div>
                        </div>
                        <button className="mn">Открыть в конструкторе <FaPlus /></button>
                        <p>Обратите внимание, что у каждого товара есть минимальное количество для добавления в корзину.</p>
                    </div>

                )}
            </div>
            <div style={{ marginTop: "3%" }} className="slidercarusel">
                <h1 style={{ marginBottom: "30px" }}>тебе это может <span>понравиться</span></h1>
                <Card />
                <Card />
            </div>
        </>
    )
}


export default Cardinfo
export function CardLink() {
    return (
        <div>
            <Outlet />
        </div>
    )
}



