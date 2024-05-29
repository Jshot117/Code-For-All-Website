import logo from "../assets/logo.png";

function Header() {
    return (
        <header className ="text-black p-4">
            <div className="container mx-auto flex items-center">
                <img src={logo} alt="Code for All logo" className = "max-w-28 hover:scale-105 ease-in-out duration-300 "></img>
                <nav className="mx-auto">
                    <ul className="flex space-x-4">
                        <li className="p-2 hover:scale-105 ease-in-out duration-300 hover:underline cursor-pointer text-xl">Home</li>
                        <li className="p-2 hover:scale-105 ease-in-out duration-300 hover:underline cursor-pointer text-xl">About</li>
                        <li className="p-2 hover:scale-105 ease-in-out duration-300 hover:underline cursor-pointer text-xl">Board</li>
                        <li className="p-2 hover:scale-105 ease-in-out duration-300 hover:underline cursor-pointer text-xl">Events</li>
                        <li className="p-2 hover:scale-105 ease-in-out duration-300 hover:underline cursor-pointer text-xl">Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    )

}
export default Header;