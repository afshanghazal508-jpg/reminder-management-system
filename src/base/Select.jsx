import React from 'react'

export default function Select(props) {
    const { Icon, isError = false, children } = props
    return (
        <div class={`w-full flex shadow-sm bg-gray-50 hover:shadow-md border rounded-lg ${isError ? "border border-red-500" : "border-gray-400"}`}>
            {Icon &&
                <span class="shrink-0 bg-gray-50 inline-flex items-center py-1 px-2 text-sm font-medium text-center rounded-s-lg">
                    {Icon}
                </span>
            }
            <select {...props} className={`text-gray-900 bg-gray-50 outline-none text-sm rounded-e-lg w-full ps-1 pe-2.5 py-2.5 me-2`}>
                {children}
            </select>
        </div>

    )
}
