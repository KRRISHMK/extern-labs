import axios from "axios";
import { toast } from "react-toastify";
import { setCookie } from "../helper/Cookie";
export const getFiles = (callback) => {
  fetch("http://localhost:8080/files")
    .then((res) => res.json())
    .then((res) => {
      return callback(res);
    });
};
export const downloadFile = (name, callback) => {
  fetch(`http://localhost:8080/file/${name}`).then((res) => {
    return callback(res);
  });
};
export const saveFile = async (data, callback) => {
  const res = await axios.post("http://localhost:8080/", data);
  return callback(res);
};

export const userLogin = async (data, callback) => {
  try {
    const res = await axios.post("http://localhost:8080/login", data);
    toast.success(res.data.message);
    setCookie("userLoggedIn", true);
    return callback(res);
  } catch (error) {
    toast.error(error.response.data.message);
  }

  // return callback(res);
};
