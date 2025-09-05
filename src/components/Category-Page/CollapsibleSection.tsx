
import React from "react";

interface CollapsibleSectionProps {
    title: string;
    classNameTitle?: string;
    children: React.ReactNode;
    open: boolean;
    onToggle: () => void;
    dropDownIcon?: React.FC<React.SVGProps<SVGSVGElement>>; // the icon component
    iconClassName?: string; // base class for icon
    rotationOpenClass?: string; // class applied when open
    rotationCloseClass?: string; // class applied when closed
    defaultOpen?: boolean;
    defaultClose?: boolean;
    wrapperClassName?: string;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
    title,
    classNameTitle,
    children,
    open,
    onToggle,
    dropDownIcon: Icon,
    iconClassName = "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8",
    rotationOpenClass = "-rotate-180",
    rotationCloseClass = "rotate-0",
    wrapperClassName = "flex flex-col gap-2 p-2",
}) => {

    return (
        <div className={wrapperClassName}>
            {/* Header */}
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={onToggle}
            >
                <h1 className={classNameTitle}>{title}</h1>
                {Icon && (
                    <Icon
                        className={`${iconClassName} transition-transform ${open ? rotationOpenClass : rotationCloseClass
                            }`}
                    />
                )}
            </div>

            {/* Content */}
            {open && <div>{children}</div>}
        </div>
    );
};

export default CollapsibleSection;
