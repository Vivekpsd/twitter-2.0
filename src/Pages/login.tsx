import "./styles/login.css";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };

  return (
    <div className="login-mod">
      <div>
        <form action="">
          <div className="input-set">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="input-set">
            <label htmlFor="passw">Password</label>
            <input type="text" name="passw" id="passw" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <br></br>
      <p>OR</p>
      <br></br>
      <hr></hr>
      <h3>Signin with Google to continue</h3>
      <br></br>
      <div className="login-btn" onClick={signInWithGoogle}>
        <h5>Signin with Google</h5>
      </div>
      <br></br>
    </div>
  );
};
