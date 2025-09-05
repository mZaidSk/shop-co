import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    maxVisiblePages?: number;
}

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    maxVisiblePages = 5
}) => {
    const generatePageNumbers = (): (number | string)[] => {
        const pages: (number | string)[] = [];
        const visiblePages = window.innerWidth < 640 ? 3 : maxVisiblePages;

        if (totalPages <= visiblePages + 2) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            const halfVisible = Math.floor(visiblePages / 2);
            let startPage = Math.max(1, currentPage - halfVisible);
            let endPage = Math.min(totalPages, currentPage + halfVisible);

            if (currentPage <= halfVisible) {
                endPage = visiblePages;
            }
            if (currentPage > totalPages - halfVisible) {
                startPage = totalPages - visiblePages + 1;
            }

            if (startPage > 1) {
                pages.push(1);
                if (startPage > 2) pages.push('...');
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) pages.push('...');
                pages.push(totalPages);
            }
        }
        return pages;
    };

    const handlePrevious = () => currentPage > 1 && onPageChange(currentPage - 1);
    const handleNext = () => currentPage < totalPages && onPageChange(currentPage + 1);
    const handlePageClick = (page: number | string) => typeof page === 'number' && onPageChange(page);

    return (
        <div className="flex items-center justify-center gap-1 pt-2 md:pt-3 lg:pt-4 pb-4 md:pb-6 lg:pb-8 ">
            {/* Previous Button */}
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`flex items-center px-2 py-1 text-xs sm:text-sm rounded ${currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                    } transition-colors`}
            >
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline ml-1">Prev</span>
            </button>

            {/* Page Numbers */}
            {generatePageNumbers().map((page, index) => (
                <button
                    key={index}
                    onClick={() => handlePageClick(page)}
                    disabled={page === '...'}
                    className={`px-2 py-1 text-xs sm:text-sm rounded min-w-[24px] sm:min-w-[32px] h-6 sm:h-8 ${page === currentPage
                        ? 'bg-gray-800 text-white'
                        : page === '...'
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-gray-700 hover:bg-gray-100'
                        } transition-colors`}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`flex items-center px-2 py-1 text-xs sm:text-sm rounded ${currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                    } transition-colors`}
            >
                <span className="hidden sm:inline mr-1">Next</span>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
        </div>
    );
};

// Compact Demo
const CompactPaginationDemo: React.FC = () => {
    const [currentPage, setCurrentPage] = React.useState(5);
    const totalPages = 20;

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center">
                Compact Responsive Pagination
            </h1>

            <div className="bg-white border rounded p-4 mb-4">
                <p className="text-sm mb-2 text-center">Page {currentPage} of {totalPages}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    {Array.from({ length: 4 }, (_, i) => (
                        <div key={i} className="bg-gray-50 p-2 rounded">
                            Item {(currentPage - 1) * 4 + i + 1}
                        </div>
                    ))}
                </div>
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                maxVisiblePages={5}
            />

            <div className="mt-4 text-xs text-gray-600 text-center">
                <p>📱 Mobile: Shows arrows only • 🖥️ Desktop: Shows "Prev/Next" text</p>
            </div>
        </div>
    );
};

export default CompactPaginationDemo;