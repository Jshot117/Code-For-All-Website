import Meet_a_scientist_event3 from "../assets/Meet_a_scientist_event3.jpg"

function LatestEvent2() {

    return (
      <section id="second-section" className=" p-20 bg-gradient-to-b from-zinc-700 to-black"> 
   
        <div className="bg-gradient-to-r from-white to-purple-200 mt-0 mb-10 ml-20 shadow-xl p-5 rounded-lg max-w-4xl">
        <div className="flex flex-col md:flex-row ">
          <div className="flex flex-col justify-center md:mr-10 mb-4 md:mb-0 text-left w-full md:w-1/2">
            <h1 className="text-2xl font-bold mb-4">Latest Past Event</h1>
            <p className="text-lg">Description of the event can go here.</p>
          </div>
          <div className="w-full md:w-1/2">
            <img className="w-full h-auto rounded-lg" src={Meet_a_scientist_event3} alt="Latest Event" />
          </div>
        </div>
      </div>
      </section>
    )
}
export default LatestEvent2;