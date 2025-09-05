import { ChevronDown, ChevronRight, Filter } from "lucide-react";
import BorderColors from "./BorderColors";
import PriceRangeSlider from "./PriceRangeSlider";
import CollapsibleSection from "./CollapsibleSection";
import { useEffect } from "react";

interface SectionState {
    id: string;
    open: boolean;
}

interface CategoryData {
    name: string;
    items: string[];
}

interface dressingStylesData {
    name: string;
    items: string[];
}


interface FlistProps {
    categories: CategoryData[];
    selectedFilters: string[];
    setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
    colors?: string[];
    sizes?: string[];
    dressingStyles?: dressingStylesData[];
    SelectedSizes?: boolean[];
    setSelectedSizes?: React.Dispatch<React.SetStateAction<boolean[]>>;
    selectedColors?: boolean[][];
    setSelectedColors?: React.Dispatch<React.SetStateAction<boolean[][]>>;
    sections: SectionState[];
    setSections: React.Dispatch<React.SetStateAction<SectionState[]>>;

}

const Flist: React.FC<FlistProps> = ({
    categories = [],
    selectedFilters,
    setSelectedFilters,
    colors = [],
    sizes = [],
    dressingStyles = [],
    SelectedSizes,
    setSelectedSizes,
    selectedColors,
    setSelectedColors,
    sections,
    setSections,
}) => {

    useEffect(() => {
        if (sections.length > 0) return; // don’t overwrite existing state

        const initial: SectionState[] = [
            { id: "Price", open: true },
            { id: "Colors", open: true },
            { id: "Size", open: true },
            { id: "Dress Style", open: true },
            ...categories.map(cat => ({ id: cat.name, open: false })),
            ...dressingStyles.map(style => ({ id: style.name, open: false })),
        ];

        setSections(initial);
    }, [categories, dressingStyles, sections, setSections]);

    // Check if section is open
    const isOpen = (id: string) => sections.find((s) => s.id === id)?.open ?? false;

    const toggleSection = (id: string) => {
        setSections(prev => {
            const exists = prev.find(s => s.id === id);
            if (exists) {
                // Toggle existing
                return prev.map(s => (s.id === id ? { ...s, open: !s.open } : s));
            } else {
                // Add dynamically (nested or newly rendered items)
                return [...prev, { id, open: true }];
            }
        });
    };

    const isSelected = (item: string) => selectedFilters.includes(item);

    const toggleFilter = (item: string) => {
        if (isSelected(item)) {
            setSelectedFilters(selectedFilters.filter(f => f !== item));
        } else {
            setSelectedFilters([...selectedFilters, item]);
        }
    };


    return (
        <div className=" w-full py-2 md:py-3 lg:py-4 md:pr-3 md:pt-4">
            <div className="w-full h-auto bg-white border border-[#0000001A] 
                rounded-[20px] p-3">

                <div className="flex justify-between items-center p-2 md:p-3 lg:p-4">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold">Filters</h1>
                    <Filter className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
                </div>

                <hr className="w-full mx-auto border-t border border-[#000000]/10 m-3" />

                <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 p-2 md:p-3 lg:p-4">
                    {categories.map((prevCategory) => (
                        <CollapsibleSection
                            key={prevCategory.name}
                            title={prevCategory.name}
                            open={isOpen(prevCategory.name)}
                            onToggle={() => toggleSection(prevCategory.name)}
                            dropDownIcon={ChevronRight}
                            classNameTitle="text-sm sm:text-base md:text-lg lg:text-xl text-[#00000080]"
                            wrapperClassName="flex flex-col"
                            rotationOpenClass="rotate-90"
                            rotationCloseClass="rotate-0"

                        >
                            {/* Example content, replace with what you want */}
                            <div className="flex flex-col gap-1 p-2 md:p-3 lg:p-4">
                                {prevCategory.items.map(item => (
                                    <button
                                        key={item}
                                        onClick={() => toggleFilter(item)}
                                        className={`px-2 py-1 rounded text-sm ${isSelected(item)
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                            }`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </CollapsibleSection>
                    ))}
                </div>

                <hr className="w-full mx-auto border-t border border-[#000000]/10 m-3" />

                <CollapsibleSection
                    wrapperClassName="flex flex-col gap-2 md:gap-3 lg:gap-4 p-2 md:p-3 lg:p-4"
                    title="Price"
                    // on={true}
                    open={isOpen("Price")}
                    onToggle={() => toggleSection("Price")}
                    dropDownIcon={ChevronDown}
                    classNameTitle="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold" >
                    <div className="flex flex-col justify-center items-center ">
                        <PriceRangeSlider />
                    </div>
                </CollapsibleSection>

                <hr className="w-full mx-auto border-t border border-[#000000]/10 m-3" />

                <CollapsibleSection
                    wrapperClassName="flex flex-col  gap-2 md:gap-3 lg:gap-4 p-2 md:p-3 lg:p-4"
                    title="Colors"
                    // on={true}
                    open={isOpen("Colors")}
                    onToggle={() => toggleSection("Colors")}
                    dropDownIcon={ChevronDown}
                    classNameTitle="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold" >
                    <div className="flex flex-wrap justify-between gap-4 ">
                        <BorderColors
                            inputs={colors}
                            borderDarkPercent={20}
                            borderWidthSize={2}
                            chunkSizeRowNumValue={5}
                            selectedColors={selectedColors}
                            setSelectedColors={setSelectedColors} // pass down the state
                        />
                    </div>
                </CollapsibleSection>

                <hr className="w-full mx-auto border-t border border-[#000000]/10 m-3" />

                <CollapsibleSection
                    wrapperClassName="flex flex-col  gap-2 md:gap-3 lg:gap-4 p-2 md:p-3 lg:p-4"
                    title="Size"
                    // on={true}
                    open={isOpen("Size")}
                    onToggle={() => toggleSection("Size")}
                    dropDownIcon={ChevronDown}
                    classNameTitle="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold">
                    <div className="flex flex-wrap gap-2 md:gap-1.5">
                        {sizes.map((sz, index) => (
                            <button
                                key={sz}
                                onClick={() => {
                                    if (!setSelectedSizes) return;
                                    setSelectedSizes(prev =>
                                        prev.map((val, idx) => idx === index ? !val : val)
                                    )
                                }}
                                className={`h-auto w-auto rounded-[62px] whitespace-nowrap
                                text-sm sm:text-base md:text-xs lg:xs xl:text-base 
                                px-2 sm:px-3 md:px-3 lg:px-3 py-1 sm:py-1.5 md:py-1.5 lg:py-1.5
                                 ${SelectedSizes?.[index] ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
                            >
                                {sz}
                            </button>
                        ))}
                    </div>
                </CollapsibleSection>

                <hr className="w-full mx-auto border-t border border-[#000000]/10 m-3" />

                <CollapsibleSection
                    wrapperClassName="flex flex-col gap-2 md:gap-3 lg:gap-4 p-2 md:p-3 lg:p-4"
                    title="Dress Style"
                    open={isOpen("Dress Style")}
                    onToggle={() => toggleSection("Dress Style")}
                    dropDownIcon={ChevronDown}
                    classNameTitle="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold" >
                    <div className="flex flex-col gap-4">
                        {dressingStyles.map((prevDressingStyles) => (
                            <CollapsibleSection
                                key={prevDressingStyles.name}
                                title={prevDressingStyles.name}
                                open={isOpen(prevDressingStyles.name)}
                                onToggle={() => toggleSection(prevDressingStyles.name)}
                                dropDownIcon={ChevronRight}
                                classNameTitle="text-sm sm:text-base md:text-lg lg:text-xl text-[#00000080]"
                                wrapperClassName="flex flex-col"
                                rotationOpenClass="rotate-90"
                                rotationCloseClass="rotate-0"

                            >
                                {/* Content inside the dropdown for each category */}
                                <div className="flex flex-col gap-1 p-2 md:p-3 lg:p-4">
                                    {prevDressingStyles.items.map(item => (
                                        <button
                                            key={item}
                                            onClick={() => toggleFilter(item)}
                                            className={`px-2 py-1 rounded text-sm ${isSelected(item)
                                                ? "bg-blue-500 text-white"
                                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                                }`}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </CollapsibleSection>
                        ))}
                    </div>
                </CollapsibleSection>

                <hr className="w-full mx-auto border-t border border-[#000000]/10 m-3" />

                <div className="flex justify-center items-center p-2 md:p-3 lg:p-4">
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
