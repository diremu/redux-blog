import DisplayPosts from "./posts/displayPosts";
import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./users/loginForm";
import CreatePosts from "./posts/createPosts";
import { useSelector } from "react-redux";

function App() {
  const isVerified = useSelector((state) => state.user.isVerified);

  return (
    <>
      <Navbar />
      <div className="mx-10">
        <Routes>
          <Route path="/" index element={<DisplayPosts />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/create" element={<CreatePosts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
