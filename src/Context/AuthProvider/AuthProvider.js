import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config'
export const AuthContext=createContext();
const auth=getAuth(app)

const AuthProvider = ({children}) => {
const[user,setUser]=useState(null)

const loginProvider=(provider)=>{
    return signInWithPopup(auth,provider);
}
// log out
const logOut=()=>{
    return signOut(auth)
}
// register with email and password;
const creatUserEmailPasswod = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
// sign in with eamil and password
const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

useEffect(()=>{
  const unSubscribe=  onAuthStateChanged(auth,(currentUser)=>{
        console.log('carrent user',currentUser);
        setUser(currentUser)
    })
return ()=>{
    unSubscribe();
}
},[])
// auth value
const AuthInfo={user,loginProvider,logOut,creatUserEmailPasswod,signIn};
    return (
        <AuthContext.Provider value={AuthInfo}>
                    {children}
        </AuthContext.Provider>
            
    );
};

export default AuthProvider;