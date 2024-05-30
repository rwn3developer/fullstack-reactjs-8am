import { createContext, useContext, useState } from "react";

const googleAuthContext = createContext();

const AuthProvider = ({children}) => {

    const [gauth,setAuth] = useState({
        token : null
    })

    return(
        <googleAuthContext.Provider value={[gauth,setAuth]}>
            {children}
        </googleAuthContext.Provider>
    )

}

const useAuth = () => {
    return useContext(googleAuthContext);
}

export {useAuth,AuthProvider}