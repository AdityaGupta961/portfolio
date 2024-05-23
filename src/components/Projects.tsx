import { ProjectTile } from "./ProjectTile"

export const Projects = () => {
    return (
        <div className="space-y-10 py-10">
            <ProjectTile 
                title="AI Meet - Chat with AI and Smith" 
                stack="Flutter, Firebase, Sqflite"
                description="An AI chat app with OpenAI API and Firebase, featuring image recognition, customizable avatars, and efficient local database management, achieving 10,000+ downloads."
                imagePath="AiMeet.png"
                liveURL="https://play.google.com/store/apps/details?id=com.markzeal.aimeet&pcampaignid=web_share"
            />
            <ProjectTile 
                title="Boat Lifestyle Clone" 
                stack="React, Redux, Json Server, Bootstrap"
                description="A Boat Lifestyle Website clone using React, Bootstrap, Redux, and JSON Server, featuring a React.js Admin Panel for efficient data management, intuitive routing, and enhanced product rendering and sorting."
                imagePath="AiMeet.png"
                githubURL="https://www.github.com/adityagupta961/boatclone"
            />
        </div>
    )
}
