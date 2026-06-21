import React, { useState } from 'react'

function Input(props) {
    const { Icon, IsError, isPassword = false, handlePassword } = props
    const [show, setShow] = useState(false)
    return (
        <div className="relative w-full">
            {Icon &&
                isPassword ?
                <div onClick={() => setShow(pre => !pre)} className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer">
                    {Icon}
                </div>
                :
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    {Icon}
                </div>
            }
            <input type={isPassword ? (show ? "text" : "password") : (props.type ? props.type : "text")} {...props} className={`outline-none bg-gray-200 border ${IsError ? "border-red-600" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ${Icon && "ps-10"} p-2.5 `} />
        </div>
    )
}

export default Input