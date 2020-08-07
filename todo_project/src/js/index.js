import * as $ from "jquery";
import * as post from "./post";
import '@scss/main.scss'; // eslint-disable-line

// init script
$(document).ready(() => {
  post.AddClickLogic();
  $("#submit_button").click(() => {
    post.SubmitAction();
  });
  post.AddDeleteButton();
});
// block refreshing on submit
$(document).on(
  "submit",
  "#testForm",
  () =>
    // do your things
  false);// eslint-disable-line
// add new item
// enter pressed
$("#newVal").keyup((e) => {
  if (e.keyCode === 13) {
    post.SubmitAction();
  }
});
