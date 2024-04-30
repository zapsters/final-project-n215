// import * as MODEL from "../model/model.js";
import { loadPage } from "../model/model.js";

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   console.log(hashTag + ' ' + pageID);
  loadPage(pageID);
  window.scrollTo(0, 0);
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute(); // Call changeRoute to load the home page.
}

/* The `$(document).ready(function () { ... });` code block is using jQuery to wait for the document
(DOM) to be fully loaded before executing the provided function. */
$(document).ready(function () {
  initURLListener();
});
