import React, { useState } from "react";

const ColorPicker = () => {
    const [selectedColor, setSelectedColor] = useState("#000000");

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    };

    const applyColor = () => {
        document.documentElement.style.setProperty("--main-color", selectedColor);
    };

    return (
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <input
            style={{cursor:"pointer"}}
                type="color"
                value={selectedColor}
                onChange={handleColorChange}
                className="color-picker-input"
            />
            <button style={{cursor:"pointer"}} className="rangcolor" onClick={applyColor}>Выберите цвет изделия</button>

        </div>
    );
};

export default ColorPicker;
