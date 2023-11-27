var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

// search 
let search_Form = document.getElementById("Search_form")

function search() {


  if (search_Form.style.width == "0px") {
    search_Form.style.width = "500px"
  } else {
    search_Form.style.width = "0px"
  }


}

window.onscroll = function () {
  var searchForm = document.getElementById('Search_form');

  if (window.scrollY > 0) {
    searchForm.style.width = "0px";
  }
};


// menu bar section 

document.getElementById("menu-bar").addEventListener("click", () => {


  let menu = document.getElementById("menu");

  if (menu.style.height === "300px") {

    menu.style.height = "0px"

  } else {
    menu.style.height = "300px"

  }


})
window.addEventListener("scroll", () => {
  let menu = document.getElementById("menu");

  if (window.scrollY > 0) {
    menu.style.height = "0px";
  }
});
