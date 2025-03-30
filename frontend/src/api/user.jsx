import client from "./client";
const api_suffix = "/api/users/";

export const signupProfessional = async (body) => {
  try {
    const res = await client.post(`/api/professional/register`, body);
    return res;
  } catch (error) {
    throw error;
  }
};
export const signupLocal = async (body) => {
  try {
    const res = await client.post(`/api/local/register`, body);
    return res;
  } catch (error) {
    throw error;
  }
};
export const sendVerificationCodeEmail = async (email) => {
  if (!email) {
    throw new Error("Email is required");
  }
  try {
    const data = await client.post(`/api/nodemailer/sendEmailVerificationCode`, {
      email,
    });
    return data;
  } catch (error) {
    console.log(error);
    if(error.response.data.message == "Code already sent") {
      return "Code already sent";
    }
    throw error;
  }
}
export const sendVerificationCode = async (phoneNumber) => {
  if (!phoneNumber) {
    throw new Error("PhoneNumber is required");
  }
  try {
    const data = await client.post(`/api/twilio/sendSMSVerificationCode`, {
      phoneNumber,
    });
    console.log(phoneNumber);
    return data;
  } catch (error) {
    throw error;
  }
}
export const signinProfessional = async (body) => {
  try {
    const res = await client.post(`/api/professional/login`, body, {
      withCredentials: true,
      method: "POST",
    });
    return res;
  } catch (error) {
    throw error;
  }
};
export const signinLocal = async (body) => {
  try {
    const res = await client.post(`/api/local/login`, body, {
      withCredentials: true,
      method: "POST",
    });
    return res;
  } catch (error) {
    throw error;
  }
};
export const completeProfile = async (body, id) => {
  try {
    console.log(body);
    const { data } = await client.post(
      `${api_suffix}complete/profile/${id}`,
      body,
      {
        withCredentials: true,
        method: "POST",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        data: body,
      }
    );
    // const data.
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
  // axios.post(`${import.meta.env.VITE_API_BASE_URL}${api_suffix}complete/profile/${id}`, body, {headers: {"Content-Type": "multipart/form-data"}}, data: formData).then(response => )
};

export const completeCompanyProfile = async (body, id) => {
  try {
    console.log(body);
    const { data } = await client.post(
      `${api_suffix}complete/company/${id}`,
      body,
      {
        withCredentials: true,
        method: "POST",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        data: body,
      }
    );
    // const data.
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
  // axios.post(`${import.meta.env.VITE_API_BASE_URL}${api_suffix}complete/profile/${id}`, body, {headers: {"Content-Type": "multipart/form-data"}}, data: formData).then(response => )
};

export const updateProfile = async (body, id) => {
  try {
    const { data } = await client.put(
      `${api_suffix}update/profile/${id}`,
      body,
      {
        withCredentials: true,
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const logout = async () => {
  try {
    const { data } = await client.get(`${api_suffix}logout`, {
      withCredentials: true,
      method: "GET",
    });
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const profile = async (id) => {
  try {
    // alert(id);
    const { data } = await client.get(`${api_suffix}me/${id}`, {
      withCredentials: true,
      method: "GET",
    });
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const getProfile = async (id) => {
  try {
    const { data } = await client.get(`${api_suffix}profile/${id}`, {
      withCredentials: true,
      method: "GET",
    });
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const getUser = async (id) => {
  try {
    const { data } = await client.get(`${api_suffix}single/${id}`, {
      withCredentials: true,
      method: "GET",
    });
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const getAllUsers = async () => {
  try {
    const { data } = await client.get(`${api_suffix}users`, {
      withCredentials: true,
      method: "GET",
    });
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};
