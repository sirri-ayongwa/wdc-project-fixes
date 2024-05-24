import client from "./client";

const api_suffix="/api/users/"

export const signup = async (body) => {
    try{
        const {data} = await client.post(`${api_suffix}signup`, body, {withCredentials: true});
        // console.log(data);
        return data;
    }catch(error) {
        // console.log(error);
        return error
    }
}

export const signin = async (credentials) => {
    try{
        const {data} = await client.post(`${api_suffix}signin`, credentials, {withCredentials: true});
        // console.log(data);
        return data;
    }catch(error) {
        // console.log(error);
        return error
    }
}

export const logout = async () => {
    try{
        const {data} = await client.get(`${api_suffix}logout`, {withCredentials: true});
        // console.log(data);
        return data;
    }catch(error) {
        // console.log(error);
        return error
    }
}

export const profile = async () => {
    try{
        const {data} = await client.get(`${api_suffix}signin`, {withCredentials: true});
        // console.log(data);
        return data;
    }catch(error) {
        // console.log(error);
        return error
    }
}

export const getProfile = async (id) => {
    try{
        const {data} = await client.get(`${api_suffix}profile/${id}`, {withCredentials: true});
        // console.log(data);
        return data;
    }catch(error) {
        // console.log(error);
        return error
    }
}

export const getUser = async (id) => {
    try{
        const {data} = await client.get(`${api_suffix}single/${id}`, {withCredentials: true});
        // console.log(data);
        return data;
    }catch(error) {
        // console.log(error);
        return error
    }
}

export const getAllUsers = async () => {
    try{
        const {data} = await client.get(`${api_suffix}users`, {withCredentials: true});
        // console.log(data);
        return data;
    }catch(error) {
        // console.log(error);
        return error
    }
}