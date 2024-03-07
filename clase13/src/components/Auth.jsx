import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import { useState } from "react";

function Auth() {
  const [email, setEmail] = useState("");

  const [pass, setPass] = useState("");

  const signUp = async () => {
    await createUserWithEmailAndPassword(auth, email, pass);
  };

  const logOut = async () => {
    await signOut(auth);
  };

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  return (
    <div>
      <span>Usuario: {auth?.currentUser?.email}</span>
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="pass"
        type="password"
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={signUp}>Crear</button>
      <button onClick={signInWithGoogle}>Ingresar con Google</button>
      <button onClick={logOut}>Salir</button>
    </div>
  );
}

export default Auth;
