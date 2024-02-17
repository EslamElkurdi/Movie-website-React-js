import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    
    const pageNumbers = [];
    const maxVisiblePages = 5;

    // Calculate start and end page numbers
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust start and end pages to avoid overflow
    if (endPage - startPage + 1 < maxVisiblePages) {
        if (startPage > 1) {
            startPage = Math.max(1, startPage - (maxVisiblePages - (endPage - startPage + 1)));
        } else {
            endPage = Math.min(totalPages, endPage + (maxVisiblePages - (endPage - startPage + 1)));
        }
    }

    // Create page numbers array
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav aria-label='Page navigation'>
            <MDBPagination className='mb-0'>
                <MDBPaginationItem disabled={currentPage === 1}>
                    <MDBPaginationLink
                        
                        aria-label='Previous Page'
                        onClick={() => onPageChange(currentPage - 1)}
                    >
                        <span aria-hidden='true'>«</span>
                    </MDBPaginationLink>
                </MDBPaginationItem>
                {pageNumbers.map((pageNumber) => (
                    <MDBPaginationItem key={pageNumber} active={pageNumber === currentPage}>
                        <MDBPaginationLink
                            
                            onClick={() => onPageChange(pageNumber)}
                            aria-label={`Page ${pageNumber}`}
                        >
                            {pageNumber}
                        </MDBPaginationLink>
                    </MDBPaginationItem>
                ))}
                <MDBPaginationItem >
                    <MDBPaginationLink
                        href='#'
                        aria-label='Next Page'
                        onClick={() => onPageChange(currentPage + 1)}
                    >
                        <span aria-hidden='true'>»</span>
                    </MDBPaginationLink>
                </MDBPaginationItem>
            </MDBPagination>
        </nav>
    );
}
