import { Check, Minus, Plus} from "lucide-react"
import {  useState } from "react"
import type { ProductDetailProps } from "../../pages/Product";
import Rating from "./Rating";



interface ProductCardProps {
  data: ProductDetailProps;
}

const ProView:React.FC<ProductCardProps> = ({data}) => {
  return (
    <div className="flex flex-col gap-4 w-full h-fit md:flex-row">
    <ProductImg data={data} />

    <ProductDetail data={data} />
    </div>
  )
}

export default ProView


const ProductImg:React.FC<ProductCardProps> = ({data}) => {

  const [image, setImage] = useState<string>(data.ProImage[0])
  const imageHanddler = (imageUrl:string)=>{
     setImage(imageUrl)
  }
  return (
  
    <div className="flex flex-col justify-center lg:flex-row w-full lg:w-1/2 h-fit gap-2 ">

      <div className="flex flex-row order-2 lg:order-1 lg:flex-col h-fit lg:h-fit w-fit lg:w-40 gap-2.5 overflow-auto" >

        {data.ProImage.map((image,index)=>{
          return(
             <img 
              key={index}
              className="w-28 lg:w-40 h-27 md:h-35 lg:h-42 p-0 border rounded-xl object-cover active:scale-98  " 
              src={image} 
              alt="product img" 
              onClick={()=>imageHanddler(image)}/>
          ) 
        })}
      </div>
      <div className="w-full order-1 lg:order-2 h-full">

          <img 
          className="ProductImg w-90 lg:w-full h-70  md:h-120   lg:h-132 xl:w-120 mr-10  rounded-xl object-cover"
          src={image}
          alt="product img" />

      </div>
    </div>
  )
}




const ProductDetail:React.FC<ProductCardProps> = ({data}) => {

  const [tick, settick]:any = useState(0)  
  const [click, setclick] = useState(0)
  const [count, setcount] = useState(1)

  const countIncrement =()=>{
      if (count>=data.ProQuantity){
        setcount(count)
      }
      else{
        setcount(count+1)
      }
    }

  const countDecrement =()=>{
    if (count>1){
      setcount(count-1)
    }
  }
  return (

    <div className="w-full md:w-1/2 h-full    ">
    <h1 className="font-extrabold text-2xl md:text-4xl tracking-normal font-[Integral CF]">
            {data.ProName.toUpperCase()}
      </h1>
      <h3 className="flex  gap-1 my-2 items-center ">
        <Rating rating={data.rating} size={24}  /> {data.rating}/5
      </h3>
      <h2 className="text-2xl md:text-3xl font-bold my-4">${data.ProPrice}</h2>

      <p className="text-grey my-2 text-sm md:text-base">{data.ProDescription}</p>

         <hr className="my-4 border-border-100"/>

         <p className="text-grey my-2 text-base">Select Colors</p>

         <div className="flex gap-4 my-4 ">

          {data.ProColor.map((color,index)=>{
            return(
                  <div 
                  key={index}
                  className="size-9 md:size-10 flex items-center justify-center text-white rounded-full cursor-pointer "
                  style={{backgroundColor:color}}
                  onClick={()=>{
                    settick(index)
                  }}
                  >{tick === index && <Check className="w-5 h-5 font-bold" />}
                  </div>
            )
          })}
         </div>

         <hr className="my-4 border-border-100"/>

         <p className="text-grey my-2 text-4">Choose Size</p>

         <div className="flex flex-wrap gap-2 md:gap-4 ">
          {data.ProSize.map((size, index) => {
                  return (
                    <button
                    className={`h-10 md:h-12 w-19 md:w-22 rounded-[62px] my-2 bg-[#F0F0F0] text-sm md:text-base  transition cursor-pointer active:scale-95
                      ${click === index && 'bg-black text-white'}`}
                    key={index}
                     onClick={()=>{
                       setclick(index);
                      }}
                      >
                        { size }
                      </button>
                    
                  );
                })}
         </div>

          <hr className="my-4 border-border-100"/>

         <div className="flex gap-4 my-6 ">
            <div className="flex justify-around items-center h-11 md:h-13 w-28 md:w-43  bg-[#F0F0F0] rounded-[62px]">
              <button onClick={countDecrement} >
                <Minus className="w-4 md:w-6 h-4 md:h-6 cursor-pointer active:scale-80" />
              </button> 
              <h1 className="text-sm md:text-base">{count}</h1>
              <button onClick={countIncrement} >
                <Plus className="w-4 md:w-6 h-4 md:h-6 cursor-pointer active:scale-80 "/>
              </button>
            </div>
            
            <div className="h-11 md:h-13 w-60 md:w-100 bg-black rounded-[62px] text-white flex items-center justify-center cursor-pointer 
                            shadow-md hover:shadow-lg transition-all duration-400 active:scale-95 "
                          
                  >
              <button className="text-sm md:text-base">Add to Cart</button>
            </div>
          
         </div>

    </div>

  )
}
