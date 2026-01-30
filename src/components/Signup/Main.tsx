import { useMediaQuery } from "react-responsive"
import Input from "../Login/Input"


const Main = () => {

    const isMobile = useMediaQuery({query : '(max-width : 500px )'})

  return (
    <div className="w-10/12 h-11/12  rounded-4xl bg-[#DFDFE1]/ flex justify-between items-center">
        {!isMobile && <div className="w-1/2 h-full bg-[url('src/assets/images/home-img/Signup_img1.jpg')] bg-cover rounded-l-4xl">
            <h1 className="text-6xl font-bold uppercase p-6 text-white">Shop.co</h1>
        </div>
        }
        <div className="md:w-1/3 w-full rounded-4xl md:h-11/12 bg-background bg-[#252a43]/ text-[#DFDFE1]/ border border-l-0/ border-border-100 p-8 m-auto flex flex-col  gap-5">
            <h1 className="text-4xl my-3">Signup</h1>
            <Input 
                type="text"
                name="Name"
                placeholder="Name"
                />
            <Input 
                type="text"
                name="Name"
                placeholder="Name"
                />
            <Input 
                type="text"
                name="Name"
                placeholder="Name"
                />
            <Input 
                type="text"
                name="Name"
                placeholder="Name"
                />
              <input 
                    type="submit" 
                    value='Login'
                    className="w-full h-10 bg-black text-background rounded-semicircle active:scale-99" 
                    />
        </div>
    </div>
  )
}

export default Main