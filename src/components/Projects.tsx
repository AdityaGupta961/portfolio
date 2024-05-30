import { memo } from "react"
import { ProjectTile } from "./ProjectTile"

export const Projects = memo(() => {

    const projectsData = [
        {
            title: "Real Estate Landing Page", 
            stack: "React, TailwindCSS, Typescript",
            description: "Experience real estate like never before with our impeccably designed landing page, featuring a stunning, seamless layout and captivating animations.",
            imagePath: "realestate.png",
            githubUrl:"",
            liveURL: "https://adityaguptarealestate.vercel.app"
        },
        {
            title: "AI Meet - Chat with AI and Smith", 
            stack: "Flutter, Firebase, Sqflite",
            description: "An AI chat app with OpenAI API and Firebase, featuring image recognition, customizable avatars, and efficient local database management, achieving 10,000+ downloads.",
            imagePath: "AiMeet.png",
            githubUrl:"",
            liveURL: "https://play.google.com/store/apps/details?id=com.markzeal.aimeet&pcampaignid=web_share"
        },
        {
            title: "Boat Lifestyle Clone", 
            stack: "React, Redux, Json Server, Bootstrap",
            description: "A Boat Lifestyle Website clone using React, Bootstrap, Redux, and JSON Server, featuring a React.js Admin Panel for efficient data management, intuitive routing, and enhanced product rendering and sorting.",
            imagePath: "boatclone.png",
            liveURL:"",
            githubURL: "https://www.github.com/adityagupta961/boatclone"
        }
    ]

    const projectList = projectsData.map((project)=>{
        return (
            <ProjectTile 
                title={project.title}
                stack={project.stack}
                description={project.description}
                imagePath={project.imagePath}
                liveURL={project.liveURL}
                githubURL={project.githubURL}
            />
        )
    })

    return (
        <div className="space-y-10 py-10">
            {projectList}
        </div>
    )
})