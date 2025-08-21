import { SlidersHorizontal } from "lucide-react";


interface FilterIconListProps {
    className?: string;
}

type FilterIconProps = {
    onToggle: () => void;
};

const FilterIconList: React.FC<FilterIconListProps & FilterIconProps> = ({ className = "", onToggle }) => {

    return (
        <div className={`relative flex items-center justify-center cursor-pointer hover:text-blue-500 ${className}`}>
            <SlidersHorizontal
                onClick={onToggle}// toggle on click
                className="w-6 h-6"
            />
        </div>
    );
};

export default FilterIconList;
