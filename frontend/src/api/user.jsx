import client from "./client";

const api_suffix = "/api/users/";

export const signup = async (body) => {
  try {
    const { data } = await client.post(`${api_suffix}signup`, body, {withCredentials: true, method: "POST"});
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const signin = async (credentials) => {
  try {
    const { data } = await client.post(`${api_suffix}signin`, credentials, {withCredentials: true, method: "POST"});
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const logout = async () => {
  try {
    const { data } = await client.get(`${api_suffix}logout`, {withCredentials: true, method: "GET"});
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const profile = async () => {
  try {
    const { data } = await client.get(`${api_suffix}me`, {withCredentials: true, method: "GET"});
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const getProfile = async (id) => {
  try {
    const { data } = await client.get(`${api_suffix}profile/${id}`, {withCredentials: true, method: "GET"});
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const getUser = async (id) => {
  try {
    const { data } = await client.get(`${api_suffix}single/${id}`, {withCredentials: true, method: "GET"});
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const getAllUsers = async () => {
  try {
    const { data } = await client.get(`${api_suffix}users`, {withCredentials: true, method: "GET"});
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};
