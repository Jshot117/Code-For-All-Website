import discord from '../assets/discord.png'

function Social() {
    function handleClick() {
        window.open('https://discord.gg/s8jwd4Es')
    }

    return (
        <div className="flex-col justify-center items-center ">
            <h1 className="text-center">Join our Discord</h1>
            <img onClick={handleClick} src={discord}
                className="mx-auto w-11 h-9 cursor-pointer hover:scale-110 ease-in-out duration-400"></img>
        </div>
    )
}
export default Social;