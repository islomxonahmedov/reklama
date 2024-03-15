import { useContext } from "react"
import { ContextData } from "../context/Context"

function Log() {
    const { currentUser } = useContext(ContextData)
    return (
        <div className='curruntuser'>
            <div className='curruntuserflex'>
                <h3 style={{ color: "#D87B00" }}>Почта:</h3>
                <h3>{currentUser.username}</h3>
            </div>
            <div className='curruntuserflex'>
                <h3 style={{ color: "#D87B00" }}>Пароль:</h3>
                <h3>{currentUser.password}</h3>
            </div>
        </div>
    )
}

export default Log