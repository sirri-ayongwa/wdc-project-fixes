import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Dropzone from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules } from "../../components/moduleTool";
import MarkdownEditor from "@uiw/react-markdown-editor";

const validationSchema = yup.object({
  title: yup
    .string("Add a post title")
    .min(4, "text content should havea minimum of 4 characters ")
    .required("Post title is required"),
  content: yup
    .string("Add text content")
    .min(10, "text content should havea minimum of 10 characters ")
    .required("text content is required"),
});

const CreatePost = () => {
  const [pending, setPending] = useState(false);
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: "",
      content: "",
      image: null,
    },

    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      createNewPost(values)
        .then((e) => actions.resetForm())
        .catch((err) => toast.error(err || "Erreur"));
      //alert(JSON.stringify(values, null, 2));
    },
  });

  const createNewPost = async (values) => {
    // console.log(values);

    try {
      setPending(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/posts/post/create`,
        values
      );
      toast.success("post created");
      setPending(false);
    } catch (error) {
      console.log(error);
      toast.error(error);
      setPending(false);
    }
  };

  return (
    <div className="container">
      <Box
        sx={{
          bgcolor: "transparent",
          color: "white",
          padding: "20px 200px",
        }}
      >
        <Typography variant="h5" sx={{ pb: 4 }}>
          {" "}
          Create Blog{" "}
        </Typography>
      </Box>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          mt: 1,
        }}
      >
        <TextField
          sx={{ color: "#fff", margin: "8px", background: "#fff" }}
          fullWidth
          id="title"
          // label="Post title"
          name="title"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Post title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.title && Boolean(errors.title)}
          helperText={touched.title && errors.title}
        />

        <Box sx={{ mb: 3, background: "white", color: "black" }}>
          {/* <ReactQuill
            theme="snow"
            placeholder={"Write the post content..."}
            modules={modules}
            value={values.content}
            onChange={(e) => setFieldValue("content", e)}
          /> */}
          <MarkdownEditor
            value={values.content}
            onChange={(e) => setFieldValue("content", e)}
            height={400}
            // style={{ whiteSpace: 'pre-wrap' }}
          />
          <Box
            component="span"
            sx={{ color: "#d32f2f", fontSize: "12px", pl: 2 }}
          >
            {touched.content && errors.content}
          </Box>
        </Box>

        <Box border="2px dashed blue" sx={{ p: 1 }}>
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            //maxFiles={3}
            onDrop={(acceptedFiles) =>
              acceptedFiles.map((file, index) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                  setFieldValue("image", reader.result);
                };
              })
            }
          >
            {({ getRootProps, getInputProps, isDragActive }) => (
              <Box
                {...getRootProps()}
                p="1rem"
                sx={{
                  "&:hover": { cursor: "pointer" },
                  bgcolor: isDragActive ? "#cceffc" : "#fafafa",
                }}
              >
                <input name="banner" {...getInputProps()} />
                {isDragActive ? (
                  <>
                    <p style={{ textAlign: "center" }}>
                      <CloudUploadIcon sx={{ color: "primary.main", mr: 2 }} />
                    </p>
                    <p style={{ textAlign: "center", fontSize: "12px" }}>
                      {" "}
                      Drop here!
                    </p>
                  </>
                ) : values.image === null ? (
                  <>
                    <p style={{ textAlign: "center" }}>
                      <CloudUploadIcon sx={{ color: "primary.main", mr: 2 }} />
                    </p>
                    <p style={{ textAlign: "center", fontSize: "12px" }}>
                      Drag and Drop here or click to choose
                    </p>
                  </>
                ) : (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <img
                          style={{ maxWidth: "100px" }}
                          src={values.image}
                          alt=""
                        />
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            )}
          </Dropzone>
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          elevation={0}
          sx={{ mt: 3, p: 1, mb: 2, borderRadius: "25px" }}
          disabled={pending}
        >
          Create blog
        </Button>
      </Box>
    </div>
  );
};

export default CreatePost;
