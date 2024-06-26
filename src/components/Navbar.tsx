import { useState } from "react"
import { NavLink } from "react-router-dom";
import {Squash as Hamburger} from 'hamburger-react'

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <nav className="py-12 px-8 2xl:px-24 z-50">
            <div className="flex justify-between">
                <NavLink to="/" className="flex items-end space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
                    <p className="hidden md:block uppercase font-semibold">Aditya Gupta</p>
                </NavLink>
                <div className="">
                    <div className="block md:hidden">
                        <Hamburger size={20} toggled={open} onToggle={handleClick}></Hamburger>
                    </div>
                    <div className="hidden md:flex">
                        <ul className="flex space-x-2 lg:space-x-6 xl:space-x-10 items-center">
                            <li className="hover:scale-110 transition-all">
                                <NavLink className={({ isActive, isPending }) =>
                                                        isPending ? "pending" : isActive ? " hover:bg-slate-100 rounded-lg decoration-slate-900 underline-offset-8 px-5 py-3 underline decoration-2" : "hover:bg-slate-100 px-5 py-3 rounded-lg"
                                                    } to={'/'}>Home</NavLink>
                            </li>
                            <li className="hover:scale-110 transition-all">
                                <NavLink className={({ isActive, isPending }) =>
                                                        isPending ? "pending" : isActive ? "hover:bg-slate-100 px-5 py-3 rounded-lg underline decoration-slate-900 decoration-2 underline-offset-8" : "hover:bg-slate-100 px-5 py-3 rounded-lg"
                                                    } to={'/about'}>About</NavLink>
                            </li>
                            <li className="hover:scale-110 transition-all">
                                <NavLink className={({ isActive, isPending }) =>
                                                        isPending ? "pending" : isActive ? "hover:bg-slate-100 px-5 py-3 rounded-lg underline decoration-slate-900 decoration-2 underline-offset-8" : "hover:bg-slate-100 px-5 py-3 rounded-lg"
                                                    } to={'/projects'}>Projects</NavLink>
                            </li>
                            <a href="AdityaGuptaResume.pdf" download className="hover:scale-110 transition-all flex space-x-2 bg-black text-white px-5 py-2 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                                <p>CV</p>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
            {open?
            <div className="md:hidden">
                <ul className="text-center space-y-5 pt-5">
                    <li onClick={handleClick}>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li onClick={handleClick}>
                        <NavLink to={'/about'}>About</NavLink>
                    </li>
                    <li onClick={handleClick}>
                        <NavLink to={'/projects'}>Projects</NavLink>
                    </li>
                    <li>
                        <a href="AdityaGuptaResume.pdf" download className="flex justify-center space-x-2 bg-black text-white px-5 py-2 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                            <p>CV</p>
                        </a>
                    </li>
                </ul>
            </div>
            :<></>}
        </nav>
    )
}