import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth } from "../config/firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

export async function createUser(email: string, password: string) {
  return createUserWithEmailAndPassword(auth ,email, password);
}

export async function signInWithEmailAndPassword(email: string, password: string) {
  return signInWithEmailAndPassword(email, password);
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);

  return result;
}

export function signOut() {
  return auth.signOut();
}