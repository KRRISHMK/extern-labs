import { getCookie } from "./Cookie";

export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  return errors;
}

export function isLoggedIn() {
  const currentPath = window.location.pathname + window.location.search;
  let redirectUrl = "";
  if (currentPath) {
    redirectUrl = `?redirect=${currentPath}`;
  }

  if (!getCookie("userLoggedIn") && !currentPath.includes("/login")) {
    window.location.replace(`/login${redirectUrl}`);
  }
}
