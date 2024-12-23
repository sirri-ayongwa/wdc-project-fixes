import Volcanic from "../assets/video/Volcanic.mp4";


function TopHero() {
    return (
      <div className="relative w-full h-screen overflow-hidden ">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={Volcanic}
          autoPlay
          loop
          muted
        />
        <div className="relative container z-10 flex flex-col items-start justify-center h-full text-white dark:text-gray-600700">
          <div>
               <h1 className="text-6xl font-bold leading-tight">A New Era of <b className="text-n-3">Resilience</b> and <b className="text-n-3">Empowerment</b></h1>
               <p className="text-xl mt-4">AI and real-time disasters data to deliver life-saving insights.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default TopHero;