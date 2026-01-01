import { useEffect, useState } from "react"
import SideBar from "./SideBar"
import { useMediaQuery } from "react-responsive"
import { SlidersVertical, X } from "lucide-react"
import  { ProductCard, type CardData  } from "../products/Recommendation"
import { Pagination } from "../Category-Page/Pagination"


const Body = () => { 
 
    const isMobile = useMediaQuery({query : "(max-width: 768px)" })
    const [open, setopen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
    if (isMobile){
        setopen(true)
    }else{
        setopen(false)
    }
    }, [isMobile])

    const cards: CardData[] = [
      {
        name: "Polo with Contrast Trims",
        price: 212,
        image: "../src/assets/images/products_img/card1.png",
        rating: 4.5
      },
      {
        name: "Gradient Graphic T-shirt",
        price: 145,
        image: "../src/assets/images/products_img/card2.png",
        rating: 4.2
      },
      {
        name: "Polo with Tipping Details",
        price: 180,
        image: "../src/assets/images/products_img/card3.png",
        rating: 4.7
      },
      {
        name: "Black Striped T-shirt",
        price: 140,
        image: "../src/assets/images/products_img/card4.png",
        rating: 4.3
      },
      {
         name: "Polo with Contrast Trims",
        price: 212,
        image: "../src/assets/images/products_img/card1.png",
        rating: 4.5
      },
      {
        name: "Polo with Contrast Trims",
        price: 212,
        image: "../src/assets/images/products_img/card1.png",
        rating: 4.5
      },
      {
        name: "Gradient Graphic T-shirt",
        price: 145,
        image: "../src/assets/images/products_img/card2.png",
        rating: 4.2
      },
      {
        name: "Polo with Tipping Details",
        price: 180,
        image: "../src/assets/images/products_img/card3.png",
        rating: 4.7
      },
      {
        name: "Black Striped T-shirt",
        price: 140,
        image: "../src/assets/images/products_img/card4.png",
        rating: 4.3
      }
    ]
    

    return (
        <div className="flex items-start  gap-3 h-fit md:m-auto md:w-[90%] md:mb-8">
            <div className={`md:flex-1/4 bg-white border border-border-100 rounded-2xl md:overflow-auto overflow-x-scroll w-full md:h-fit h-full  md:w-[90%] mb-8 md:static fixed top-30  transform transition-transform ease-in-out duration-1000 
                ${open ? "translate-y-400" : "-translate-y-0 block"} md:translate-y-0 p-4  `}>
                <nav className="w-full h-fit flex justify-between items-center ">
                    <h1 className="text-xl font-medium">Filters</h1>
                    {isMobile ?
                    <button onClick={()=>{setopen(!open)}}>
                        <X/>
                    </button> : <button className="text-icon">
                        <SlidersVertical/>
                    </button>}
                </nav>
                <hr  className="text-border-100  my-3"/>
                <div className="pb-10">
                    <SideBar/>
                </div>
            </div>
            
            <div className="h-fit  m-auto w-[90%] mb-8">
                <div className="flex flex-col justify-center  h-fit p-2 ">
                    <header className="flex justify-between items-end md:text-base text-xs cursor-default">
                        <h1 className="md:text-5xl text-3xl font-medium">Casual</h1>
                        <div className="flex justify-around items-baseline gap-4 text-grey">
                            <p className="">Showing 1-10 of 100 Products</p>
                            {!isMobile &&   <div>
                                <label htmlFor="sort">Sort by: </label>
                                <select name="" id="sort" className="text-black font-medium cursor-pointer" >
                                    <option value="popular">Most Popular</option>
                                    <option value="Recent">Recent</option>
                                    <option value="Trendy">Trendy</option>

                                </select>
                            </div> }
                            {isMobile && <button
                            className="size-9 bg-border-100  rounded-full flex justify-center items-center text-black active:scale-90" 
                            onClick={()=>{setopen(!open)}}>
                                <SlidersVertical size={20} />
                            </button>}
                        </div>
                    </header>
                    <main className="grid md:grid-cols-3 grid-cols-2 gap-x-2  gap-y-6 py-6">
                         {cards.map((card, index) => (
                            <div key={index} className="flex " > 
                                <ProductCard data={card} size= 'small' />
                            </div>
                        ))}
                    </main>
                    <hr  className="text-border-100 my-3 w-100px"/>
                    <footer>
                        <Pagination 
                        currentPage={currentPage} 
                        totalPages={20} 
                        onPageChange={setCurrentPage}
                        maxVisiblePages={3}/>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Body