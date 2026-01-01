// import { Link } from "react-router-dom"

const Poster = () => {
  return (
    <div className="w-full h-fit bg-background rounded-3xl md:p-10 p-6">
        <h1 className="md:text-5xl text-4xl text-center md:font-bold font-extrabold p-4 ">BROWSE BY DRESS STYLE</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-2 grid-rows-4 my-10 gap-4">
            {/* link tag goes hare */}
            <div className="md:h-72 h-49 w-full bg-white rounded-3xl md:col-span-1">
                <div  className="relative h-full w-full overflow-hidden  rounded-3xl">
                    <h1 className="absolute text-3xl p-4 font-bold z-10">Casual</h1>
                    <img
                        className="scale-200 -translate-x-10 translate-y-10 transform rotate-y-180" 
                        src="src/assets/images/home-img/poster1.png" 
                        alt="" />
                </div>
            </div>
            {/* link tag goes hare */}
            <div className="md:h-72 h-49 w-full bg-white rounded-3xl md:col-span-2">
                <div className="relative h-full w-full overflow-hidden rounded-3xl">
                    <h1 className="absolute text-3xl p-4 font-bold z-10">Formal</h1>
                    <img
                        className="md:scale-150 scale-200 md:translate-x-60 translate-x-40 md:translate-y-0 translate-y-10 " 
                        src="src/assets/images/home-img/poster2.png" 
                        alt="" />
                </div>
            </div>
            {/* link tag goes hare */}
            <div className="md:h-72 h-49 w-full bg-white  rounded-3xl md:col-span-2">
                <div className="relative h-full w-full overflow-hidden rounded-3xl">
                    <h1 className="absolute text-3xl p-4 font-bold z-10">Party</h1>
                    <img
                        className="md:scale-110 scale-130 md:-translate-y-30 -translate-y-10 md:translate-x-20 translate-x-15 " 
                        src="src/assets/images/home-img/poster3.png" 
                        alt="" />
                </div>
            </div>
            {/* link tag goes hare */}
            <div className="md:h-72 h-49 w-full bg-white rounded-3xl md:col-span-1">
                <div className="relative h-full w-full overflow-hidden rounded-3xl">
                    <h1 className="absolute text-3xl p-4 font-bold z-10">Gym</h1>
                    <img
                        className="scale-110 -translate-y-25 " 
                        src="src/assets/images/home-img/poster4.png" 
                        alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Poster