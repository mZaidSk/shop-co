import { Check, ChevronRight } from "lucide-react"
import type React from "react"
import { useState } from "react"

const SideBar = () => {

  const colours = ['bg-[#00C12B]','bg-[#F50606]','bg-[#F5DD06]','bg-[#F57906]','bg-[#06CAF5]','bg-[#063AF5]','bg-[#7D06F5]','bg-[#F506A4]','bg-[#FFFFFF]','bg-[#000000]']
  const [selectColor, setselectColor] = useState(-1)

  const sizes =['XX-Small','X-Small','Small','Medium','Large','X-Large','XX-Large','3X-Large','4X-Large']
  const [selectSize, setselectSize] = useState(-1)

  return (
    <div className="w-full h-fit gap-2 flex flex-col ">
      
      <div className="gap-1">
      <Dropdown heading="T-shirt" ></Dropdown>
      <Dropdown heading="Shorts" ></Dropdown>
      <Dropdown heading="Shirts" ></Dropdown>
      <Dropdown heading="Hoddie" ></Dropdown>
      <Dropdown heading="Jeans" ></Dropdown>
      </div>

      <hr  className="text-border-100 my-3 w-100px"/>

      <div>
        <Dropdown heading="Price" parentclass="text-xl" >
          <div >
            <input type="range" name="" id="" className="w-full"/>
          </div>
        </Dropdown>
      </div>

      <hr  className="text-border-100 my-3  w-100px"/>

      <div>
        <Dropdown heading="Colors" parentclass="text-xl" >
         <div className=" flex flex-wrap gap-4 md:gap-2 py-2">
           {colours.map(( color , index )=>{
            return(
            <div 
            key={index}
            onClick={()=>{
              setselectColor(index)
            }}  
            className={`size-7 ${color} border-border-100 border rounded-full flex justify-center items-center`}>{index == selectColor && <Check size={20} color='#F2F0Fa' /> } </div>
          )}
          )}
          </div>

        </Dropdown>
      </div>

      <hr  className="text-border-100 my-3 w-100px"/>
      
      <div>
        <Dropdown heading="Sizes" parentclass="text-xl">
          <div className="flex gap-2 flex-wrap">
            { sizes.map(( size , index )=>{
            return (
                <button
                key={index} 
                className={`w-fit h-fit p-3 rounded-[62px] ${index == selectSize ? 'bg-black text-white' : 'bg-background text-grey'}`}
                onClick={()=>{setselectSize(index)}}>
                  {size}
                </button>
            )
          })}
          </div>
        </Dropdown>
      </div>

      <hr  className="text-border-100 my-3 w-100px"/>

      <div>
        <Dropdown heading="Dress Style" parentclass="text-xl" >
          <Dropdown heading="Casual" ></Dropdown>
          <Dropdown heading="Formal" ></Dropdown>
          <Dropdown heading="Party" ></Dropdown>
          <Dropdown heading="Gym" ></Dropdown>

        </Dropdown>
      </div>

      <hr  className="text-border-100 my-3 w-100px"/>

      <div className="w-full h-fit md:mb-4 mb-20">
                <button className="w-full h-13 my-3 rounded-[62px] active:scale-95 md:text-base text-sm bg-black text-white">
            Apply Filter
        </button>
      </div>


    </div>
  )
}

export default SideBar

type dropmenu = {
  heading:string,
  children?  : React.ReactNode,
  padding? : boolean,
  parentclass? : string,
  childclass? : CSSAnimation
  // isList? : boolean,
  // ListItem? : string[],
  // content? : string,
}


export const Dropdown:React.FC<dropmenu> = ({ heading , children , padding , parentclass , childclass }) => {
  const [isActive, setisActive] = useState(false)
  return (
    <div>
      <div className={`flex justify-between items-center mt-2 cursor-pointer text-base ${parentclass}`}
          onClick={()=>{setisActive(!isActive)}}>
        <h1 className={`${isActive ? ' text-black font-medium' : ' text-grey'}`}>{heading}</h1>
        <span className={`${isActive ? '-rotate-90 text-black' : 'rotate-0 text-icon'}  transition-all duration-100 ease-in`}>
          <ChevronRight/>
        </span>
      </div>
      {isActive && <div className={`${padding ? 'p-2' : 'mt-1'} ${childclass}`}>
        {children}
      </div>
      }
    </div>
  )
}

