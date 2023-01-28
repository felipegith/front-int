import { Route, Routes } from "react-router-dom";

import Signin from "../signin";
import Signup from "../signup";
import Home from "../home";
export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
}
