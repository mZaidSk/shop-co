import { useMediaQuery } from "react-responsive"
import { X } from "lucide-react"
import { Link } from "react-router-dom"

type login_up = {
    children:React.ReactNode
}

const Login_up:React.FC<login_up> = ({children}) => {

    const isMobile = useMediaQuery({query : '(max-width : 500px )'})

  return (
  
    <div className="flex flex-col justify-between h-screen items-center" >
        {isMobile && <div className="w-full h-20 bg-background flex justify-between items-center p-4">
            <h1 className="text-2xl font-medium">Shop.co</h1>
            <Link to={'/'}>
                <button className=" active:scale-99 active:text-black">
                    <X/>
                </button>
            </Link>
        </div>
        }
        <div className="w-full h-full flex justify-center md:p-0 p-6 items-center ">
            { children }
        </div>
  </div>
  )
}

export default Login_up
