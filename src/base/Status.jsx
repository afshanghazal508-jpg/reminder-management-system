import React from 'react'

export default function Status({ text, bgColor,textColor}){
    return(
        <span className={`inline-flex items-center ${bgColor} ${textColor} text-xs font-medium px-2.5 py-0.5 rounded-full shadow-2xl`}>
            {text}
        </span>
    )
}