import React from 'react'

const Pagination = ({currentPage,totalPages,onPageChange}) => {
    const handlePageChange=(page)=>{
        onPageChange(page)
    }
  return (
    <div className='pagination flex justify-center my-4'>
        {[...Array(totalPages)].map((_,index)=>(
            <button key={index}
            onClick={()=>handlePageChange(index+1)}
            className={`mx-1 px-3 py-1 rounded ${currentPage===index+1 ? "bg-blue-500 text-white":"bg-gray-300"}`}>
                {index+1}

            </button>
        ))}
      
    </div>
  )
}

export default Pagination
