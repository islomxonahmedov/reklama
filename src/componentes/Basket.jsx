import React, { useContext, useState } from 'react'
import { ContextData } from '../componentes/context/Context';
import { NavLink } from 'react-router-dom';

function Basket() {
    const {
        basket,
        deleteProductFromCart,
        increment,
        decrement,
        countPerProduct,
        totalPrice
    } = useContext(ContextData);

    return (
        <>
            <div className='basketcontainer'>
                <div className='backetcontainerbox_1'>
                    <div className="backetcontainer1">
                        <h1><span>Корзина</span></h1>
                    </div>
                    <div className="backetcontainer2">
                        <p>Обратите внимание, что у каждого товара есть минимальное количество для добавления в корзину.</p>
                    </div>
                </div>
                <table border={0}>
                    <thead className='theas'>
                        <tr style={{ color: "#B3B3B3" }}>
                            <th>Продукт</th>
                            <th>Стоимость</th>
                            <th>Количество</th>
                            <th>Всего</th>
                        </tr>
                    </thead>
                    <tbody className='theas tbody'>
                        {
                            basket.length > 0 ?
                                basket.map((item, index) => (
                                    <tr style={{ textAlign: "center" }} className='backetmap' key={item.id}>
                                        <td style={{ display: "flex", alignItems: "center", gap: "21px" }}>
                                            <td><button style={{ border: "none", background: "white", color: "#727272" }} onClick={() => deleteProductFromCart(item.id)}>X</button></td>
                                            <td className='tdimgnameflex'>
                                                <td className='td1'><img style={{ width: "64px", height: "64px", borderRadius: "10px" }} src={item.img} alt={item.title} /></td>
                                                <td className='td2'><h4>{item.name.length > 14 ? item.name.slice(0, 17) + "..." : item.name}</h4></td>
                                            </td>
                                        </td>
                                        <td style={{ color: "#B3B3B3" }} className='td3'>{item.price} ₽</td>
                                        <td style={{ marginTop: "10px", width: "130px", position: "relative", left: "60px" }} className="increment" id='incrementposetion'>
                                            <button onClick={() => decrement(item.id)} className="indx1"><i class="fa-solid fa-minus"></i></button>
                                            <h3 style={{ color: "#10BB87" }}>{countPerProduct[item.id] || 1}</h3>
                                            <button onClick={() => increment(item.id)} className="indx1"><i class="fa-solid fa-plus"></i></button>
                                        </td>
                                        <td>{Math.round(item.price * (countPerProduct[item.id] || 1))} ₽</td>
                                    </tr>
                                )) : <tr style={{ height: "380px" }}><td colSpan={10} style={{ color: "red", fontSize: "25px" }}>Savatda mahsulot topilmadi!</td></tr>
                        }
                    </tbody>
                </table>
                <div style={{ marginTop: "70px" }} className='zakas'>
                    <div className="zakas1">
                        <button style={{ border: "none", background: "white", boxShadow: "0px 4px 7px 0px #00000026", padding: "12px", borderRadius: "10px" }}>Создать коммерческое предложение</button>
                        <NavLink to={"/katalog"}><button className='btnbaskettop' style={{ border: "none", background: "white", boxShadow: "0px 4px 7px 0px #00000026", padding: "12px", borderRadius: "10px", marginLeft: "50px" }}>В каталог</button></NavLink>
                    </div>
                    <div className="zakas2">
                        <div className='itogobasket'>
                            <div className='bsoflex'>
                                <h3>Итог</h3>
                                <h3>{totalPrice} ₽</h3>
                            </div>
                            <div className='bsoflex'>
                                <h3>Доставка</h3>
                                <h3>{Math.floor((totalPrice * 5) / 100)} ₽</h3>
                            </div>
                            <div className='bsoflex'>
                                <h3>Все</h3>
                                <h3>{Math.floor((totalPrice * 5) / 100) + totalPrice} ₽</h3>
                            </div>
                        </div>
                        <NavLink to={"/zakas"}><button style={{ boxShadow: "0px 9px 25px -4px #487B6C80", background: "#10BB87", border: "none", color: "white", padding: "7px 20px", borderRadius: "10px", margin: "20px 0 0 0", fontSize: "16px" }}>Оформить заказ</button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Basket