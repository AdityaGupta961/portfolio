import { SkillsCarousel } from "./components/SkillsCarousel";

function App() {
  return (
    <div className="container mx-auto my-auto px-8">
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        Aditya Gupta
      </h1>
      <br />
      <h1 className="text-2xl font-mono md:text-3xl lg:text-4xl font-semibold text-slate-500 text-center">
        Software Development Engineer
      </h1>
      <SkillsCarousel/>
    </div>
  );
}

export default App;
