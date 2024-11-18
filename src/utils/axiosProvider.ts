import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    // Do something before the request is sent
    // For example, add an authentication token to the headers
    const token = localStorage.getItem("authToken"); // Retrieve auth token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Handle the error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    if (
      response.headers["server"] === "cloudflare" &&
      response.status === 403
    ) {
      console.error("Cloudflare detected and access forbidden (403).");
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axios };
