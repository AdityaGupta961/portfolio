import { FaGithub} from "react-icons/fa"
import { TbWorldWww } from "react-icons/tb"

interface ProjectProps{
    title: string,
    stack: string,
    description: string,
    imagePath: string,
    githubURL?: string,
    liveURL?: string
}


export const ProjectTile = ({
        title,
        stack,
        description,
        imagePath,
        githubURL,
        liveURL
    }:
        ProjectProps) => {
    return (
        <div className="space-y-6 xl:flex xl:space-x-6 w-4/5 md:w-3/5 mx-auto shadow-2xl hover:border-2 hover:border-black hover:scale-105 transition-all p-10 rounded-xl">
            <div className="flex flex-shrink-0 space-y-4 flex-col basis-2/5 text-center lg:text-left items-center lg:items-start">
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className=" text-blue-500">{stack}</p>
                <p className="w-4/5">{description}</p>
                <div className="flex lg:justify-start justify-center space-x-2">
                    {liveURL && <a href={liveURL} target="_blank" rel="noreferrer noopener" className="flex space-x-2 items-center w-max  bg-slate-100 hover:bg-black hover:text-white px-6 py-3 rounded-xl">
                        <TbWorldWww/>
                        <p>Live</p>
                    </a>}
                    {githubURL && <a href={githubURL} target="_blank" rel="noreferrer noopener" className="flex space-x-2 items-center w-max bg-slate-100 hover:bg-black hover:text-white px-6 py-3 rounded-xl">
                        <FaGithub/>
                        <p>Repo</p>
                    </a>}
                </div>
            </div>
            <div className="flex justify-center">
                <img className="max-w-[100%] min-w-[80%] aspect-video max-h-auto" src={imagePath} alt={title}/>
            </div>
        </div>
    )
}