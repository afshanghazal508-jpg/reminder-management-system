// import React from 'react'

// export default function Table({ children }) {
//     return (
//         <div class=" overflow-x-auto">
//             <div class="min-w-full inline-block align-middle">
//                 <div class="border border-gray-300 overflow-hidden">
//                     <table class="min-w-full divide-y divide-gray-300">
//                         {children}
//                     </table>
//                 </div>
//             </div>
//         </div>
//     )
// }

import React from 'react'

export default function Table({ children }) {
    return (
        <div className="overflow-x-auto rounded-2xl">
            <div className="min-w-full inline-block align-middle">
                <div className="border border-sky-500/20 rounded-2xl overflow-hidden bg-[#071220]/60 backdrop-blur-md">
                    <table className="min-w-full">
                        {children}
                    </table>
                </div>
            </div>
        </div>
    )
}
