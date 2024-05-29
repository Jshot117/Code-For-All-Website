function Header() {
    return (
        <header className="bg-gray-600 text-white p-4">
            <div className="container mx-auto flex items-center">
                <h1 className="text-2xl font-bold">Code For All</h1>
                <nav className="ml-auto">
                    <ul className="flex space-x-4">
                        <li className="p-2 hover:bg-gray-700">Home</li>
                        <li className="p-2 hover:bg-gray-700">About</li>
                        <li className="p-2 hover:bg-gray-700">More Events</li>
                    </ul>
                </nav>
            </div>
        </header>
    )

}
export default Header;