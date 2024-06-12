import client from "./client";

const api_suffix = "/api/users/";

export const signup = async (body) => {
  try {
    const { data } = await client.post(`${api_suffix}signup`, body);
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const signin = async (credentials) => {
  try {
    const { data } = await client.post(`${api_suffix}signin`, credentials);
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const logout = async () => {
  try {
    const { data } = await client.get(`${api_suffix}logout`);
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const profile = async () => {
  try {
    const { data } = await fetch(`${import.meta.env.VITE_API_BASE_URL}${api_suffix}me`)
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const getProfile = async (id) => {
  try {
    const { data } = await client.get(`${api_suffix}profile/${id}`);
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const getUser = async (id) => {
  try {
    const { data } = await client.get(`${api_suffix}single/${id}`);
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const getAllUsers = async () => {
  try {
    const { data } = await client.get(`${api_suffix}users`);
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};
