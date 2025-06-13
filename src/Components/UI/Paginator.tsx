interface PaginatorProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  expanded: boolean; 
  setExpanded: (expanded: boolean) => void; 
}

const Paginator = ({ totalPages, currentPage, onPageChange, expanded, setExpanded }: PaginatorProps) => {
  if (totalPages === 0) return null;

  const visiblePages = expanded
    ? Array.from({ length: totalPages }, (_, i) => i + 1) 
    : totalPages <= 3
    ? Array.from({ length: totalPages }, (_, i) => i + 1) 
    : [1, 2, 3]; 

  const shouldShowEllipsis = totalPages > 3 && !expanded; 

  const handleEllipsisClick = () => {
    setExpanded(true); 
  };

  return (
    <div className="flex justify-start mt-2">
      <div className="flex gap-2">
        {visiblePages.map((page) => (
          <button
            key={page}
            aria-label={`Go to page ${page}`}
            onClick={() => onPageChange(page)}
            className={`w-7 h-7 flex items-center justify-center text-[13px] font-medium rounded-lg ${
              currentPage === page
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-[#EFEFEF] text-black dark:bg-primary-400 dark:text-grey-100"
            }`}
          >
            {page}
          </button>
        ))}

        {shouldShowEllipsis && (
          <button
            aria-label="Show more pages"
            onClick={handleEllipsisClick}
            className="w-7 h-7 flex items-center justify-center text-[13px] font-medium rounded-lg bg-[#EFEFEF] text-black dark:bg-primary-400 dark:text-grey-100"
          >
            ...
          </button>
        )}
      </div>
    </div>
  );
};

export default Paginator;