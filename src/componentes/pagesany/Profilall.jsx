import React, { useContext } from 'react'
import { ContextData } from '../context/Context'

function Profilall() {
    const { currentUser } = useContext(ContextData)

    console.log(currentUser);

    return (
        <div className='curruntuser'>
            <div className='curruntuserflex'>
                <h3 style={{ color: "#D87B00" }}>Почта:</h3>
                <h3>{currentUser.username}</h3>
            </div>
            <div className='curruntuserflex'>
                <h3 style={{ color: "#D87B00" }}>Телефон:</h3>
                <h3>{currentUser.telefon}</h3>
            </div>
            <div className='curruntuserflex'>
                <h3 style={{ color: "#D87B00" }}>Общество:</h3>
                <h3>{currentUser.jamiyat}</h3>
            </div>
            <div className='curruntuserflex'>
                <h3 style={{ color: "#D87B00" }}>ИНН:</h3>
                <h3>{currentUser.innane}</h3>
            </div>
        </div>
    )
}

export default Profilall