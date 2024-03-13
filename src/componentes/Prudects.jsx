import { useContext, useState } from "react"
import { ContextData } from "../componentes/context/Context"
import Sidebar from "./Saidbar";
import { FiSearch } from "react-icons/fi";
import Form from 'react-bootstrap/Form';
import Pagination from "./pagesany/Pagination";
import { NavLink } from "react-router-dom";
import { FaChevronRight, FaPlus } from "react-icons/fa";
import { MdCurrencyRuble } from "react-icons/md";
import CustomModal from "./pagesany/Filtermodal";

function Product() {
    const {
        search,
        setSearch,
        customFilter,
        value,
        pageProducts,
        setCustomFilter,
        setValue
    } = useContext(ContextData);


    const [sortBy, setSortBy] = useState("default");

    const filteredProducts = pageProducts.filter(element => {
        const searchLowerCase = search.toLowerCase().trim();

        const titleMatch = element.name.toLowerCase().includes(searchLowerCase);
        const priceMatch = value[0] < element.price && element.price < value[1];
        const categoryMatch = element.category.includes(customFilter);

        return titleMatch && priceMatch && categoryMatch;
    });


    const sortProducts = (a, b) => {
        switch (sortBy) {
            case "cheap":
                return parseFloat(a.price) - parseFloat(b.price);
            case "expensive":
                return parseFloat(b.price) - parseFloat(a.price);
            case "bigDiscount":
                return parseFloat(b.discount) - parseFloat(a.discount);
            // case "highRating":
            //     return parseFloat(b.rating) - parseFloat(a.rating);
            default:
                return 0; // No sorting
        }
    };

    const sortedProducts = [...filteredProducts].sort(sortProducts);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className="product">
            <div className="pruducts" style={{ paddingRight: "40px" }}>
                <div className="prosuct800px" style={{ width: "95.5%", border: "1px solid silver", display: "flex", alignItems: "center", gap: "20px", fontSize: "40px", padding: "2px 20px", borderRadius: "10px", marginTop: "10%" }}>
                    <label htmlFor="search"><FiSearch style={{ color: "silver", fontSize: "20px" }} /></label>
                    <input onChange={(e) => setSearch(e.target.value)} type="text" name="search" id="search" placeholder="Искать любой товар..." style={{ border: "none", outline: "none" }} />
                </div>
                <div className="pruduct800pxfilter" style={{ display: "flex", justifyContent: "space-between", marginTop: "50px" }}>
                    <div style={{ display: "flex", gap: "50px" }}>
                        <Form.Select aria-label="Default select example" className="selectform" style={{ width: "120px", padding: "10px 5px", outline: "none", borderRadius: "10px" }} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="default">Сортировка</option>
                            <option value="cheap">Cheap</option>
                            <option value="expensive">Expensive</option>
                            <option value="bigDiscount">Big Discount</option>
                        </Form.Select>
                        <div value={"iphone"} onClick={(e) => setCustomFilter(e.target.value)} style={{ textAlign: "center", width: "100px", padding: "8px 0", borderRadius: "10px", boxShadow: "0px 4px 7px 0px #00000026" }}>Цена</div>
                        <div style={{ textAlign: "center", width: "100px", padding: "8px 0", borderRadius: "10px", boxShadow: "0px 4px 7px 0px #00000026" }}>Цвет</div>
                        <div style={{ textAlign: "center", width: "100px", padding: "8px 0", borderRadius: "10px", boxShadow: "0px 4px 7px 0px #00000026" }}>Лейблы</div>
                    </div>
                    <button onClick={openModal} style={{ width: "209px", height: "38px", fontSize: "16px" }} className='katalogbtn'>Все фильтры <FaChevronRight /></button>

                </div>
            </div>
            <div className="pruduct800pxflexcard" style={{ gap: "150px" }}>
                <div>
                    <div>
                        {sortedProducts.length > 0 ? (
                            <div className="katalogkontainer">
                                {sortedProducts.map(item => (
                                    <NavLink to={`/${item.id}`}>
                                        <div className='card_container'>
                                            <figure><img id="imgradius" src={item.img} alt="rsim1" /></figure>
                                            <h4 className="cardhover">от {item.price}<MdCurrencyRuble /></h4>
                                            <div style={{ position: "relative", bottom: "30px" }}>
                                                <h3 style={{ color: "black" }}>{item.name.length > 25 ? item.name.slice(0, 25) + "..." : item.name}</h3>
                                                <NavLink to={`/${item.id}`}><button style={{ marginTop: "10px" }} className="btnshadovhome">Выбрать вид <FaPlus /></button></NavLink>
                                            </div>
                                        </div>
                                    </NavLink>
                                ))}
                            </div>
                        ) : (
                            <h1 className="w-100 text-center">Not found!</h1>
                        )}
                    </div>
                </div>
            </div>
            <Pagination />
            <CustomModal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
    )
}

export default Product