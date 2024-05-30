function BoardCard({ image, name, role, description, link }) {
    return (

        <div className="flex-col max-w-82 p-5 m-10 rounded-xl shadow-lg shadow-black   bg-zinc-900 hover:scale-110 ease-in-out duration-300">
            <div className="group hover:shadow-lg transition-shadow duration-300">
                <a href={link}>
                    <div className="image-container h-60 w-full flex items-center justify-center"> {/* Set fixed dimensions for the image container */}
                        <img
                            src={image}
                            href={link}
                            alt={name}
                            className="rounded-md cursor-pointer hover:scale-105 ease-in-out duration-300 max-h-full max-w-full object-cover" // Set max-height and max-width to maintain aspect ratio
                        />
                    </div>
                </a>
                <br />
                <h1 className="text-purple-500 textglow font-bold m-0">{name}</h1>
                <h3 className="text-green-300 greenTextGlow">{role}</h3>
                <div className="description-container overflow-hidden h-20"> {/* Set a fixed height */}
                    <h2 className="text-white textglow mt-5">{description}</h2>
                </div>
            </div>
        </div>

    

    );
}

export default BoardCard;
