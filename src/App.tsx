import { useState } from "react";
import "./global.css";
import reactLogo from "./assets/react.svg";
import Router from "./pages/router";
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Router />
        </>
    );
}

export default App;
