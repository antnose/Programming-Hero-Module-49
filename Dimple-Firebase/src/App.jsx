import { use, useState } from "react";
import "./App.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "./firebase/firebase.init";

function App() {
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);
  const googleProvider = new GoogleAuthProvider();

  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        setCount(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Simple Firebase</h1>
      <button onClick={handleLoginWithGoogle}>Login with google</button>
      {user && (
        <div>
          <h3>User: {user.displayName} </h3>
          <p>Email: {user.email} </p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </>
  );
}

export default App;
