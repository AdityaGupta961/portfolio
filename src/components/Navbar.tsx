import { useState } from "react"
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <nav className="py-12 px-8">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
                    <p className="hidden md:block uppercase">Aditya Gupta</p>
                </div>
                <div className="">
                    {open?
                        <button className="block md:hidden" onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>
                    :<button className="block md:hidden" onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-menu"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h10"/><path d="M7 12h10"/><path d="M7 16h10"/></svg>
                        </button>}
                    <div className="hidden md:flex">
                        <ul className="flex space-x-10">
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/about'}>About</Link>
                            </li>
                            <li>
                                <Link to={'/projects'}>Projects</Link>
                            </li>
                            <li>
                                <Link to={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {open?
            <div className="z-[1000] relative">
                <ul className="text-center space-y-5 pt-5">
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/projects'}>Projects</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </div>
            :<></>}
        </nav>
    )
}