import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showSinglePost } from "../../api/post";
import { toast } from "react-toastify";
import MarkdownEditor from "@uiw/react-markdown-editor";
import dateFormat from "dateformat";

function SingleBlogDisplay() {
  const [blog, setBlog] = useState(null);
  const id = useParams().id;
  const [pending, setPending] = useState(false);

  const FetchBlog = async () => {
    setPending(true);
    const res = await showSinglePost(id);
    if (res.success) {
      setBlog(res.post);
      console.log(res.post);
      setPending(false);
    } else {
      toast.error("Error! Try later");
      setPending(false);
    }
  };

  useEffect(() => {
    FetchBlog();
  }, []);

  return (
    <>
      {blog ? (
        <div>
          <br />
          <br />
          <div className="flex justify-center">
            <img
              className=" max-h-[600px]"
              src={blog?.image?.url}
              alt={blog.title}
            />
          </div>
          <div>
            <div className="container mt-4">
              <div className="container">
                {/* <p>
                        {blog?.description}
                    </p> */}
                <MarkdownEditor.Markdown source={blog?.content} />
              </div>
              <br />
              <hr />
              <br />
              <div>
                <b>Author: </b> <span style={{ marginRight: "10px" }}></span>{" "}
                {blog?.postedBy?.name} ,
              </div>
              <div>
                <b>Date: </b> <span style={{ marginRight: "10px" }}></span>
                {blog?.createdAt
                  ? dateFormat(new Date(blog?.createdAt), "dd-MM-yyyy")
                  : ""}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4>...Loading...</h4>
      )}
    </>
  );
}

export default SingleBlogDisplay;
