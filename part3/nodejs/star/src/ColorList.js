import React from "react";
import Color from "./Color";

export default function ColorList({ colors = [], onRemoveColor = f => f, onRateColor = (id, rating) => rating }) {
    if (!colors.length) return <div>No Colors listed.</div>;
    return (
        <div>
            { 
            colors.map(color => <Color key={color.id} {...color} onRemove={onRemoveColor} onRate={onRateColor} />)
            }
        </div>
    );
}