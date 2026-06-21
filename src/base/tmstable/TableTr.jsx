// import React from 'react'

// export default function TableTr(props) {
//     const { children, hoverBg = "bg-gray-100" } = props
//     return (
//         <tr className={`hover:${hoverBg} divide-x divide-gray-300`} {...props}>
//             {children}
//         </tr>
//     )
// }
import React from 'react'

export default function TableTr(props) {
    const { children } = props

    return (
        <tr
            {...props}
            className="
                border-b
                border-sky-500/10
                hover:bg-sky-500/5
                transition-all
                duration-300
            "
        >
            {children}
        </tr>
    )
}