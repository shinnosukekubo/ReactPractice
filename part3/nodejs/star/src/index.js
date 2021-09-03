import React, { createContext } from "react";
import { render } from "react-dom";
import App from "./App";
import ColorProvider from "./ColorProvider";

render(
    //同意義
    // <ColorProvider>
    //   <App />
    // </ColorProvider>
    <ColorProvider children={<App />}>
    </ColorProvider>,
    document.getElementById("root")
);