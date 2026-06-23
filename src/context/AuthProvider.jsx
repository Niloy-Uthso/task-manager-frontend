import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../firebase/firebase.init"
import { AuthContext } from "./AuthContext"

const AuthProvider = ({children})=>{
    const [user,setUser]=useState(null)

    const [loading,setLoading]=useState(true)

    const signUpUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
       const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
       const signinUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

      useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser);
    setLoading(false)
})
     return()=>{
        unsubscribe()
     }
    },[])

    const authInfo={
        signUpUser,
        loading,
        user,
        setUser,
        logOut,
        signinUser
    }

    return (

        <AuthContext value={authInfo}>

            {children}

        </AuthContext>
    )

}

export default AuthProvider