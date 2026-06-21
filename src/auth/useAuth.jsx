// Ye code React ka Authentication Context Provider hai.
//  Iska kaam poori application mein login/logout aur auth 
//  state ko manage karna hai bina props drilling ke.


import { createContext, useContext, useState } from "react";
import { useNetwork } from "../common/useNetwork";
import { useToast } from "../toast/ToastProvider";
import { clearAuth, getAuth, storeAuth } from "./authStorage";
import { MdErrorOutline } from "react-icons/md";

const authContext = createContext();
const useAuth = () => useContext(authContext)

const AuthProvider = ({ children }) => {
    const initiAuth = getAuth()
    const toast = useToast()
    const { setUnavailable } = useNetwork()

    const initEmptyAuth = {
        isLogin: false,
        data: undefined,
        token: undefined,
    }

    const [authentication, setAuthentication] = useState(initiAuth ? initiAuth : initEmptyAuth)

    const logedIn = (val) => {
        setAuthentication(val)
        storeAuth(val)
    }
    const logedOut = async () => {
        setAuthentication(initEmptyAuth)
        clearAuth()
    }
    const axiosError = (err) => {
        if (err.status == 401) {
            logedOut()
            toast.open("Login Expired!", "text-red-400", <MdErrorOutline />);
        } else {
            setUnavailable()
            toast.open(err.message, "text-red-400", <MdErrorOutline />);
        }
    }
    //Global Authentication State Management
    return (
        <authContext.Provider value={{ logedIn, logedOut, axiosError, authentication }}>
            {children}
        </authContext.Provider>
    )
}

export default useAuth
export { AuthProvider }

//Ye code React ka Authentication Context Provider hai.
//Iska kaam poori application mein login / logout aur auth
//state ko manage karna hai bina props drilling ke.
//Props drilling tab hoti hai jab data ko Parent Component se
//bahut neeche wale Child Component tak pahunchane ke liye beech ke
//har component ko props pass karne padte hain, chahe unhe us data ki
//zarurat na ho.esse code nested ho jata hai esi se bachne ke liye context
//ya state ka use karte hain taki kisi b component me deta mill jaye 