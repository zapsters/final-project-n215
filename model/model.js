export function loadPage(pageID) {
  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      // console.log("data " + data);
      $("#app").html(data);
    });
    $(`nav a`).removeClass("active");
    $(`#${pageID}`).addClass("active");
    if (pageID == "home") {
      $(`nav`).addClass("nav-white");
      $(`nav`).removeClass("nav-black");
    } else {
      $(`nav`).addClass("nav-black");
      $(`nav`).removeClass("nav-white");
    }
  } else {
    $(`nav a`).removeClass("active");
    $(`#home`).addClass("active");
    $(`nav`).addClass("nav-white");
    $(`nav`).removeClass("nav-black");
    $.get(`pages/home.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
    });
  }
}

export function mixWord(wordOne, wordTwo) {
  let newWord = `${wordOne} ${wordTwo}`;
  return newWord;
}
