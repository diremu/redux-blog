import { blogdata } from "../blogdata";
export default function DisplayPosts() {
  const landingBlogs = blogdata.slice(0, 12);
  return (
    <>
      <div className="flex flex-row flex-wrap">
        {landingBlogs.map((blog) => {
          return (
            <div
              className="bg-gray-200 min-w-[200px] w-[26vw] max-w-[600px] self-center my-10 mx-3 min-h-[250px] max-h-[600px] flex flex-col justify-around border-[1.2px] border-black rounded-xl py-4"
              key={blog.id}
            >
              <h2 className="font-bold capitalize text-3xl pb-2">
                {blog.title}
              </h2>
              <div className="text-left px-4">
                <div>{blog.body}</div>
                <div className="text-right text-yellow-800">View Post </div>
                <div className="text-blue-700 text-right">{blog.name}</div>
              </div>
            </div>
          );
        })}
      </div>
      <h4 className="">hey there</h4>
    </>
  );
}
