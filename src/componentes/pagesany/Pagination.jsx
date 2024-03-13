import { useContext } from "react";
import { Link } from "react-router-dom"
import { ContextData } from "../context/Context";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Pagination() {
    const {
        data,
        perPage,
        currentPage,
        setCurrentPage,
    } = useContext(ContextData);

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(data.length / perPage); i++) {
        pageNumbers.push(i);
    };

    // Previous va Next funksiyalari
    function handleClick(functionType) {
        if (functionType === "prev" && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
        else if (functionType === "next" && currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <nav className="pagination">
            <ul style={{ display: "flex", gap: "15px", cursor: "pointer", textAlign: "center" }} className="pagination2">
                <li onClick={() => handleClick("prev")} className="page-item"><Link className="page-link"><FaAngleLeft style={{ fontSize: "20px" }} /></Link></li>
                {
                    pageNumbers.map((number, index) => (
                        <li style={{ color: "black" }} onClick={() => setCurrentPage(number)} key={index} className="page-itemm"><Link className="page-link">{number}</Link></li>
                    ))
                }
                <li onClick={() => handleClick("next")} className="page-item"><Link className="page-link"><FaAngleRight style={{ fontSize: "20px" }} /></Link></li>
            </ul>
        </nav>
    )
}

export default Pagination