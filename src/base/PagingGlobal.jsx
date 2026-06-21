import React from 'react'

export default function PagingGlobal({ OnPageChange, pagingData, text = "Entries", children, loading = false }) {
    const handleNext = () => {
        if (pagingData.hasNextPage)
            OnPageChange(parseInt(pagingData.pageNumber) + 1)
    }
    const handlePre = () => {
        if (pagingData.hasPreviousPage)
            OnPageChange(parseInt(pagingData.pageNumber) - 1)
    }
    return (
        <div>
            {/* {pagingData &&
                <div className='h-12 w-full '>
                    <div class="p-2 flex flex-col items-center justify-between">
                        <span class="text-xs text-gray-700">

                        </span>
                        <div class="inline-flex xs:mt-0">
                            <button value={parseInt(pagingData.pageNumber) - 1} onClick={OnPageChange} disabled={loading || pagingData.isFirstPage} class={pagingData.isFirstPage ? "cursor-not-allowed flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-sky-300 rounded-s " : "flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-sky-400 rounded-s hover:bg-sky-500"}>
                                <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                                </svg>
                                Prev
                            </button>
                            <button value={parseInt(pagingData.pageNumber) + 1} onClick={OnPageChange} disabled={loading || pagingData.isLastPage} class={pagingData.isLastPage ? "cursor-not-allowed flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-sky-300 border-0 border-s border-sky-700 rounded-e" : "flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-sky-400 border-0 border-s border-sky-700 rounded-e hover:bg-sky-500"}>
                                Next
                                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            } */}
            {children}
            {pagingData &&
                <div className='w-full text-center'>
                    <div class="p-2 flex flex-col items-center justify-between gap-2">
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-gray-700">

                            </span>
                            <div class="inline-flex xs:mt-0">
                                <button onClick={handlePre} disabled={loading || pagingData.isFirstPage} class={pagingData.isFirstPage ? "cursor-not-allowed flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-sky-300 rounded-s" : "flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-sky-400 rounded-s hover:bg-sky-500 cursor-pointer"}>
                                    <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                                    </svg>
                                    Prev
                                </button>
                                <button onClick={handleNext} disabled={loading || pagingData.isLastPage} class={pagingData.isLastPage ? "cursor-not-allowed flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-sky-300 border-0 border-s border-sky-700 rounded-e" : "flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-sky-400 border-0 border-s border-sky-700 rounded-e hover:bg-sky-500 cursor-pointer"}>
                                    Next
                                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <span class="text-xs text-gray-700">
                            {pagingData &&
                                <>Showing <span class="font-semibold text-gray-900">{pagingData.firstItemOnPage}</span> to <span class="font-semibold text-gray-900">{pagingData.lastItemOnPage}</span> of <span class="font-semibold text-gray-900">{pagingData.totalItemCount}</span> {text} <span class="font-semibold text-gray-900">(Page {pagingData.pageNumber} of {pagingData.pageCount})</span></>
                            }
                        </span>
                    </div>

                </div>
            }
        </div>
    )
}
