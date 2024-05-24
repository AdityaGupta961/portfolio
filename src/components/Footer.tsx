export const Footer = () => {
    return (
        <footer className="mt-auto justify-end">
            <ul className=" bg-slate-100 text-center space-y-5 pt-8 md:pt-3 pb-8 px-4 md:flex md:justify-center md:items-end md:space-x-6 md:mx-auto">
                <li>
                    <a className="flex justify-center items-center space-x-2" href="https://www.linkedin.com/in/adityagupta961/" target="_blank" rel="noreferrer noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="blue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                        <p>LinkedIn</p>
                    </a>
                </li>
                <li>
                    <a className="flex justify-center items-center space-x-2" href="https://github.com/AdityaGupta961" target="_blank" rel="noreferrer noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        <p>Github</p>
                    </a>
                </li>
                <li >
                    <a className="flex justify-center items-center space-x-2" href="https://mail.google.com/mail/?view=cm&fs=1&to=garg.aditya961@gmail.com" target="_blank" rel="noreferrer noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        <p>Email</p>
                    </a>
                </li>
                <li>
                    <p>&copy; 2024. All rights reserved by Aditya Gupta.</p>
                </li>
            </ul>
        </footer>
    )
}