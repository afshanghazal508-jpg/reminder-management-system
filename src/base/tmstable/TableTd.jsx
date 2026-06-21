// import React from 'react'

// export default function TableTd(props) {
//     const { children } = props
//     return (
//         <td {...props} class="px-2 py-2 whitespace-nowrap text-sm text-gray-800 text-nowrap">
//             {children}
//         </td>

//     )
// }
import React from 'react'

export default function TableTd(props) {
    const { children } = props

    return (
        <td
            {...props}
            className="
                px-6
                py-4
                whitespace-nowrap
                text-sm
                font-semibold
                text-white
            "
        >
            {children}
        </td>
    )
}