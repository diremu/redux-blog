import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addPost } from "./blogSlice";
import { blogdata } from "../blogdata";

function CreatePosts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isVerified = useSelector((state) => state.user.isVerified);
  const userName = useSelector((state) => state.user.user.user);
  const userId = useSelector((state) => state.user.user.id);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (!isVerified) {
      navigate("/login");
    }
  }, [isVerified, navigate]); // redirects you if you aren't logged in

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body ) {
      return alert("You havent filled anything yet!")
    }
    const newPost = {
      id: blogdata.length + 1,
      name: userName,
      userId: userId,
      title: title,
      body: body,
    }

    dispatch(addPost(newPost))
    setTitle("")
    setBody("")
    navigate("/")
  }

  return (
    <div className="flex flex-col items-center bg-gray-300 p-6 rounded-lg mt-6 w-fit max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md">
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 mb-4 rounded w-[300px]"
          required
        />
        <textarea
          placeholder="Post Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="border p-2 mb-4 rounded"
          rows="5"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
}

export default CreatePosts;