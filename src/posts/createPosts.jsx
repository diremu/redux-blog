import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addPost } from "./blogSlice"; // Import the addPost action

function CreatePosts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isVerified = useSelector((state) => state.user.isVerified);
  const userName = useSelector((state) => state.user.user);
  const userId = useSelector((state) => state.user.user.id);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (!isVerified) {
      navigate("/login");
    }
  }, [isVerified, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(), // Use a unique ID for the new post
      name: userName,
      userId: userId,
      title: title,
      body: body,
    };

    // Dispatch the addPost action to update the Redux state
    dispatch(addPost(newPost));

    // Clear the form fields
    setTitle("");
    setBody("");

    // Navigate back to the home page
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center bg-gray-300 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md">
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 mb-4 rounded"
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