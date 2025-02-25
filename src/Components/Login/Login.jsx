import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { use, useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out done");
        setUser(null);
      })
      .catch((error) => {
        console.log("The error is: ", error);
      });
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn} className="">
        Login with Google
      </button>

      {user && (
        <div>
          <h4 className="text-4xl"> Name: {user.displayName} </h4>
          <p className="text-2xl">Email: {user.email} </p>
          <img src={user.photoURL} alt="" />
          <button onClick={handleSignOut} className="btn btn-soft ml-4">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
