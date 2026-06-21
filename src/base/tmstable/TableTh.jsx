// import React from 'react'

// export default function TableTh({ children }) {
//     return (
//         <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase text-nowrap">
//             {children}
//         </th>
//     )
// }
import React from 'react'

export default function TableTh({ children }) {
    return (
        <th
            scope="col"
            className="
                px-6
                py-4
                text-left
                text-sm
                font-bold
                tracking-wide
                uppercase
                text-white
            "
        >
            {children}
        </th>
    )
}