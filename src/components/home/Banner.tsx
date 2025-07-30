import React from "react";

interface BannerProps {
    title: string;
    subtitle?: string;
    imageUrl?: string;
    ctaText?: string;
    onCtaClick?: () => void;
}

const Banner: React.FC<BannerProps> = ({
    title,
    subtitle,
    imageUrl,
    ctaText,
    onCtaClick,
}) => (
    <div className="flex items-center justify-between bg-gray-100 p-8 rounded-xl shadow-md">
        <div>
            <h1 className="text-3xl font-bold text-gray-900 m-0">{title}</h1>
            {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
            {ctaText && (
                <button
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                    onClick={onCtaClick}
                >
                    {ctaText}
                </button>
            )}
        </div>
        {imageUrl && (
            <img
                src={imageUrl}
                alt="Banner"
                className="max-h-32 max-w-xs rounded-lg ml-8 object-cover"
            />
        )}
    </div>
);

export default Banner;
