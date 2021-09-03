import React, {useContext} from "react";
import { useColors } from "./ColorProvider";
import Color from "./Color";

export default function ColorList() {
    const { colors } = useColors();
    if (!colors.length) return <div>No Colors listed.</div>;
    return (
        <div>
            { 
            colors.map(color => <Color key={color.id} {...color}/>)
            }
        </div>
    );
}