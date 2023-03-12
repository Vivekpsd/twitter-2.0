import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./Pages/main/main";
import { Error } from "./Pages/error";
import { Login } from "./Pages/login";
import { Navbar } from "./Components/navbar";
import { CreatePost } from "./Pages/create-post/create-post";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/*" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createPost" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
