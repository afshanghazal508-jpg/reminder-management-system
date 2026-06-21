// import React, { useEffect } from 'react'

// export default function Container({ children, }) {
//     useEffect(() => {
//     }, [])
//     return (
//         <div className='bg-slate-100'>
//             <div className=' mt-14 pb-4 mx-3 pt-4 '>
//                 <div>
//                     {children}
//                 </div>
//             </div>
//         </div>
//     )

// }



// import React from 'react'

// export default function Container({ children }) {
//     return (
//         <div
//             className="min-h-screen bg-cover bg-center bg-fixed"
//             style={{
//                 backgroundImage:
//                     "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1920')"
//             }}
//         >
//             <div className="min-h-screen bg-black/60 backdrop-blur-sm">
//                 <div className="mt-14 pb-4 mx-3 pt-4">
//                     {children}
//                 </div>
//             </div>
//         </div>
//     )
// }


export default function Container({ children }) {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-fixed"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1920')"
            }}
        >
            <div className="min-h-screen bg-black/60 backdrop-blur-sm">
                <div className="
                    mt-14
                    pb-4
                    px-3
                    sm:px-5
                    lg:px-8
                    pt-4
                    max-w-[1600px]
                    mx-auto
                ">
                    {children}
                </div>
            </div>
        </div>
    )
}