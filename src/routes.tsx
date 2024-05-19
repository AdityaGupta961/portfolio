import { Routes, Route } from "react-router-dom";
import App from "./App";


export const routing = (
        <Routes>
            <Route path="/" element={<App/>}></Route>
            {/* <Route path="/about" element={<App/>}></Route>
            <Route path="/projects" element={<App/>}></Route>
            <Route path="/contact" element={<App/>}></Route> */}
        </Routes>
)