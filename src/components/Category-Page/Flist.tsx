import { ChevronRight, ChevronUp, Filter } from "lucide-react";
import BorderColors from "./BorderColors";
import { useState } from "react";
import PriceRangeSlider from "./PriceRangeSlider";


const Flist = () => {

    const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"]
    const colors = ["#00C12B", "#F50606", "#F5DD06", "#F57906", "#06CAF5", "#063AF5", "#7D06F5", "#F506A4", "#FFFFFF", "#000000"];
    const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];
    const dressingStyles = ["Casual", "Formal", "Party", "Gym"];
    const [selectedArr, setSelectedArr] = useState<boolean[]>(Array(sizes.length).fill(false));  // For Color Button

    return (
        <div className="w-full lg:w-1/4 p-4">
            <div className="w-full h-auto bg-white border border-[#0000001A] 
                rounded-[20px]">

                <div className="flex justify-between items-center p-2 md:p-2 lg:p-4">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold">Filters</h1>
                    <Filter className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
                </div>

                <hr className="w-full mx-auto border-t border border-[#000000]/10 m-3" />

                <div className="flex flex-col gap-2 md:gap-2 lg:gap-4 p-2 md:p-2 lg:p-4">
                    {categories.map((prevCategories) => (
                        <div key={prevCategories} className="flex justify-between items-center">
                            <span className="text-sm sm:text-base md:text-base lg:text-base xl:text-base text-[#00000080]">{prevCategories}</span>
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" strokeWidth={2} />
                        </div>
                    ))}
                </div>

                <hr className="w-full mx-auto border-t border border-[#000000]/10 m-3" />

                <div className="flex flex-col gap-2 md:gap-2 lg:gap-4 p-2 md:p-2 lg:p-4">
                    <div className="flex justify-between items-center ">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold">Price</h1>
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" strokeWidth={2} />
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <PriceRangeSlider />
                    </div>
                </div>

                <hr className="w-full mx-auto border-t border border-[#000000]/10 m-3" />

                <div className="flex flex-col  gap-2 md:gap-2 lg:gap-4 p-2 md:p-2 lg:p-4">
                    <div className="flex justify-between items-center ">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold">Colors</h1>
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" strokeWidth={2} />
                    </div>
                    <div className="flex flex-wrap justify-between gap-4 ">
                        <BorderColors
                            inputs={colors}
                            borderDarkPercent={20}
                            borderWidthSize={2}
                            chunkSizeRowNumValue={5}
                        />
                    </div>
                </div>

                <hr className="w-full mx-auto border-t border border-[#000000]/10 m-3" />

                <div className="flex flex-col  gap-2 md:gap-2 lg:gap-4 p-2 md:p-2 lg:p-4">
                    <div className="flex justify-between items-center ">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold">Size</h1>
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" strokeWidth={2} />
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-1.5">
                        {sizes.map((sz, index) => (
                            <button
                                key={sz}
                                onClick={() => {
                                    setSelectedArr(prev =>
                                        prev.map((val, idx) => idx === index ? !val : val)
                                    )
                                }}
                                className={`h-auto w-auto rounded-[62px] whitespace-nowrap
                                text-sm sm:text-base md:text-xs lg:xs xl:text-base 
                                px-2 sm:px-3 md:px-3 lg:px-3 py-1 sm:py-1.5 md:py-1.5 lg:py-1.5
                                ${selectedArr[index] ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
                            >
                                {sz}
                            </button>
                        ))}
                    </div>
                </div>

                <hr className="w-full mx-auto border-t border border-[#000000]/10 m-3" />

                <div className="flex flex-col gap-2 md:gap-2 lg:gap-4 p-2 md:p-2 lg:p-4">
                    <div className="flex justify-between items-center ">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold">Dress Style</h1>
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" strokeWidth={2} />
                    </div>
                    <div className="flex flex-col gap-4">
                        {dressingStyles.map((prevStyles) => (
                            <div key={prevStyles} className="flex justify-between items-center">
                                <span className="text-sm sm:text-base md:text-base lg:text-base xl:text-base text-[#00000080]">{prevStyles}</span>
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" strokeWidth={2} />
                            </div>
                        ))}
                    </div>
                </div>

                <hr className="w-full mx-auto border-t border border-[#000000]/10 m-3" />

                <div className="flex justify-center items-center p-2 md:p-2 lg:p-4">
                    <button className="text-lg sm:text-xl md:text-2xl 
                py-2 px-6 sm:py-2.5 sm:px-7 md:py-3 md:px-8 lg:py-3 lg:px-6 
                font-bold text-white bg-black rounded-[62px]"
                    >
                        Apply Filter
                    </button>
                </div>
            </div >
        </div >
    );
};

export default Flist;
