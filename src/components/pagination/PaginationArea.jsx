import React from "react";

const PaginationArea = ({ pageNumber, paginate, currentPage, next, prev }) => {
    console.log( pageNumber);
    
  return (
    <>
      <nav className="py-3" aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm">
          <li onClick={prev} >
            <a
               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-[#7E33E0] hover:text-[white] dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white duration-300 ease-in-out"
            >
              Previous
            </a>
          </li>

          { pageNumber.map((item,i)=>(
          <div className="px-1">
                   <li  className={currentPage == i + 1 ? "flex items-center justify-center px-3 h-8 leading-tight text-[#fff] border border-gray-300 bg-[#FB2E86] cursor-pointer " : "flex items-center justify-center px-3 h-8 leading-tight text- bg-white border border-gray-300  cursor-pointer hover:bg-[#7E33E0] duration-300 ease-in-out hover:text-[white] " } onClick={()=>paginate(item)}>
            
            {item + 1}
          
         </li> 
          </div>
          ))}

       
         
          <li onClick={next} >
            <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-[#7E33E0] hover:text-[white] dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white duration-300 ease-in-out"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
     
    </>
  );
};

export default PaginationArea;
