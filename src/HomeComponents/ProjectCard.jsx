

function ProjectCard({title, image, description, git}){

    return (
        <div className="flex flex-row justify-between items-center mx-auto bg-gradient-to-r from-white to-purple-200 shadow-xl text-slate-800 p-12 rounded-lg">
            <div className="text-center pr-16">
                <h1 className="text-6lg md:text-7xl font-bold mb-4 font-mono">{title}</h1>
                <h2 className="text-base md:text-lg font-bold mb-4 font-mono">{description}</h2>
                <a href={git} className = "cursor-pointer hover:underline text-base md:text-lg font-bold mb-4 font-mono">Github</a>
            </div>
            <img src={image} className="max-w-56 p-2"></img>
        </div>
    )
}

export default ProjectCard;