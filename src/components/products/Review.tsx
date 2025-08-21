import { Ellipsis,} from 'lucide-react';
import Rating from './Rating';

interface review {
  name:string,
  description:string,
  date:string,
  rating:number
}

interface props{
  data:review
}

const Review:React.FC<props> = ({data}) => {
  

  return (
    
    <span className="inline-grid border-2 border-gray-400/15 w-[99%] h-54 sm:w-[49%] p-4 my-1 sm:my-1.5 rounded-xl">
        <div className="star_Section flex justify-between items-center">
            <h3  className=''>
            <Rating rating={data.rating} size={20} />
            </h3>
            <h1 className='font-light  text-2xl' 
            onClick={()=>{console.log("first")}}><Ellipsis size={24} color="#9a9898" strokeWidth={2} /></h1>
        </div>
        <div className="main py-1 ">
        <h1 className="font-bold text-base sm:text-xl">{data.name}✅</h1>
        <p className="text-sm sm:text-base text-[#00000099] font-light pt-2 wrap-break-word line-clamp-3 ">{data.description}</p>
        </div>
        <h2 className="text-sm sm:text-base text-[#00000099] h-fit  line-clamp-1">{data.date}</h2>
    </span>
  )
  
}

export default Review