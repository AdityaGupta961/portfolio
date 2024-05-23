import { FaHandshake } from "react-icons/fa";
import { SkillsCarousel } from "./components/SkillsCarousel";
import { memo } from "react";

export const App = memo(() => {
  return (
    <div className="lg:grid lg:grid-cols-3 items-center justify-center my-auto mx-8 space-y-8 mb-5">
      <div className="lg:col-span-1 lg:order-last flex justify-center lg:justify-start">
        <img className="max-w-[400px] overflow-hidden max-h-[400px] mx-5"  src="ProfilePicture.png" alt="Profile"/>
      </div>
      <div className="lg:col-span-2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          Aditya Gupta
        </h1>
        <br />
        <h1 className="text-2xl font-mono md:text-3xl lg:text-4xl font-semibold text-slate-500 text-center">
          Software Development Engineer
        </h1>
        <SkillsCarousel/>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=garg.aditya961@gmail.com" target="_blank" rel="noreferrer noopener" className="flex hover:scale-125 after:hover:scale-100 transition-all w-max space-x-2 mx-auto justify-center items-center bg-black text-white px-6 py-3 rounded-xl">
            <FaHandshake/>
            <p>Let's work together</p>
        </a>
      </div>
    </div>
  );
})

