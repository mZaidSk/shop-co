import { useState } from "react"
import Input from "./Input"
import { Link } from "react-router-dom"
import  { useMediaQuery } from "react-responsive"
            
const Main = () => {
    
    const [Name, setname] = useState<string>('')
    const [Password, setpassword] = useState<string>('')

    const isMobile = useMediaQuery({query : '(max-width : 500px )'})

    const handelsubmit = (e:React.FormEvent)=>{
        e.preventDefault();
    }

  return (
    <div className="flex items-center justify-around md:h-11/12 h-fit md:w-10/12 w-full rounded-4xl border border-border-100 bg-background">
        {!isMobile && <div className="w-1/2 h-full flex flex-col rounded-l-4xl bg-[url('src/assets/images/home-img/banner.jpg')] bg-cover bg-no-repeat ">
            <Link to={'/'}>
                <h1 className="text-6xl p-4 font-bold uppercase ">Shop.Co</h1>
            </Link>
            <div className="flex justify-around w-full h-40">
                <div className=" flex items-end">
                    <div className="diamond size-10"></div>
                </div>
                <div className=" flex items-start">
                    <div className="diamond size-20"></div>
                </div>
            </div>
        </div>  }
        <div className="md:w-1/3  w-full  h-fit flex flex-col gap-4 border rounded-4xl p-8 bg-white ">
            <h1 className=" text-4xl font-bold">Welcome back</h1>
            <form 
                onSubmit={handelsubmit}
                className="flex flex-col gap-4">
                <Input 
                    type="text"
                    label="Name"
                    name="Name" 
                    placeholder="Name"
                    value={Name}
                    onChange={(e)=>{setname(e.target.value)}}
                />
                <Input 
                    type="password"
                    label="Password"
                    name="Password"
                    placeholder="Password"
                    value={Password}
                    onChange={(e)=>{setpassword(e.target.value)}}
                    showPasswordToggle
                    showClearButton
                    helperText="Password must be 8 character"
                    />
                <div className="flex justify-between items-center md:text-sm text-xs ">
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember me.</label>
                    </div>
                    <button>Forget Password</button>
                </div>

                <input 
                    type="submit" 
                    value='Login'
                    className="w-full h-10 bg-black text-background rounded-semicircle active:scale-99" 
                    />
                <div className="flex justify-center gap-1 items-center w-full h-10 border border-border-100 font-medium rounded-semicircle active:scale-99 ">
                    <img src="/public/vite.svg" alt="" />
                    {/* <input 
                    type="submit" 
                    value='Sign in with Google'
                    /> */}
                    <a href={'https://www.google.com/'}>
                        <button>
                            Sign in with Google
                        </button>
                    </a>
                </div>
            </form>
            <p className="text-center">create a new account? <span className="text-blue-500"><Link to={'/signup'}>signup</Link></span> </p>
        </div>
    </div>
  )
}

export default Main