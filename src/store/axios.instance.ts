import axios from "axios";

const $axios = axios.create({
  baseURL: "https://shopking.cyclic.app/",
  withCredentials: true,
});

// const $axios = axios.create({
//   baseURL: "http://localhost:5000/",
//   withCredentials: true,
// });

export default $axios;
