import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaReact, FaHtml5, FaCss3, FaNpm, FaPython, FaJava, FaRProject } from "react-icons/fa";
import {
  BiLogoBootstrap,
  BiLogoFlutter,
  BiLogoRedux,
  BiLogoNodejs,
  BiLogoFirebase,
  BiLogoGit,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoJavascript,
} from "react-icons/bi";
import { SiExpress, SiDotenv, SiDotnet, SiMysql, SiDart, SiCplusplus} from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { TbBrandNextjs, TbBrandCSharp } from "react-icons/tb";

export const SkillsCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
    }
    return (
        <div className="skills-carousel py-10">
            <div className="carousel-container">
                <Carousel
                    responsive={responsive}
                    //ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1500}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    itemClass="carousel-item-padding-40-px"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    <BiLogoJavascript/>
                    <BiLogoTypescript/>
                    <FaReact />
                    <TbBrandNextjs />
                    <BiLogoNodejs />
                    <SiExpress />
                    <FaHtml5 />
                    <FaCss3 />
                    <FaNpm />
                    <BiLogoFirebase />
                    <BiLogoGit />
                    <BiLogoTailwindCss />
                    <IoLogoVercel />
                    <BiLogoFlutter/>
                    <BiLogoBootstrap/>
                    <BiLogoRedux/>
                    <SiDotenv/>
                    <SiDotnet/>
                    <SiMysql/>
                    <SiDart/>
                    <TbBrandCSharp/>
                    <FaPython/>
                    <SiCplusplus/>
                    <FaJava/>
                    <FaRProject/>
                </Carousel>
            </div>
        </div>
    )
}