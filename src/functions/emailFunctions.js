import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { auth } from '../firebase/config';

export function CreateUser(email, password) {
    return (
        createUserWithEmailAndPassword(auth, email, password)
    );
};

export function SignIn(email, password) {
    return (
        signInWithEmailAndPassword(auth, email, password)
    )
}

export function LogOut() {
    return (
        signOut(auth).then(() => {
            // Sign-out successful.
            alert('Successfully signed out!');
        }).catch((error) => {
            // An error happened.
            alert('Error encountered! ', error)
        })
    )
}


