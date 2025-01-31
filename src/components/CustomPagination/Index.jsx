"use client"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react";


export const RenderPagination = () => {
    const [activePage, setActivePage] = useState(1); 

    const totalPages = 3;

    const handleNextPage = () => {
        if (activePage < totalPages) {
            setActivePage((prevPage) => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (activePage > 1) {
            setActivePage((prevPage) => prevPage - 1);
        }
    };

    const handlePageClick = (page) => {
        setActivePage(page);
    };

    return (
        <Pagination>
            <PaginationContent>
                {/* Previous Button */}
                <PaginationItem disabled={activePage === 1}>
                    <PaginationPrevious
                        onClick={handlePreviousPage}
                        disabled={activePage === 1} // Disable if on the first page
                    />
                </PaginationItem>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, index) => {
                    const pageNumber = index + 1;
                    return (
                        <PaginationItem key={pageNumber} isActive={pageNumber === activePage}>
                            <PaginationLink
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent default anchor behavior
                                    handlePageClick(pageNumber);
                                }}
                                isActive={pageNumber === activePage} // Highlight active page
                            >
                                {pageNumber}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}

                {/* Next Button */}
                <PaginationItem disabled={activePage === totalPages}>
                    <PaginationNext
                        onClick={handleNextPage}
                        disabled={activePage === totalPages} // Disable if on the last page
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};
