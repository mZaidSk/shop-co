

// import Flist from "./Flist";
import { useState } from "react";
import Flist from "./Flist";
import Plist from "./Plist";
import Position from "./Position";

const Alist = () => {
    const [onShow, setOnShow] = useState(true);
    const handleToggle = () => {
        setOnShow((prev) => !prev);
    };
    
    return (
        <div className="flex flex-col bg-white w-full">
            <Position />
            <div className="flex flex-col lg:flex-row w-full">
                {onShow && <Flist />}
                <Plist onToggle={handleToggle} />
            </div>
        </div>

    );
};

export default Alist;
