import axios from "axios";
import { BASE_URL_API } from "../configuration/initUrl";

const createAxios = () => axios.create({
  baseURL: BASE_URL_API
})
const createAxiosWithToken = (token) => axios.create({
  baseURL: BASE_URL_API,
  headers: {
    Authorization: `Bearer ${token}`,
  }
})

export { createAxios, createAxiosWithToken }