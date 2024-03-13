import React, { useState, useEffect, useContext } from 'react';
import img1 from "./img/logotype.png";
import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegEdit } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa6";
import { ContextData } from './context/Context';
import { IoIosLogIn } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { Sidebar } from './pagesany/Saidbar';

const Navbar = () => {
  const {
    data,
    currentUser,
  } = useContext(ContextData);

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpe, setModalOpe] = useState(false);
  const [isModalOp, setModalOp] = useState(false);
  const [searchmodal, setsearchmodal] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const toggleModa = () => {
    setModalOpe(!isModalOpe);
  };

  const toggleMod = () => {
    setModalOp(!isModalOp);
  };

  const searchh = () => {
    setsearchmodal(!searchmodal);
  };

  // saidbar
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  useEffect(() => {
    const navList = document.querySelector('.nav-list');
    if (navList) {
      navList.style.display = isModalOpen ? 'none' : 'flex';
    }

    const menunone = document.querySelector('.menuNavLink');
    if (menunone) {
      menunone.style.display = isModalOpen ? 'none' : 'flex';
    }
  }, [isModalOpen]);

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <NavLink to={"/"}><img style={{ top: "22px" }} src={img1} alt="img1" /></NavLink>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="menu-iconn" onClick={toggleSidebar}>
        <HiMiniBars3 style={{ color: "black", position: "relative", right: "100%", fontSize: "25px", top: "5px" }} className='minibars' />
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} searchh={searchh} currentUser={currentUser} toggleModal={toggleModal} />
      <div className='navbarsearch'>
        <div className='menuNavLink' onClick={toggleModal}><HiMiniBars3 className='minibars' /></div>
        <div className='nav-list'>
          <NavLink to="okomandi">О компании</NavLink>
          <NavLink to="/katalog">Каталог</NavLink>
          <NavLink to={"basket"}>В корзину</NavLink>
          <NavLink to={"uslugi"}>Услуги</NavLink>
          <NavLink>Контакты</NavLink>
        </div>
        <div style={{ display: "flex", gap: "20px" }} className='saidbar1221'>
          <div style={{ cursor: "pointer" }} onClick={searchh}  ><FiSearch className='minibars bcvv' style={{ position: "relative", top: "8px" }} /></div>
          {
            Object.keys(currentUser).length > 0 ?
              <NavLink to={"profil_status"}> <div className='navbaruse1' style={{ fontSize: "20px", color: "black", padding: "3px 5px" }}><FiUser /></div> </NavLink>
              :
              <>
                <Link to={"aftarizatsiya"}><div className='navbaruse1' style={{ fontSize: "20px", color: "black", padding: "4px 7px" }}><IoIosLogIn style={{ position: "relative", top: "3px" }} /></div></Link>
              </>

          }
          <div className='navbaruse1'><HiOutlineShoppingCart style={{ fontSize: "19px" }} /></div>
          <button className='navbarbutton'>Конструктор <FaRegEdit /></button>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-close" onClick={toggleModal}>&times;</div>
          <div>
            <h3 className='menusenter'>Меню</h3>
            <div className='menunavlink'>
              <NavLink><div onClick={toggleMod} className='navlinkpagrtowo'><NavLink>О компании</NavLink><FaAngleRight /></div></NavLink>
              <NavLink ><div className="navlinkpagrtowo"><NavLink to={"katalog"}>Каталог</NavLink ></div></NavLink>
              <NavLink to={"basket"}><div className='navlinkpagrtowo'><NavLink to={"basket"}>В корзину</NavLink></div></NavLink>
              <NavLink><div className='navlinkpagrtowo'><NavLink to={"uslugi"}>Услуги</NavLink></div></NavLink>
              <NavLink><div onClick={toggleModa} className='navlinkpagrtowo'><NavLink>Контакты</NavLink><FaAngleRight /></div></NavLink>
              <NavLink to={"yangilik"}><div className='navlinkpagrtowo'><NavLink to={"yangilik"}>Новости</NavLink></div></NavLink>
              <NavLink><div className='navlinkpagrtowo'><NavLink>Производство</NavLink></div></NavLink>
              <NavLink><div className='navlinkpagrtowo'><NavLink>Диллерам</NavLink></div></NavLink>
              <NavLink><div className='navlinkpagrtowo'><NavLink>Акции</NavLink></div></NavLink>
              <NavLink><div className='navlinkpagrtowo'><NavLink>Услуги</NavLink></div></NavLink>
              <NavLink><div className='navlinkpagrtowo'><NavLink>Контакты</NavLink></div></NavLink>
              <NavLink><div className='navlinkpagrtowo'><NavLink>Вакансии</NavLink></div></NavLink>
              <NavLink><div className='navlinkpagrtowo'><NavLink>Производство</NavLink></div></NavLink>
              <NavLink><div className='navlinkpagrtowo'><NavLink>Диллерам</NavLink></div></NavLink>
            </div>
          </div>
        </div>
      )}
      {isModalOpe && (
        <div style={{ zIndex: "30" }} className="modal-overlayy">
          <div className="modall">
            <div className="modal-closee" onClick={toggleModa}>&times;</div>
            <div>
              <h3 className='menusenter'>Контакты</h3>
              <div className='menunavlink'>
                <NavLink><div className='navlinkpagrtowo'><NavLink to="/">О компании</NavLink></div></NavLink>
                <NavLink><div className='navlinkpagrtowo'> <NavLink to="/create-new">Текстиль</NavLink></div></NavLink>
                <NavLink><div className='navlinkpagrtowo'><NavLink>Аксессуары</NavLink></div></NavLink>
                <NavLink><div className='navlinkpagrtowo'><NavLink>Флеш-карты</NavLink></div></NavLink>
                <NavLink><div className='navlinkpagrtowo'><NavLink>Xiaomi</NavLink></div></NavLink>
                <NavLink><div className='navlinkpagrtowo'><NavLink>Умные Кружки</NavLink></div></NavLink>
                <NavLink><div className='navlinkpagrtowo'><NavLink>Внешник накопители</NavLink></div></NavLink>
                <NavLink><div className='navlinkpagrtowo'><NavLink>Канцелярия</NavLink></div></NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
      {isModalOp && (
        <div style={{ zIndex: "31" }} className="modal-overlayy">
          <div className="modall">
            <div className="modal-closee" onClick={toggleMod}>&times;</div>
            <div>
              <h3 className='menusenter'>О компании</h3>
              <div className='menunavlink'>
                <NavLink to={"okomandi"}><div className='navlinkpagrtowo'><NavLink to={"okomandi"}>О компании</NavLink></div></NavLink>
                <NavLink><div className='navlinkpagrtowo'><NavLink to="/create-new">Текстиль</NavLink></div></NavLink>
                <NavLink to={"ishlab_chiqarish"}><div className='navlinkpagrtowo'><NavLink to={"ishlab_chiqarish"}>Производство</NavLink></div></NavLink>
                <NavLink to={"ish"}><div className='navlinkpagrtowo'><NavLink to={"ish"}>Вакансии</NavLink></div></NavLink>
                <NavLink to={"otganyillar"}><div className='navlinkpagrtowo'><NavLink to={"otganyillar"}>История компании</NavLink></div></NavLink>
                <NavLink to={"havola"}><div className='navlinkpagrtowo'><NavLink to={"havola"}>Быстрые ссылки</NavLink></div></NavLink>
                <NavLink><div className='navlinkpagrtowo'><NavLink>Внешник накопители</NavLink></div></NavLink>
                <NavLink><div className='navlinkpagrtowo'><NavLink>Канцелярия</NavLink></div></NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
      {searchmodal && (
        <div style={{ overflow: "hidden" }} className="modal-overlayy">
          <div className="modalll mndd">
            <div className="modal-closee" onClick={searchh}>&times;</div>
            <div>
              <div style={{ borderBottom: "1px solid #E5E5E5", paddingBottom: "11px" }}>
                <div className='menusenter senteramd searchiconslarone' style={{ width: "60.5%", display: "flex", alignItems: "center", gap: "20px", fontSize: "40px", padding: "7px 20px", borderRadius: "10px", position: "relative", left: "50px" }}>
                  <label htmlFor="search"><FiSearch style={{ color: "silver", fontSize: "20px", position: "relative", bottom: '2px' }} /></label>
                  <input onChange={handleSearch} type="text" name="search" id="search" placeholder="Искать любой товар..." style={{ border: "none", outline: "none" }} />
                </div>
              </div>
              <div className='menunavlink' style={{ textAlign: "center", marginTop: "10px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  {filteredProducts.map((product) => (
                    <NavLink to={`/${product.id}`}>
                      <div style={{ height: "50px" }}>
                        <img className='imagenavbar' src={product.img} alt="" />
                        <div key={product.id}>{product.name}</div>
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
