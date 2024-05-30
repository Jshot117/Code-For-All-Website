import Justin from "../assets/justin.jpg"
import ProjectCard from "./ProjectCard"

function Projects(){
    return (
        <div className="flex flex-col">
            <h1 className="p-4 
                            bg-clip-text text-transparent bg-gradient-to-r from-black to-purple-400 
                            text-6xl md:text-7xl font-bold mb-4 font-mono text-center"
                            >Code for All Projects</h1>
            <ProjectCard title="Discord Tutor Bot"image={Justin} description="Test" git="https://github.com/justinespinal/GradeCalculator"/>
        </div>
    )
}

export default Projects;