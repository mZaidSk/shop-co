import Plist from "./Plist";
import Position from "./Position";

const Alist = () => {

    return (
        <div className="flex flex-col bg-white w-full">
            <Position />
            <div className="flex flex-col md:flex-row w-full">
                <Plist />
            </div>
        </div>
    );
};

export default Alist;
