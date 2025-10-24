import { SlidersHorizontal } from "lucide-react"
import  { useState } from "react"
import Review from "./Review"

interface reviews {
  name:string,
  description:string,
  date:string,
  rating:number
}


const ReviewTab = () => {

      let  ReviewData: reviews[] = [
  {
  name: "Samantha D.",
  description:"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
  date:"Posted on August 14, 2023",
  rating: 4.5
  },
  {
  name: "Alex M.",
  description:"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.'",
  date:"Posted on August 15, 2023",
  rating: 4
  },
  {
  name: "Ethan R",
  description:"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
  date:"Posted on August 16, 2023",
  rating: 3
  },
  {
  name: "Olivia P.",
  description:"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
  date:"Posted on August 17, 2023",
  rating: 5
  },
  {
  name: "Liam K.",
  description:"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
  date:"Posted on August 18, 2023",
  rating: 2
  },
  {
  name: "Ava H.",
  description:"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
  date:"Posted on August 19, 2023",
  rating: 1
  }
  ]

  const [comment, setcomment] = useState(ReviewData)
  const [number_review, setnumber_review] = useState(ReviewData.length)

  return (
    <div className="w-fit">
        <div className="w-[98%] sm:w-full flex justify-between gap-4 items-center my-6">
            <div className="flex items-baseline gap-2">
                <h1 className="text-lg sm:text-2xl font-bold">All Reviews</h1>
                <h4 className="text-sm sm:text-base font-normal">({number_review})</h4>
            </div>
            <div className="flex justify-around items-center gap-2">
                <div className="w-8 h-8 sm:h-12 sm:w-12  bg-[#F0F0F0] rounded-[62px] text-white flex items-center justify-center rotate-90">
                <h1><SlidersHorizontal color="black"/></h1>
                </div>
                <div className="sm:flex justify-center hidden h-12 w-30 border-2 border-[#F0F0F0] rounded-[62px] bg-[#F0F0F0]  ">
                    <select  name="latest" id="cars">
                    <option value="Latest">Latest</option>
                    <option value="Top">Top</option>
                    <option value="Down">Down</option>
                    </select>
                </div>
                <div className="w-29 h-10 sm:h-12 sm:w-42 bg-black rounded-[62px] text-white flex items-center justify-center">
                <h1 className="text-base sm:text-lg">Review</h1>
                </div>
            </div>
        </div>
        <div className="flex flex-wrap items-center justify-around  gap-1.5 h-fit">
         {comment.map((review, index) => (
                <Review key={index} data={review} />
        ))}

        </div>
        <div className=" flex items-center justify-center my-6 ">
                <button className="h-12 w-42 border-2 border-[#0000001A] rounded-[62px] active:scale-95" 
                onClick={()=>{
                    setcomment([...comment, {
                                        name: "Samantha D.",
                                        description:"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
                                        date:"Posted on August 14, 2023",
                                        rating: 4.5
                                        }]);
                    setnumber_review(comment.length+1)
                }}>
                Load More Reviews
                </button>
        </div>
    </div>
  )
}

export default ReviewTab