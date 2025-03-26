import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { login } from "./userSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isVerified = useSelector(state => state.user.isVerified)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    if (isVerified) {
        navigate("/")
        console.log()
    }
  }, [isVerified, navigate])

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <h2>Log In</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
