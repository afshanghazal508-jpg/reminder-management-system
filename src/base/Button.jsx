import React, { useEffect, useState } from 'react'
const colors = ["#EA4335", "#FBBC05", "#34A853", "#4285F4"];
function Button(props) {
    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex((prev) => (prev + 1) % colors.length);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const { color = "blue", children, Icon, isDisabled = false, isLoading = false, loadingText = "Please Wait..." } = props
    return (
        isDisabled ?
            <button className={`btn-disabled`} disabled={true}>
                <div className='flex items-center justify-center'>
                    {Icon && Icon} <span>{children}</span>
                </div>
            </button >
            :
            <button type={props.type ? (isLoading ? "button" : props.type) : "button"}  {...props} className={`btn-${isLoading ? color + "-loading" : color}`} disabled={color == "disabled"}><div className='flex items-center justify-center'>
                {
                    Icon && <span className='me-1'>{isLoading ?
                        <svg
                            aria-hidden="true" className="w-4 h-4 border-2 border-t-transparent border-solid rounded-full animate-spin"
                            style={{
                                borderColor: `${colors[colorIndex]} transparent`
                            }}
                        ></svg>
                        : Icon
                    }</span>}{isLoading ? loadingText : children}</div></button>
    )
}

export default Button


