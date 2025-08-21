import { ChevronDown } from "lucide-react";
import FilterIconList from "./SideBar";

type HeaderSectionProps = {
    onToggle: () => void;
};

const HeaderSrction = ({ onToggle }: HeaderSectionProps) => {

    return (
        <div className="flex flex-col sm:flex-row justify-between sm:items-center m-2 gap-3">
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
                {<div className="flex items-center lg:hidden " >
                    <FilterIconList onToggle={onToggle} className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </div>}
            </div>
        </div>
    );
};
export default HeaderSrction;
