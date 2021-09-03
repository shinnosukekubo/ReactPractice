import React, { createContext, useContext, useState } from "react";
import colorData from "./color-data.json";
import { v4 } from "uuid";

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
    const [colors, setColors] = useState(colorData);

    const addColor = (title, color) => {
        var newColor = {
            id: v4(),
            title,
            color,
            rating: 0
        };
        setColors([...colors, newColor]);
    };

    const removeColor = (id) => setColors(colors.filter(color => id !== color.id));

    const rateColor = (id, rating) => {
        setColors(
            colors.map(color => color.id === id ? { ...color, rating } : color)
        );
    };

    return (
        <ColorContext.Provider value={{colors, addColor, removeColor, rateColor}}>
            {children}
        </ColorContext.Provider>
    )
}