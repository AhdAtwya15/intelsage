interface Iprops {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
  }
  
  const Paginator = ({totalPages,currentPage,onPageChange,}:Iprops) => {
    return (
      <div className="flex justify-start mt-4">
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-10 h-8 flex items-center justify-center text-sm font-medium rounded-lg  ${
                currentPage === page
                  ? "bg-black text-white dark:bg-[#FFFFFF] dark:text-black"
                  : "bg-[#EFEFEF] text-black dark:bg-primary-400 dark:text-grey-100"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default Paginator;