import { X } from "lucide-react"
import { Link } from "react-router-dom"

const Notfound = () => {
  return (
    // <div className="flex justify-center items-center w-full h-screen bg-black text-white">
    //     <h1 className="text-2xl flex gap-3">404  | <span><Link to={'/'}> Go to home page </Link></span></h1>
    // </div>

    <div className="w-full h-screen flex justify-center items-center bg-black">
        <div className="w-2xs h-fit border-white border rounded-2xl text-white transform rotate-8">
            <div className="flex justify-end items-center p-2">
                <Link to={'/'}><X/></Link>
            </div>
            <hr  />
            <div className="flex flex-col justify-center items-center p-2 ">
                <h1 className="text-7xl">404</h1>
                <h2>page not found</h2>
            </div>
        </div>
    </div>
  )
}

export default Notfound