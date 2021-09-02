import React, { useState } from "react";
import { render } from "react-dom";
import colorData from "./color-data.json";
import ColorList from "./ColorList";

export default function App() {
    const [colors, setColors] = useState(colorData);
    return <ColorList colors={colors} onRemoveColor={id => {
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
    }} />;
}