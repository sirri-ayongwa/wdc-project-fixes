import React, { useState } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import EmptyImage from "../assets/images/empty-img.jpg";
import { create } from "../api/post";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogImage, setBlogImage] = useState(null);
  const [blogImage2, setBlogImage2] = useState(null);
  const [fileUpload, setUpload] = useState(null);
  const [fileUpload2, setUpload2] = useState(null);
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();

  async function HandleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", blogImage2);
    formData.append("file", blogImage2);
    // console.log(formData.get("title"));

    setPending(true);
    try {
      const res = await create(formData);
      if (res?.success) {
        toast.success("Blog created successfully");
        setPending(false);
      } else {
        setPending(false);
        toast.error(res?.response?.data?.error || "Error");
      }
      //   fetchBlogs();
      //   navigate("/");
    } catch (error) {
      console.error(error);
      setPending(false);
    }
  }

  function handleImageUpload(e) {
    e.preventDefault();
    const file = e.target.files[0];
    setBlogImage2(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setBlogImage(reader.result);
    };
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen dark">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-center font-bold text-gray-200 mb-4">
            Add a Blog
          </h2>
          <div className="flex justify-center">
            {blogImage !== null ? (
              <img
                className="m-2"
                src={blogImage}
                style={{ objectFit: "cover", width: "90%" }}
                alt="blog-image"
              />
            ) : null}
          </div>
          <form className="flex flex-col" onSubmit={HandleSubmit}>
            <input
              placeholder="Image"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e)}
            />
            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
            />
            <MarkdownEditor
              value={content}
              onChange={setContent}
              height={400}
              // style={{ whiteSpace: 'pre-wrap' }}
            />

            <button
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              type="submit"
              disabled={pending}
            >
              {pending ? "Loading..." : "Create Blog"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BlogForm;
