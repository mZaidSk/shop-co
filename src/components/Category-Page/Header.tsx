import { ChevronDown } from "lucide-react";
import { Sliders } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

interface HeaderSectionProps {
    setShowFilter: Dispatch<SetStateAction<boolean>>;
}

const HeaderSrction: React.FC<HeaderSectionProps> = ({ setShowFilter }) => {

    return (
        <div className="flex flex-col lg:flex-row justify-between lg:items-center m-0 py-2 md:py-3 lg:py-4 gap-3">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                Casual
            </div>
            <div className="flex justify-between">
                <div className="flex items-start sm:items-center sm:flex-row flex-col gap-3">
                    <div className="text-xs sm:text-sm lg:text-base text-[#00000080]">
                        Showing 1-10 of 100 Products
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <span className="text-xs sm:text-sm lg:text-base text-[#00000080]">
                            Sort by:
                        </span>
                        <span className="text-xs sm:text-sm lg:text-base font-medium">
                            Most Popular
                        </span>
                        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                    </div>
                </div>
                {<div className="flex items-center " >
                    <Sliders className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                        onClick={() => setShowFilter(prev => !prev)} />
                </div>}
            </div>
        </div>
    );
};
export default HeaderSrction;
