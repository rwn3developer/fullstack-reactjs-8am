import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, googleAuthProvider } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/GoogleAuth';

const Login = () => {
    //costom hook
    const [gauth,setAuth] = useAuth();
    const navigate = useNavigate()
    const handleLogin = async() => {
        try{
            const result = await signInWithPopup(auth,googleAuthProvider)
            const token = result.user.accessToken;
            setAuth({
                ...gauth,
                token : token
            })
            localStorage.setItem('token',token)

            navigate('/add');


            
        }catch(err){
            console.log(err);
            return false;
        }
    }

  return (
    <div align="center">
        <h1>Google Auth</h1>
        <button onClick={ () => handleLogin()}>Google Login</button>
    </div>
  )
}

export default Login
