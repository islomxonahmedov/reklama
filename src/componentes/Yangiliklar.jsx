import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

function Yangiliklar() {
    const [news, setNews] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [newNewsName, setNewNewsName] = useState("");
    const [newNewsContent, setNewNewsContent] = useState("");
    const [searchQuery, setSearchQuery] = useState(""); // New state for search query

    // Function to handle adding news
    const addNews = () => {
        if (newNewsName.trim() !== "") {
            const timestamp = new Date().toLocaleString();
            const updatedNews = [...news, { name: newNewsName, content: newNewsContent, timestamp }];
            setNews(updatedNews);
            localStorage.setItem("news", JSON.stringify(updatedNews));
            setNewNewsName("");
            setNewNewsContent("");
            setModalOpen(false);
        }
    };

    // Function to handle opening and closing modal
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    // Function to handle input change for new news name
    const handleNameInputChange = (e) => {
        setNewNewsName(e.target.value);
    };

    // Function to handle input change for new news content
    const handleContentInputChange = (e) => {
        setNewNewsContent(e.target.value);
    };

    // Load news from localStorage on component mount
    React.useEffect(() => {
        const savedNews = JSON.parse(localStorage.getItem("news"));
        if (savedNews) {
            setNews(savedNews);
        }
    }, []);

    // Save news to localStorage whenever it changes
    React.useEffect(() => {
        localStorage.setItem("news", JSON.stringify(news));
    }, [news]);

    // Filtering function based on search query
    const filteredNews = news.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className='yangilikcontainer'>
            <h1 className='novosti'><span>Новости</span></h1>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                    <input
                        className='inputysngilik'
                        type="text"
                        placeholder='Введите новое имя'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                    />
                    <CiSearch className='posetinrelative' />
                </div>
                <button className='qoshishbuttonyan' onClick={toggleModal}>Добавлять <FaPlus /></button>
            </div>
            {modalOpen && (
                <div style={modalStyle}>
                    <div style={modalStyle2}>
                        <div className="mmarginadd" onClick={toggleModal}>&times;</div>
                        <input type="text" value={newNewsName} onChange={handleNameInputChange} placeholder="Заголовок новости" style={inputStyle} />
                        <textarea type="text" value={newNewsContent} onChange={handleContentInputChange} placeholder="О новостях" style={inputStyle2}></textarea>
                        <button type="submit" onClick={addNews} style={buttonStyle}>Добавить новое</button>
                    </div>
                </div>
            )}
            <div className='yangilikcardcontainer'>
                {filteredNews.map((item, index) => (
                    <div className='yangilikcart' key={index}>
                        <h3>{item.name}</h3>
                        <p>{item.content}</p>
                        <button>{item.timestamp}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

const modalStyle = {
    position: "fixed",
    width: "100%",
    height: "100vh",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    zIndex: "1000",
};

const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    fontSize: "15px",
    borderRadius: "10px",
    border: "1px solid grey",
    boxShadow: "1px 3px 10px rgba(0, 0, 0, 0.3)",
};

const inputStyle2 = {
    width: "100%",
    padding: "10px",
    height: "100px",
    margin: "8px 0",
    fontSize: "15px",
    borderRadius: "10px",
    border: "1px solid grey",
    boxShadow: "1px 3px 10px rgba(0, 0, 0, 0.3)",
};
const modalStyle2 = {
    width: "300px",
    margin: "0 auto",
    marginTop: "10%",
};

const buttonStyle = {
    padding: "10px",
    background: "white",
    color: "black",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "1px 3px 10px rgba(0, 0, 0, 0.3)",
    marginLeft: "100px",
    marginTop: "20px"
};

export default Yangiliklar;
