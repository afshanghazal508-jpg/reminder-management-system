import React, { useState, useContext, createContext } from 'react'

const networkContext = createContext()
const useNetwork = () => useContext(networkContext)

function NetworkProvider({ children }) {
    const [isInternet, setIsInternet] = useState(true)
    const setAvailable = () => {
        setIsInternet(true)
    }
    const setUnavailable = () => {
        setIsInternet(false)
    }
    return (
        <networkContext.Provider value={{ setAvailable, setUnavailable, isInternet }}>
            {children}
        </networkContext.Provider>
    )
}
export default NetworkProvider
export { useNetwork }
