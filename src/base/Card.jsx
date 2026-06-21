// import React, { useEffect } from 'react'
// import { MdArrowBack } from 'react-icons/md'
// import { FiRefreshCcw } from "react-icons/fi";
// import { useNavigate } from 'react-router-dom';

// export default function Card({ isBorder = false, bgColor="bg-white", borderColor = "border-gray-400", title, subTitle, children, isBack = false, isRefresh = false, doRefresh }) {
//     const navigate = useNavigate()

//     return (
//         <div class={"p-3 rounded-4xl shadow-xl hover:shadow-2xl" + (isBorder ? " border-t-4 " + borderColor : "") + (" " + bgColor)}>
//             {(title || isBack || isRefresh) && <h1 class="text-gray-900 font-bold text-xl leading-8 my-1 flex items-start">
//                 {
//                     isBack &&
//                     <button title='Back' className='mr-1 p-1 hover:bg-gray-200 hover:rounded-lg' onClick={() => navigate(-1)}>
//                         <MdArrowBack />
//                     </button>
//                 }
//                 {title && <h1 className='flex items-center w-full'>{title}</h1>}
//                 {
//                     isRefresh &&
//                     <button title='Refresh' className='ml-2 mr-1 p-1 text-green-700 hover:bg-gray-200 hover:rounded-lg active:bg-gray-300 active:rounded-lg' onClick={doRefresh}>
//                         <FiRefreshCcw />
//                     </button>
//                 }
//             </h1>}
//             {subTitle && <h3 class="text-gray-600 font-lg text-semibold leading-6">{subTitle}</h3>}
//             {children}
//         </div>
//     )
// }


import React from 'react'
import { MdArrowBack } from 'react-icons/md'
import { FiRefreshCcw } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

export default function Card({
    isBorder = false,
    borderColor = "border-sky-400",
    title,
    subTitle,
    children,
    isBack = false,
    isRefresh = false,
    doRefresh
}) {

    const navigate = useNavigate()

    return (
        <div
    className={`
        relative
        p-6
        rounded-2xl
        bg-slate-900/60
        backdrop-blur-xl
        border border-slate-700/50
        shadow-lg
        transition-all duration-300
        hover:shadow-xl
        hover:bg-slate-900/80
        ${isBorder ? `border-t-4 ${borderColor}` : ""}
    `}
>

            {/* Header */}
            {(title || isBack || isRefresh) && (
                <div className="mb-4 w-full">

                    {isBack && (
                        <button
                            onClick={() => navigate(-1)}
                            className="p-2 rounded-lg hover:bg-white/10 transition"
                        >
                            <MdArrowBack size={18} />
                        </button>
                    )}

                    {title && (
                        <div className="w-full">
                            {title}
                        </div>
                    )}

                    {isRefresh && (
                        <button
                            onClick={doRefresh}
                            className="p-2 rounded-lg text-sky-300 hover:bg-white/10 transition"
                        >
                            <FiRefreshCcw />
                        </button>
                    )}

                </div>
            )}

            {/* Subtitle */}
            {subTitle && (
                <p className="text-sm text-gray-300 mb-4">
                    {subTitle}
                </p>
            )}

            {/* Content */}
            <div>
                {children}
            </div>

        </div>
    )
}