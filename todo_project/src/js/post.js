import * as $ from "jquery";

export const AddDeleteButton = () => {
  $(".close").click(function () {
    $(this).parent().remove();
    console.log("removed");
  });
};

// click on item
export const AddClickLogic = () => {
  $(".list-group-item").click(function () {
    $(this).toggleClass("checked");
  });
};

export const SubmitAction = () => {
  if ($("#newVal")[0].checkValidity() === true) {
    const txt = `<li class="list-group-item" id='item1'><button type="button" class="close" data-dismiss="alert">&#9842;</button><a href="#item4">${$(
      "#newVal"
    ).val()}</a></li>`;
    $("#itemList").prepend(txt);
    $("#newVal").val("");
    $(".list-group-item").off("click");
    $(".close").off("click");
    console.log("submitted");
    AddClickLogic();
    AddDeleteButton();
  }
};
