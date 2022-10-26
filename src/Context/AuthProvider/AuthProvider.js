import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config'
export const AuthContext=createContext();
const auth=getAuth(app)

const AuthProvider = ({children}) => {
const[user,setUser]=useState(null)
// handle page loading
const[loader,setLoader]=useState(true)

const loginProvider=(provider)=>{
    setLoader(true)
    return signInWithPopup(auth,provider);
}
// log out
const logOut=()=>{
    setLoader(true)
    return signOut(auth)
}
// register with email and password;
const creatUserEmailPasswod = (email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
// update user info
const updateUserProfile = (profile)=>{
return updateProfile(auth.currentUser,profile)
}
// sign in with eamil and password
const signIn=(email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
}

useEffect(()=>{
  const unSubscribe=  onAuthStateChanged(auth,(currentUser)=>{
        console.log('carrent user',currentUser);
        setUser(currentUser);
        setLoader(false)
    })
return ()=>{
    unSubscribe();
}
},[])
// auth value
const AuthInfo={user,loginProvider,logOut,creatUserEmailPasswod,signIn,loader,updateUserProfile};
    return (
        <AuthContext.Provider value={AuthInfo}>
                    {children}
        </AuthContext.Provider>
            
    );
};

export default AuthProvider;