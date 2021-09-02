import React, {useRef} from "react";
import { useInput } from "./hock.js";

export default function AddColorForm({ onNewColor = (title, color) => ""}) {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = e => {
        e.preventDefault();
        onNewColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
            <input 
                {...titleProps}
                type="text" 
                placeholder="color title..." 
                required />
            <input 
                {...colorProps}
                type="color" 
                required />
            <button>ADD</button>
        </form>
    );
}