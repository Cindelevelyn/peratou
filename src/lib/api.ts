import axios from "axios";

export const Api = axios.create({
  baseURL: "https://bts-quotes-api.herokuapp.com/",
});
