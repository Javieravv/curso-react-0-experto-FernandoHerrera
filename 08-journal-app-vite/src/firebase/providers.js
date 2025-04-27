import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./configFirebase";

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup (FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult ( result )
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName, 
            email, 
            photoURL, 
            uid
        }
        
    } catch (error) {
        const errorCode    = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const registeruserWithEmailPassword = async ( { email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword ( FirebaseAuth, email, password );
        const {  uid, phtoURL } = resp.user
        console.log ( resp )
        await updateProfile( FirebaseAuth.currentUser, {
            displayName
        });
        return {
            ok: true,
            uid,
            phtoURL,
            email,
            displayName
        }
    } catch (error) {
        // console.log ( error )
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const loginWithEmailPassword =  async ( { email, password }) => {
    // siginwithemailandpassword
    console.log ('EMAIL QUE VIENE, ', email)
    try {
        const result = await  signInWithEmailAndPassword ( FirebaseAuth, email, password  );
        // const credentials = GoogleAuthProvider.credentialFromResult ( result )
        console.log ( { result })
        const { displayName, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName, 
            photoURL, 
            uid
        }
        
    } catch (error) {
        const errorCode    = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

// Llamamos el signout en firebase

export const logoutFirebase = async () => {
    // cierra todas las sesiones.
    return await FirebaseAuth.signOut()
}