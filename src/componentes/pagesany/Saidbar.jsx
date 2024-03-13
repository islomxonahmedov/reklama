import { FaRegEdit } from "react-icons/fa";
import { FiSearch, FiUser } from "react-icons/fi";
import { HiMiniBars3, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosLogIn } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";

export function Sidebar({ isOpen, onClose, searchh, currentUser, toggleModal }) {

    return (
        <div style={{ padding: "30px" }} className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-close'}`}>
            {/* Sidebar content goes here */}
            <button className="sidebar-close navbaruse1" style={{ border: "none", padding: "5px 12px" }} onClick={onClose}>
                &times;
            </button>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", fontSize: "20px", marginTop: "40px" }}>
                <div style={{ display: "flex", alignItems: "center", color: "black", gap: "10px" }} className='menuNavLink1' onClick={toggleModal}><HiMiniBars3 style={{ color: "black" }} />Меню</div>
                <div style={{ display: "flex", alignItems: "center", color: "black", gap: "10px" }} onClick={searchh}><FiSearch style={{ position: "relative", top: "-1px", color: "black" }} />Поиск</div>
                {
                    Object.keys(currentUser).length > 0 ?
                        <Link to={"profil_status"}> <div style={{ display: "flex", alignItems: "center", color: "black", gap: "10px" }}><FiUser style={{ color: "black" }} />Профиль</div></Link>
                        :
                        <>
                            <Link to={"aftarizatsiya"}><div style={{ display: "flex", alignItems: "center", color: "black", gap: "10px" }}><IoIosLogIn style={{ position: "relative", top: "-1px", color: "black" }} />Авторизоваться</div></Link>
                        </>

                }
                <div style={{ display: "flex", alignItems: "center", color: "black", gap: "10px" }}><HiOutlineShoppingCart style={{ fontSize: "19px", color: "black" }} />Корзину</div>
                <div style={{ display: "flex", alignItems: "center", color: "black", gap: "10px" }}><CiEdit />Конструктор</div>
                <div style={{ display: "flex", alignItems: "center", color: "black", gap: "10px" }}><BsTelephone />Телефон</div>
            </div>
        </div>
    );
};