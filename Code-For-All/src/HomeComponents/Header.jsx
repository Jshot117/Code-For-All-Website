import logo from "../assets/logo.png";

function Header() {
    return (
        <header className="text-purple-500 p-4 rounded-lg font-mono">
            <div className="container mx-auto flex items-center">
                <img src={logo} alt="Code for All logo" className="max-w-20 hover:scale-105 ease-in-out duration-300"></img>
                <nav className="mx-auto">
                    <ul className="flex space-x-4">
                        <li className="p-2 px-4 border border-purple-500 rounded-full hover:scale-105 ease-in-out duration-300 no-underline cursor-pointer text-xl hover:glow">Home</li>
                        <li className="p-2 px-4 border border-purple-500 rounded-full hover:scale-105 ease-in-out duration-300 no-underline cursor-pointer text-xl hover:glow">About</li>
                        <li className="p-2 px-4 border border-purple-500 rounded-full hover:scale-105 ease-in-out duration-300 no-underline cursor-pointer text-xl hover:glow">Board</li>
                        <li className="p-2 px-4 border border-purple-500 rounded-full hover:scale-105 ease-in-out duration-300 no-underline cursor-pointer text-xl hover:glow">Events</li>
                        <li className="p-2 px-4 border border-purple-500 rounded-full hover:scale-105 ease-in-out duration-300 no-underline cursor-pointer text-xl hover:glow">Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
    
    
    

}
export default Header;