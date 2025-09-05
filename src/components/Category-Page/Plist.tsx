import { useState } from "react";
import { Pagination } from "./Pagination";
import { products } from "./ProductData";
import { PartialStar } from "./PartialStar";
import Flist from "./Flist";
import HeaderSrction from "./Header";

interface SectionState {
    id: string; // unique id for each section (nested or not)
    open: boolean;
}

const Plist: React.FC = () => {
    // Initialize as empty array; we will populate when Flist renders
    const [sections, setSections] = useState<SectionState[]>([]);

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 20; // Increased to better show the last 3 pages feature

    const [showFilter, setShowFilter] = useState<boolean>(false);

    const categoriesData = [
        {
            name: "T-shirts",
            items: ["Round Neck", "V-neck", "Polo", "Graphic Tee"]
        },
        {
            name: "Shorts",
            items: ["Denim Shorts", "Cargo Shorts", "Gym Shorts"]
        },
        {
            name: "Shirts",
            items: ["Formal", "Casual", "Checkered"]
        },
        {
            name: "Hoodie",
            items: ["Pullover", "Zip-Up"]
        },
        {
            name: "Jeans",
            items: ["Slim Fit", "Regular", "Bootcut"]
        }
    ];

    // State initialized in Plist
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    const colors = ["#00C12B", "#F50606", "#F5DD06", "#F57906", "#06CAF5", "#063AF5", "#7D06F5", "#F506A4", "#FFFFFF", "#000000"];
    const [selectedColors, setSelectedColors] = useState<boolean[][]>([]);
    const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];
    const [SelectedSizes, setSelectedSizes] = useState<boolean[]>(Array(sizes.length).fill(false));
    const dressingStylesData = [
        {
            name: "Casual",
            items: ["T-Shirt", "Jeans", "Hoodie", "Sneakers", "Cap"]
        },
        {
            name: "Formal",
            items: ["Suit", "Blazer", "Shirt", "Trousers", "Tie", "Formal Shoes"]
        },
        {
            name: "Party",
            items: ["Party Dress", "Shiny Shirt", "Heels", "Jacket", "Accessories"]
        },
        {
            name: "Gym",
            items: ["Track Pants", "Tank Top", "Gym Shorts", "Sports Shoes", "Sweatband"]
        }
    ];

    return (
        <div className="flex flex-col md:flex-row w-full justify-center">

            {/* Desktop Filter Sidebar */}
            {showFilter && <div className="hidden md:block md:w-1/3 lg:w-1/4 bg-white">
                <Flist
                    sections={sections}
                    setSections={setSections}
                    categories={categoriesData}
                    selectedFilters={selectedFilters}
                    setSelectedFilters={setSelectedFilters}
                    colors={colors}
                    sizes={sizes}
                    dressingStyles={dressingStylesData}
                    SelectedSizes={SelectedSizes}
                    setSelectedSizes={setSelectedSizes}
                    selectedColors={selectedColors}
                    setSelectedColors={setSelectedColors} />
            </div>}

            {/* Plist Content */}
            <div
                className={`p-0 md:pt-4 md:pl-3 bg-white transition-all duration-300 ${showFilter ? "lg:w-2/3 lg:max-w-6xl" : "lg:w-auto lg:max-w-6xl"
                    }`}
            >

                {/* HeaderSection (separate component) */}
                <HeaderSrction
                    setShowFilter={setShowFilter}
                />

                {/* Mobile Filter */}
                {showFilter && (
                    <div className="md:hidden">
                        <Flist
                            sections={sections}
                            setSections={setSections}
                            categories={categoriesData}
                            selectedFilters={selectedFilters}
                            setSelectedFilters={setSelectedFilters}
                            colors={colors}
                            sizes={sizes}
                            dressingStyles={dressingStylesData}
                            SelectedSizes={SelectedSizes}
                            setSelectedSizes={setSelectedSizes}
                            selectedColors={selectedColors}
                            setSelectedColors={setSelectedColors} />
                    </div>
                )}

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 py-2 md:py-3 lg:py-4 gap-4 md:gap-6">
                    {products.map((item) => {
                        const priceBefore: number = Number(item.priceBeforeDis);
                        const discount: number = Number(item.disPercent);
                        const priceAfter: number = Number(Math.round(priceBefore - (priceBefore * discount / 100)));
                        const repeatStars: number = Number(Math.floor(item.rating));
                        const remainStarFill: number = Number((item.rating - repeatStars) * 100);
                        return (
                            <div key={item.id} className=" flex flex-col space-y-2 md:space-y-4 m-0 max-w-sm w-full" >
                                <img src={item.image} alt="item-image" className="w-full h-auto object-contain rounded-2xl" />
                                <div className="space-y-1 md:space-y-2">
                                    <h2 className="font-bold lg:text-xl md:text-base sm:text-sm text-xs">
                                        {item.title}</h2>
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center gap-1 sm:gap-2">
                                            {/* Stars */}
                                            {Array.from({ length: Math.min(repeatStars, 4) }).map((_, index) => (
                                                <PartialStar
                                                    key={index}
                                                    className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
                                                    fillAmount={100}
                                                />
                                            ))}

                                            {repeatStars >= 5 ? (
                                                <PartialStar className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" fillAmount={100} />
                                            ) : remainStarFill > 0 ? (
                                                <PartialStar className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" fillAmount={remainStarFill} />
                                            ) : null}

                                            {/* Rating text */}
                                            <span className="text-black text-sm sm:text-base md:text-base">{Math.min(item.rating, 5)}/<span className="text-black/60">5</span></span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 font-bold lg:text-2xl md:text-lg sm:text-base text-sm text-black ">
                                        {item.disPercent ? (
                                            // this parent class css can be remove if span/<> is used 
                                            // because of div the etra warping change the alignment centerof flex for the element inside 
                                            <div className="flex items-center md:gap-2 gap-1">
                                                <span>${priceAfter}</span>
                                                <span className="line-through text-gray-500" >
                                                    ${item.priceBeforeDis}
                                                </span>
                                                <span className="inline-flex items-center bg-[#FF3333]/10 text-[#FF3333] rounded-full lg:text-xs md:text-[10px] sm:text-[8px] text-[6px] px-1 sm:px-2 py-0.5 font-semibold">
                                                    -{item.disPercent}%
                                                </span>
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
                {/* <br /> */}
                {/* <Pagelist /> */}
                <div className="bg-white">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                        maxVisiblePages={5}
                    />
                </div>
            </div>
        </div>
    );
};

export default Plist;
