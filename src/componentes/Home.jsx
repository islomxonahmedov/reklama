import React from 'react';
import Card from "./Card";
import imag3 from "./img/images.png"
import imag4 from "./img/designer.png"
import imag5 from "./img/Screenshot from 2024-02-18 13-10-00.png"
import imag6 from "./img/Screenshot from 2024-02-18 13-24-07.png"
import imag7 from "./img/Screenshot from 2024-02-18 13-35-57.png"
import imag8 from "./img/Screenshot from 2024-02-18 13-37-12.png"
import imag9 from "./img/Screenshot from 2024-02-18 14-41-37.png"
import imag10 from "./img/Screenshot from 2024-02-18 14-43-19.png"
import imag11 from "./img/Screenshot from 2024-02-18 14-44-41.png"
import imag12 from "./img/Screenshot from 2024-02-18 14-45-47.png"
import imag13 from "./img/Screenshot from 2024-02-18 14-48-44.png"
import imag14 from "./img/Screenshot from 2024-02-18 14-49-51.png"
import imag15 from "./img/Screenshot from 2024-02-18 14-51-06.png"
import imag16 from "./img/Screenshot from 2024-02-18 14-52-46.png"
import imag17 from "./img/Screenshot from 2024-02-18 14-53-51.png"
import imag18 from "./img/Screenshot from 2024-02-18 14-55-16.png"
import imag19 from "./img/b2b.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
function Home() {

  return (
    <div className="homekontainer">
      <div style={{ width: "100%", height: "110px" }}></div>
      <div className="tepawith100">
        <div className="fodbolkacenter">
          <h1>Планируете сделать <span>принт?</span> <br /> Вы пришли по адресу</h1>
          <p style={{ margin: "20px 0" }}>Reklem - только оптовая работа высокого качества с <br /> индивидуальным подходом. Работаем с 2008 года.</p>
          <NavLink to={'katalog'} ><button className="buttomhome">Перейти в каталог</button></NavLink>
        </div>
      </div>
      <div className="homekontainer0auto">
        <div className="section1home">
          <div style={{ marginTop: "40px" }} className="section1home_box1">
            <h1><span>Пара слов</span> о нас, <br />производстве и <br /> брендинге</h1>
            <p style={{ margin: "20px 0" }}>В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности структуры проекта.</p>
            <p>В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности структуры проекта опыт мы упускаем, что ключевые особенности структуры проекта.</p>
            <button className="buttomhome">О компании</button>
          </div>
          <img src={imag3} alt="" />
        </div>
        <div className="section2home">
          <div>
            <img style={{ width: "70px" }} src={imag15} alt="" />
            <h3>Онлайн конструктор</h3>
            <p>С конструктором создавайте свои уникальные дизайны</p>
          </div>
          <div>
            <img style={{ width: "70px" }} src={imag16} alt="" />
            <h3>Принт за 24 часа</h3>
            <p>Некоторые заказы можем произвести быстрее суток</p>
          </div>
          <div>
            <img style={{ width: "70px" }} src={imag17} alt="" />
            <h3>Быстрая доставка</h3>
            <p>Сотрудничаем с быстрыми и надежными службами</p>
          </div>
          <div>
            <img style={{ width: "70px" }} src={imag18} alt="" />
            <h3>Только ОПТ</h3>
            <p>Работаем на большие объемы брендингаx</p>
          </div>
        </div>
        <div className="section3home">
          <img src={imag4} alt="imag4" />
        </div>
        <div className="slidercarusel">
          <h1 style={{ marginBottom: "30px" }}>Популярные и новые <br /> <span>товары</span></h1>
          <Card />
          <Card />
        </div>
        <div className="section4home">
          <h1 style={{ marginBottom: "30px", display: "flex", alignItems: "center", gap: "10px" }}>Популярные услуги<FaArrowRightLong style={{ color: "#487B6C", fontSize: "20px", padding: "15px 17px", borderRadius: "10px", boxShadow: "0px 4px 7px 0px #00000026", marginLeft: "12px" }} /></h1>
          <div className="section4flex">
            <div>
              <img src={imag5} alt="imag7" />
              <h3>Гравировка</h3>
              <p>Нанесем на изделия логотип, рисунок или надпись</p>
              <button className="btnshadovhome">Подробнее <FaArrowRightLong style={{ marginTop: "2px" }} /></button>
            </div>
            <div>
              <img src={imag6} alt="imag7" />
              <h3>Шелкография</h3>
              <p>Изображения высоко качества на любых материалах</p>
              <button className="btnshadovhome">Подробнее <FaArrowRightLong style={{ marginTop: "2px" }} /></button>
            </div>
            <div>
              <img src={imag7} alt="imag7" />
              <h3>Тиснение</h3>
              <p>Нанесения рельефного рисунка</p>
              <button className="btnshadovhome">Подробнее <FaArrowRightLong style={{ marginTop: "2px" }} /></button>
            </div>
            <div>
              <img src={imag8} alt="imag8" />
              <h3>Тампопечать</h3>
              <p>Перенос изображения с помощью силиконового валика</p>
              <button className="btnshadovhome">Подробнее <FaArrowRightLong style={{ marginTop: "2px" }} /></button>
            </div>
          </div>
        </div>
        <div className="section5home">
          <h1 style={{ marginBottom: "30px", display: "flex", alignItems: "center", gap: "10px" }}>Основные категории<FaArrowRightLong style={{ color: "#487B6C", fontSize: "20px", padding: "15px 17px", borderRadius: "10px", boxShadow: "0px 4px 7px 0px #00000026", marginLeft: "12px" }} /></h1>
          <div>
            <div className="importrasimlar1">
              <div>
                <img src={imag9} alt="" />
                <h4>Кружки</h4>
              </div>
              <div>
                <img src={imag10} alt="" />
                <h4>Термосы</h4>
              </div>
              <div>
                <img src={imag11} alt="" />
                <h4>Аксессуары</h4>
              </div>
              <div>
                <img src={imag12} alt="" />
                <h4>Канцелярия</h4>
              </div>
              <div>
                <img src={imag13} alt="" />
                <h4>Флеш-карты</h4>
              </div>
            </div>
            <div className="importrasimlar2">
              <div>
                <img src={imag14} alt="" />
                <h4>HDD</h4>
              </div>
              <div>
                <img src={imag15} alt="" />
                <h4>SSD</h4>
              </div>
              <div>
                <img src={imag16} alt="" />
                <h4>Текстиль</h4>
              </div>
              <div>
                <img src={imag17} alt="" />
                <h4>Упаковка</h4>
              </div>
              <div>
                <img src={imag18} alt="" />
                <h4>Xiaomi</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="section6ome">
          <img src={imag19} alt="imag19" />
        </div>
        <div className="section7home">
          <h1>Оставайтесь <span>в курсе  <br /> событий</span></h1>
          <div className='section7flex'>
            <div>
              <h3>Маски теперь в продаже</h3>
              <p>Принимая во внимание показатели успешности, синтетическое тестирование способствует повышению качества анализа существующих паттернов поведения. Противоположная точка зрения подразумевает.</p>
              <button className='btnbackraundgreen'>02.10.2021<BsArrowRight style={{ color: "black", fontSize: "20px" }} /></button>
            </div>
            <div>
              <h3>Обновление сайта и новое позиционирование</h3>
              <p>Мы вынуждены отталкиваться от того, что начало повседневной работы по формированию позиции требует от нас анализа направлений по формированию анализа прогрессивного развития.</p>
              <button className='btnbackraundgreen'>15.09.2021<BsArrowRight style={{ color: "black", fontSize: "20px" }} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home


