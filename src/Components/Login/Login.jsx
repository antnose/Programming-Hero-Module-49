import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { use, useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
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

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(`Error ${error}`);
      });
  };

  return (
    <div>
      {user ? (
        <div>
          <h4 className="text-4xl"> Name: {user.displayName} </h4>
          <p className="text-2xl">Email: {user.email} </p>
          <img src={user.photoURL} alt="" />
          <button onClick={handleSignOut} className="btn btn-soft ml-4">
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <button onClick={handleGoogleSignIn} className="btn m">
            Login with Google
          </button>
          <button onClick={handleGitHubSignIn} className="btn">
            Login With GitHub
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
