
import { ChevronRight } from "lucide-react";
const Position = () => {

    return (
        <div className="py-2 gap-4">
            <hr className="border-t border-[#000000]/10 m-3" />
            <div className="flex flex-row sm:items-center p-4 gap-2">
                <div className="flex items-center text-sm sm:text-base text-[#00000080] gap-1">
                    <h1>Home</h1>
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-sm sm:text-base">Casual</div>
            </div>
        </div>
    );
};
export default Position;
