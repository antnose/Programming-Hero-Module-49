import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    console.log("Google Comming Soon");
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn btn-soft mt-4">
        Login with Google
      </button>
    </div>
  );
};

export default Login;
