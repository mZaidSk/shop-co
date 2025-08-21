import { Check } from "lucide-react";
import React, { useState } from "react";

interface BorderColorsProps {
    inputs: (string | number[])[];
    borderDarkPercent: number;
    opacityPercentbg?: number;
    opacityPercentb?: number;
    borderWidthSize: number;
    chunkSizeRowNumValue: number;
}

const BorderColors: React.FC<BorderColorsProps> = ({
    inputs,
    borderDarkPercent,
    opacityPercentbg,
    opacityPercentb = 100 /* Default Vaule : Method 1 for setting Default value */,
    borderWidthSize,
    chunkSizeRowNumValue
}) => {

    const convertNamed = (name: string): [number, number, number] => {
        let temp = document.createElement("div");
        temp.style.color = name;
        document.body.appendChild(temp);

        let rgb = window.getComputedStyle(temp).color; // e.g. "rgb(255, 0, 0)"
        document.body.removeChild(temp);

        const match = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);

        if (match) {
            return [
                parseInt(match[1], 10),
                parseInt(match[2], 10),
                parseInt(match[3], 10),
            ];
        }

        // fallback to black if no match
        return [0, 0, 0];
    };

    const convertHex = (hex: string): [number, number, number] => {
        const cleanHex = hex.startsWith("#") ? hex.slice(1) : hex;
        const chars = Array.from(cleanHex.toUpperCase());

        const hexCharToNumber = (e: string) => {
            if (e >= "0" && e <= "9") {
                return parseInt(e, 10);
            }

            switch (e) {
                case "A":
                    return 10;
                case "B":
                    return 11;
                case "C":
                    return 12;
                case "D":
                    return 13;
                case "E":
                    return 14;
                case "F":
                    return 15;
                default:
                    return 0;
            }
        };

        const nAry = chars.map(hexCharToNumber);

        const r = nAry[0] * 16 + nAry[1];
        const g = nAry[2] * 16 + nAry[3];
        const b = nAry[4] * 16 + nAry[5];

        return [r, g, b];
    };

    const convertRgb = (rgb: number[]): [number, number, number] => {
        return [rgb[0], rgb[1], rgb[2]];
    };

    function processColors(
        inputArray: (string | number[])[],
        converters: {
            convertNamed: (name: string) => [number, number, number];
            convertHex: (hex: string) => [number, number, number];
            convertRgb: (rgb: number[]) => [number, number, number];
        }
    ): ([number, number, number] | null)[] {
        return inputArray.map((item) => {
            if (typeof item === "string") {
                if (item.startsWith("#")) {
                    return converters.convertHex(item);
                } else {
                    return converters.convertNamed(item);
                }
            } else if (Array.isArray(item)) {
                return converters.convertRgb(item);
            } else {
                return null;
            }
        });
    }

    const output = processColors(inputs, { convertNamed, convertHex, convertRgb });

    const chunkSize = chunkSizeRowNumValue;
    const totalRows = Math.ceil(output.length / chunkSize);
    const outputInRow = Array.from(
        { length: totalRows },
        (_, i) => output.slice(i * chunkSize, i * chunkSize + chunkSize)
    );
    const clampedBorderDark = Math.max(1, Math.min(borderDarkPercent, 100)); // Clamp 1–100
    const bD = 1 - clampedBorderDark / 100;
    const clampedOpacitybg = Math.max(1, Math.min((opacityPercentbg ?? 100), 100)); // Clamp 1–100  /*(opacityPercentbg ?? 100) → if value is null/undefined, use default 100; otherwise use given value : Method 2 for setting Default value */
    const abg = clampedOpacitybg / 100;
    const clampedOpacityb = Math.max(1, Math.min(opacityPercentb, 100)); // Clamp 1–100
    const ab = clampedOpacityb / 100;

    const [selectedColors, setSelectedColors] = useState<boolean[][]>(
        Array.from({ length: totalRows }, (_, rowIndex) =>
            Array.from({ length: outputInRow[rowIndex]?.length || 0 }, () => false)
        )
    );
    // 2-D Array is Made cuz the Data is rendering in [[],[],[]] to able to access inside the array

    const handleColorIconClick = (rowPosition: number, colPosition: number) => {
        setSelectedColors(prevGrid => {
            const newGrid = prevGrid.map(row => [...row]);
            newGrid[rowPosition][colPosition] = !newGrid[rowPosition][colPosition];
            return newGrid;
        });
    };

    return (
        <div className="flex flex-col gap-2">
            {outputInRow.map((rowColors, rowPosition) => (
                <div key={rowPosition} className="flex flex-row gap-2 lg:gap-2 xl:gap-4">
                    {rowColors.map((rgb, colPosition) => {
                        if (!rgb) return null;
                        const [r, g, b] = rgb;
                        const bgColor = `rgba(${r}, ${g}, ${b}, ${abg})`;
                        const borderColor = `rgba(${Math.round(r * bD)}, ${Math.round(g * bD)}, ${Math.round(b * bD)}, ${ab})`;
                        const borderWidth = `${borderWidthSize}px`

                        return (
                            <button
                                key={colPosition}
                                style={{
                                    backgroundColor: bgColor,
                                    borderColor: borderColor === "rgba(0, 0, 0, 1)" ? "rgba(102,102,102,1)" : borderColor,
                                    borderWidth: borderWidth,
                                    borderStyle: "solid"
                                }}
                                className="w-7 h-7 sm:w-6 sm:h-6 md:w-4 md:h-4 lg:w-7 lg:h-7  rounded-full border hover:scale-110 transition flex items-center justify-center"
                                onClick={() => handleColorIconClick(rowPosition, colPosition)}
                            >
                                {selectedColors[rowPosition][colPosition] && (
                                    <Check
                                        size={16}
                                        strokeWidth={3}
                                        style={{
                                            color: borderColor === "rgba(0, 0, 0, 1)" ? "rgba(102,102,102,1)" : borderColor
                                        }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default BorderColors;
