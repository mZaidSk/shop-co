import { useState } from "react";
import { Pagination } from "./Pagination";
import { products } from "./ProductData";
import { PartialStar } from "./PartialStar";
import HeaderSrction from "./Header";

type PlistProps = {
    onToggle: () => void; // 👈 parent callback type
};

const Plist = ({ onToggle }: PlistProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 20; // Increased to better show the last 3 pages feature


    return (
        <div className="w-full lg:w-3/4 p-4">
            <div className="w-full bg-white">
                <HeaderSrction onToggle={onToggle} />
                <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
                    {products.map((item) => {
                        const priceBefore: number = Number(item.priceBeforeDis);
                        const discount: number = Number(item.disPercent);
                        const priceAfter: number = Number(Math.round(priceBefore - (priceBefore * discount / 100)));
                        const repeatStars: number = Number(Math.floor(item.rating));
                        const remainStarFill: number = Number((item.rating - repeatStars) * 100);
                        return (
                            <div key={item.id} className=" flex flex-col space-y-4 m-2" >
                                <img src={item.image} alt="item-image" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain rounded-2xl" />
                                <div className="space-y-2">
                                    <h2 className="font-bold lg:text-2xl md:text-base sm:text-xl text-xs">
                                        {item.title}</h2>
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center gap-1 sm:gap-2">
                                            {/* Stars */}
                                            {Array.from({ length: Math.min(repeatStars, 4) }).map((_, index) => (
                                                <PartialStar
                                                    key={index}
                                                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                                                    fillAmount={100}
                                                />
                                            ))}

                                            {repeatStars >= 5 ? (
                                                <PartialStar className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fillAmount={100} />
                                            ) : remainStarFill > 0 ? (
                                                <PartialStar className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fillAmount={remainStarFill} />
                                            ) : null}

                                            {/* Rating text */}
                                            <span className="text-black text-xs sm:text-sm md:text-base">{Math.min(item.rating, 5)}/<span className="text-black/60">5</span></span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 font-bold lg:text-2xl md:text-base sm:text-lg text-[10px] text-black ">
                                        {item.disPercent ? (
                                            // this parent class css can be remove if span/<> is used 
                                            // because of div the etra warping change the alignment centerof flex for the element inside 
                                            <div className="flex items-center md:gap-2 gap-1.5">
                                                <span>${priceAfter}</span>
                                                <span className="line-through text-gray-500" >${item.priceBeforeDis}</span>
                                                <span className="bg-[#FF3333]/10 text-[#FF3333] rounded-full md:px-2.5 px-2 py-1">-{item.disPercent}%</span>
                                            </div>
                                        ) : (
                                            <span>${item.priceBeforeDis}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <hr className="w-full mx-auto border-t border border-[#000000]/10" />
                <br />
                {/* <Pagelist /> */}
                <div className="bg-white">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                        maxVisiblePages={5}
                    />
                </div>
            </div >
        </div>
    );
};

export default Plist;
