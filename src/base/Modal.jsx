// import React from 'react'

// export default function Modal({ isOpen, setIsOpen, title, children }) {
//     const changeIsOpen = () => {
//         setIsOpen(!isOpen)
//     }
//     return (
//         <>
//             <div id={Date.now()} className={isOpen ? "fixed top-0 left-0 right-0 z-[60] items-start justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex" : "hidden fixed top-0 left-0 right-0 z-[60] items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"}>
//                 <div className="relative w-full max-w-2xl max-h-full shadow-2xl z-[60]">
//                     {/* <div className="relative bg-pink-50 rounded-lg shadow"> */}
//                         {/* <div className="flex items-start justify-between px-4 py-2 border-b  from-pink-50 to-pink-100 bg-pink-100 border-pink-300 rounded-t"> */}
//                             <h3 className="text-xl font-semibold text-pink-900 ">
//                                 {title}
//                             </h3>
//                             <button onClick={changeIsOpen} type="button" className= "text-gray-400 bg-transparent hover:bg-pink-200 hover:text-pin-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center ">
//                                 <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
//                                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
//                                 </svg>
//                                 <span className="sr-only">Close</span>
//                             </button>
//                         {/* </div> */}
//                         {children}
//                     {/* </div> */}
//                 </div>
//                 {isOpen && <div onClick={changeIsOpen} className="backdrop-blur-xs fixed inset-0 z-50"></div>}

//             </div>

//         </>
//     )
// }
import React from 'react'
import { IoClose } from "react-icons/io5";

export default function Modal({
    isOpen,
    setIsOpen,
    title,
    children
}) {
    const changeIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
           <div
    className={
        isOpen
            ? "fixed inset-0 z-[9999] flex items-center justify-center"
            : "hidden"
    }
>

                {/* Modal */}
                <div
                    className="
                        relative
                        w-full
                        max-w-lg
                        rounded-2xl
                        bg-[#0F172A]
                        border
                        border-slate-700/50
                        shadow-2xl
                        overflow-hidden
                        z-[60]
                    "
                >

                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700/50">

                        <div>
                            <h3 className="text-lg font-semibold text-white">
                                {title}
                            </h3>

                        </div>

                        <button
                            onClick={changeIsOpen}
                            type="button"
                            className="
                                w-9
                                h-9
                                rounded-xl
                                flex
                                items-center
                                justify-center
                                text-slate-400
                                hover:bg-slate-800
                                hover:text-white
                                transition-all
                                duration-200
                            "
                        >
                            <IoClose size={18} />
                        </button>

                    </div>

                    {/* Content */}
                    <div className="p-5">
                        {children}
                    </div>

                </div>

                {/* Overlay */}
                {isOpen && (
                    <div
                        onClick={changeIsOpen}
                        className="
                            fixed
                            inset-0
                            z-50
                            bg-black/50
                            backdrop-blur-sm
                        "
                    />
                )}

            </div>
        </>
    )
}