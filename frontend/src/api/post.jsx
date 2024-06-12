import client from "./client";

const api_suffix = "/api/posts/";

export const create = async (body) => {
  try {
    // console.log(JSON.parse(localStorage.getItem("userAuth"))?.token);
    // client.defaults.withCredentials = true;
    const { data } = await client.post(`${api_suffix}post/create`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const showPost = async () => {
  try {
    const { data } = await client.get(`${api_suffix}posts/show`);
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const showSinglePost = async (id) => {
  try {
    const { data } = await client.get(`${api_suffix}post/${id}` );
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const deletePost = async (id) => {
  try {
    const { data } = await client.delete(`${api_suffix}delete/post/${id}`);
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const updatePost = async (id, title, content, image) => {
  try {
    const { data } = await client.put(
      `${api_suffix}update/post/${id}`,
      { title, content, image }
      
    );
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const addComment = async (id, comment) => {
  try {
    const { data } = await client.put(
      `${api_suffix}comment/post/${id}`,
      { comment }
    );
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const removeComment = async (id, comment) => {
  try {
    const { data } = await client.put(
      `${api_suffix}comment/post/${id}`,
      { comment }
    );
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const addLike = async (id) => {
  try {
    const { data } = await client.put(
      `${api_suffix}addlike/post/${id}`,
      {}
    );
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const removeLike = async (id) => {
  try {
    const { data } = await client.put(
      `${api_suffix}removelike/post/${id}`,
      {}
    );
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};
