import { Cookie } from "../../constants";

export function handleLoginRedirect(response) {
  console.log("response", response);

  Cookie.set("token", response.data.user.token, {
    path: "/",
    maxAge: 31536000,
  });
  Cookie.set("username", response.data.user.username, {
    path: "/",
    maxAge: 31536000,
  });
}

// console.log(handleLoginRedirect)
export const isUserAuthenticated = () => {
  const isUserLoggedin = getLoggedInUser();
  if (!isUserLoggedin) {
    return null;
  } else {
    return true;
  }
};

export const getLoggedInUser = () => {
  const token = Cookie.get("token", { path: "/" });
  if (token) {
    return true;
  } else {
    return null;
  }
};

export const handleLogoutRedirect = () => {
  Cookie.remove("token", { path: "/" });
  Cookie.remove("username", { path: "/" });
  window.location.reload(false);
};
