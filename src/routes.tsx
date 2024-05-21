import { Routes, Route } from "react-router-dom";
import App from "./App";
import { About } from "./components/About";


export const routing = (
        <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/projects" element={<App/>}></Route>
            <Route path="/contact" element={<App/>}></Route>
        </Routes>
)