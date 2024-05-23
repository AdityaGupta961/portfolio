import { ProjectTile } from "./ProjectTile"

export const Projects = () => {
    return (
        <div className="space-y-10 py-10">
            <ProjectTile 
                title="AI Meet - Chat with AI and Smith" 
                description="An AI chat app with OpenAI API and Firebase, featuring image recognition, customizable avatars, and efficient local database management, achieving 10,000+ downloads."
                imagePath="AiMeet.png"
                githubURL="https://www.github.com/adityagupta961"
                liveURL="https://www.google.com"
            />
            <ProjectTile 
                title="Test" 
                description="lorem"
                imagePath="ProfilePicture.png"
                githubURL="https://www.github.com/adityagupta961"
            />
        </div>
    )
}