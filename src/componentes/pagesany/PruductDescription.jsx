import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import axios from "axios";

function PruductDescription() {
    const { id } = useParams();
    const [targetCard, setTargetCard] = useState({});
    const [count, setCount] = useState(1);

    useEffect(() => {
        axios.get(`http://localhost:8000/users/${id}`)
            .then(res => setTargetCard(res.data))
            .catch(err => console.log(err.response.data))
    }, [id]);
    return (
        <div style={{width:"655px"}} className="targetlen">
            <p style={{margin:"20px 0"}}>{targetCard.description && targetCard.description.length > 550 ? `${targetCard.description.slice(0, 550)}...` : targetCard.description}</p>
            <p className="targetlink2 an">{targetCard.description && targetCard.description.length > 200 ? `${targetCard.description.slice(0, 200)}...` : targetCard.description}</p>
            <div style={{width:"100%",display:"flex",marginTop:"30px"}}>
                <div style={{display:"flex",width:"100%",flexDirection:"column",gap:"10px"}}>
                    <h3 style={{color:"#D87B00"}}>Размеры:</h3>
                    <h3>950х81х81 мм</h3>
                </div>
                <div style={{display:"flex",width:"100%",flexDirection:"column",gap:"10px"}}>
                    <h3 style={{color:"#D87B00"}}>Материал:</h3>
                    <h3>Керамика</h3>
                </div>
                <div style={{display:"flex",width:"100%",flexDirection:"column",gap:"10px"}}>
                    <h3 style={{color:"#D87B00"}}>Область нанесения:</h3>
                    <h3>205х75 мм</h3>
                </div>
            </div>
            <div style={{width:"100%",display:"flex",marginTop:"30px"}}>
                <div style={{display:"flex",width:"100%",flexDirection:"column",gap:"10px"}}>
                    <h3 style={{color:"#D87B00"}}>Вес:</h3>
                    <h3>361 гр</h3>
                </div>
            </div>
        </div>

    )
}

export default PruductDescription