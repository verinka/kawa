$(document).ready(function(e) {
  const n = window.navigator;
  const UALanguage = n.language ? n.language : n.browserLanguage ? n.browserLanguage : null;
  const userLanguage = n.userLanguage ? n.userLanguage : n.systemLanguage ? systemLanguage : null;

  // function getCookie(lg) {
  //   const results = document.cookie.match("(^|;) ?" + lg + "=([^;]*)(;|$)");

  //   if (results) {
  //     return unescape(results[2]);
  //   } else {
  //     return null;
  //   }
  // }

  // const lg = getCookie("lg");
  // const locat = window.location;
  // const lang = getCookie("lang");

  // if (locat.pathname == "/") {
  //   if (lang == "ua" && locat.pathname != "/") {
  //     location.href = "/";
  //   } else if (lang == "ru" && locat.pathname != "/ru") {
  //     location.href = "/ru";
  //   } else if (lang == "en" && locat.pathname != "/en") {
  //     location.href = "/en";
  //   }
  // }

  // if (!window.navigator.cookieEnabled || lang !== null) {
  // } else if (locat.pathname !== "/") {
  // } else if (
  //   (userLanguage === "uk" || userLanguage === "uk-UA" || UALanguage === "uk" || UALanguage === "uk-UA") &&
  //   lang === null
  // ) {
  //   location.href = "/";
  // } else if (
  //   (userLanguage == "ru" || userLanguage == "ru-RU" || UALanguage == "ru" || UALanguage == "ru-RU") &&
  //   lang === null
  // ) {
  //   location.href = "/ru";
  // } else {
  //   location.href = "/en";
  // }

  // $(".sidebar__link-lang--ru").on("click", function() {
  //   document.cookie = "lang=ru; path=/";
  // });
  // $(".sidebar__link-lang--ua").on("click", function() {
  //   document.cookie = "lang=ua; path=/";
  // });
  // $(".sidebar__link-lang--en").on("click", function() {
  //   document.cookie = "lang=en; path=/";
  // });

  // $(".icon2-ru").on("click", function() {
  //   document.cookie = "lang=ru; path=/";
  // });
  // $(".icon2-ua").on("click", function() {
  //   document.cookie = "lang=ua; path=/";
  // });
  // $(".icon2-en").on("click", function() {
  //   document.cookie = "lang=en; path=/";
  // });
});
