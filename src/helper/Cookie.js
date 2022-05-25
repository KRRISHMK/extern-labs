// Set  Cookie
export function setCookie(cookieName, cookieValue, days = 1) {
  var date, expires;
  if (days) {
    date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = cookieName + "=" + cookieValue + expires + "; path=/";
}

//Clear Cookie
export function clearCookie(name) {
  setCookie(name, "", -24);
}

//Get cookie
export function getCookie(cname) {
  var nameEQ = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return "";
}
