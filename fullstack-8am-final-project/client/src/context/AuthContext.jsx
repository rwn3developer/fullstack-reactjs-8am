import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        user: null,
        token: null
    })

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('auth'));
        if (data) {
            setAuth({
                ...auth,
                token: data.token,
                user: data.user
            })
        }
    },[])

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

//coustom hook
const useAuth = () => {
    return useContext(AuthContext);
}

export { useAuth, AuthProvider }