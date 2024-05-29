function BoardCard({image, name, role, description}){
    return(
        <div className="flex-col max-w-72 p-4 m-10 border-8 border-black rounded-md">
            <div className="text-center">
                <img src={image} alt={name} className="rounded-md cursor-pointer hover:scale-105 ease-in-out duration-300"></img>
                <br/>
                <h1>{name}</h1>
                <h3>{role}</h3>
                <h2>{description}</h2>
            </div>
        </div>
    )
}

export default BoardCard;