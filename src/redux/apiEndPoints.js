import axios from "axios";
export const AXIOS_INSTANCE = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export const SIGN_UP_API = "https://api.realworld.io/api/users";

export const LOGIN_API = "https://api.realworld.io/api/users/login";

export const POSTS_API = "https://jsonplaceholder.typicode.com/posts";
