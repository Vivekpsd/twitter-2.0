import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import "./navbar.css";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="nav">
      <nav className="navbar">
        <div className="logo">Post-iT</div>
        <div className="menu" style={user ? { width: "450px" } : {}}>
          <Link to="/">Home</Link>
          {user ? (
            <Link to="/createpost">Create Post</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
          {user && (
            <div className="afterLoginNav">
              <img src={user?.photoURL || ""} alt="profile_picture" />
              <button className="logout-btn" onClick={signUserOut}>
                Log out
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
