import { Star } from "lucide-react";

export interface StarFillProps {
    fillAmount: number;
    size?: number;
    className?: string;
};

export const PartialStar = ({ fillAmount, size, className }: StarFillProps) => {
    const clampedFill = Math.max(0, Math.min(fillAmount, 100));

    const wrapperStyle = size && !className ? { width: size, height: size } : undefined;

    return (
        <div className={`relative ${className ?? ""}`} style={wrapperStyle}>
            <div
                className="absolute top-0 left-0 overflow-hidden"
                style={{ width: `${clampedFill}%` }}
            >
                <Star
                    className={`text-yellow-500 stroke-yellow-500 ${className ?? ""}`}
                    size={size && !className ? size : undefined}
                    fill="currentColor"
                />
            </div>
        </div>
    );
};
