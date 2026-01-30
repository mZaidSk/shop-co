import React, { useEffect, useRef, useState } from "react";

type input = {
    minimum: number
    maximum: number
}

const Doubleslider: React.FC<input> = ({ minimum, maximum }) => {
    const [min, setMin] = useState(minimum);
    const [max, setMax] = useState(maximum);
    const [left, setLeft] = useState(50);
    const [right, setRight] = useState(maximum - 200);
    const [active, setActive] = useState<"left" | "right" | null>(null);
    const [divWidth, setDivWidth] = useState(0)
    const Divref = useRef<HTMLDivElement>(null)
    const divide = divWidth / maximum;


    useEffect(() => {
        if (Divref.current) {
            setDivWidth(Divref.current.clientWidth)
        }

    }, [])


    const handleMove = (e: React.PointerEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (!active) return;

        const rect = e.currentTarget.getBoundingClientRect();

        let ClientX: number;

        if ("touches" in e) {
            ClientX = e.touches[0].clientX;
        } else {
            ClientX = e.clientX;
        }

        let x = ClientX - rect.left;

        x = Math.max(0, Math.min(x, rect.width));

        if (active === "left") {
            setLeft(Math.floor(Math.min(x)));
            setMin(Math.floor(Math.min(x) / divide))
        } else {
            setRight(Math.floor(Math.max(x)));
            setMax(Math.floor(Math.min(x) / divide))
        }
    };

    return (
        <div className="w-full h-full flex flex-col gap-2">
            <div
                ref={Divref}
                className={`w-full h-full relative`}
                onPointerMove={handleMove}
                onPointerUp={() => setActive(null)}
                onTouchMove={handleMove}
                onTouchCancel={() => setActive(null)}
            >
                {/* base line */}
                <div className="absolute top-1/2 -translate-y-1/2 w-full h-2 bg-gray-300 rounded" />

                {/* selected range */}
                <div
                    className="absolute top-1/2 -translate-y-1/2 h-2 bg-black rounded"
                    style={
                        left < right
                            ? {
                                left: left,
                                width: right - left,
                            }
                            : {
                                left: right,
                                width: left - right,
                            }
                    }
                />

                {/* left handle */}
                <span
                    onPointerDown={() => setActive("left")}
                    className={`absolute size-5 bg-black rounded-full cursor-grab active:cursor-grabbing -translate-x-1/2 -translate-y-1/2 top-1/2 
            ${active == 'left' ? ' hover:border-white border-2 bg-radial from-black to-white from-40%' : 'bg-black'}`}
                    style={{ left }}
                />

                {/* right handle */}
                <span
                    onPointerDown={() => setActive("right")}
                    className={`absolute size-5 bg-black rounded-full cursor-grab active:cursor-grabbing -translate-x-1/2 -translate-y-1/2 top-1/2 
            ${active == 'right' ? ' hover:border-white border-2 bg-radial from-black to-white from-40%' : 'bg-black'}`}
                    style={{ left: right }}
                />
            </div>
            <div className="flex justify-around items-center w-full">
                <h1>${left > right ? max : min}</h1>  <h1>${left < right ? max : min}</h1>
            </div>
        </div>
    );
};


export default Doubleslider