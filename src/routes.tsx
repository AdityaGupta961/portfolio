import { Routes, Route } from "react-router-dom";
import { App } from "./App";
import { About } from "./components/About";
import { Projects } from "./components/Projects";


export const routing = (
        <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
        </Routes>
)