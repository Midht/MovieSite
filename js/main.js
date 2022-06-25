// 0c94118dda601b764e99fe9d2866db16

let allData = [];

async function getApi() {
  let getData = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=0c94118dda601b764e99fe9d2866db16&language=en-US&page=1`
  );
  let getRespnse = await getData.json();

  allData = getRespnse.results;
  displayMoives();
}
getApi();

let search = document.querySelector("#search");
async function getSearch(name) {
  let getData = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=0c94118dda601b764e99fe9d2866db16&language=en-US&query=${name}&include_adult=false`
  );
  let getRespnseSearch = await getData.json();
  allData = getRespnseSearch.results;
  displayMoives();
}

search.addEventListener("keyup", function (e) {
  getSearch(e.target.value);
});

let searchSelected = document.querySelector("#searchSelected");
async function getsearchSelected(term) {
  let cartona = [];
  for (let j = 0; j < allData.length; j++) {
    if (
      allData[j].original_title.toLowerCase().includes(term.toLowerCase()) ==
      true
    ) {
      cartona += `<div class="col-md-6 col-lg-4">
        <div class="content rounded-3">
            <img src="https://image.tmdb.org/t/p/w500/${
              allData[j].poster_path
            }" class="w-100" alt="Poster of moive">
            <div class="contentLayer text-center">
                <h2>${allData[j].title || allData[j].name}</h2>
                <p>${allData[j].overview}</p>
                <h4>Rate: ${allData[j].vote_average}</h4>
                <h5>${allData[j].release_date || allData[j].first_air_date}</h5>
            </div>
        </div>
      </div>
      `;
    }
    document.querySelector(".package").innerHTML = cartona;
  }
}
searchSelected.addEventListener("keyup", function (e) {
  getsearchSelected(e.target.value);
});

let navLinksLiA = document.querySelectorAll(".navLinks li a");
function selectedBtns() {
  
for (let i = 0; i < navLinksLiA.length; i++) {
  let box = "";

  navLinksLiA[i].addEventListener("click", function (e) {
    if (e.target.innerHTML == "Now Playing") {
      box = `https://api.themoviedb.org/3/movie/now_playing?api_key=0c94118dda601b764e99fe9d2866db16&language=en-US&page=1`;
    } else if (e.target.innerHTML == "Popular") {
      box = `https://api.themoviedb.org/3/movie/popular?api_key=0c94118dda601b764e99fe9d2866db16&language=en-US&page=1`;
    } else if (e.target.innerHTML == "Top Rated") {
      box = `https://api.themoviedb.org/3/movie/top_rated?api_key=0c94118dda601b764e99fe9d2866db16&language=en-US&page=1`;
    } else if (e.target.innerHTML == "Trending") {
      box = `https://api.themoviedb.org/3/trending/all/day?api_key=0c94118dda601b764e99fe9d2866db16`;
    } else if (e.target.innerHTML == "Upcoming") {
      box = `https://api.themoviedb.org/3/movie/upcoming?api_key=0c94118dda601b764e99fe9d2866db16&language=en-US&page=1`;
    }

    displaySelectedFromNav(box);
  });
}}
selectedBtns()

async function displaySelectedFromNav(getUrl) {
  let getData = await fetch(`${getUrl}`);
  let getRespnseSelected = await getData.json();
  allData = getRespnseSelected.results;
  displayMoives();
}

function displayMoives() {
  let item = [];
  for (let i = 0; i < allData.length; i++) {
    item += `<div class="col-md-6 col-lg-4">
        <div class="content rounded-3">
            <img src="https://image.tmdb.org/t/p/w500/${
              allData[i].poster_path
            }" class="w-100" alt="Poster of moive">
            <div class="contentLayer text-center">
                <h2>${allData[i].title || allData[i].name}</h2>
                <p>${allData[i].overview}</p>
                <h4>Rate: ${allData[i].vote_average}</h4>
                <h5>${allData[i].release_date || allData[i].first_air_date}</h5>
            </div>
        </div>
    </div>
    `;
  }
  document.querySelector(".package").innerHTML = item;
}

$(".openCloseNav").click(function () {
  let navSize = $(".navLinks").innerWidth();
  if ($("#navbar").css("left") == `${-navSize}px`) {
    $("#navbar").animate({ left: 0 }, 700, function () {
      $(".navLinks li")
        .eq(0)
        .animate({ paddingTop: "0", opacity: 1 }, 200, function () {
          $(".navLinks li")
            .eq(1)
            .animate({ paddingTop: "0", opacity: 1 }, 200, function () {
              $(".navLinks li")
                .eq(2)
                .animate({ paddingTop: "0", opacity: 1 }, 200, function () {
                  $(".navLinks li")
                    .eq(3)
                    .animate({ paddingTop: "0", opacity: 1 }, 200, function () {
                      $(".navLinks li")
                        .eq(4)
                        .animate(
                          { paddingTop: "0", opacity: 1 },
                          200,
                          function () {
                            $(".navLinks li")
                              .eq(5)
                              .animate(
                                { paddingTop: "0", opacity: 1 },
                                200,
                                function () {}
                              );
                          }
                        );
                    });
                });
            });
        });
    });
    $(".openCloseNav i").addClass("fa-xmark").removeClass("fa-bars");
  } else {
    $("#navbar").animate({ left: -navSize }, 700);
    $(".navLinks li").animate({ paddingTop: "30px", opacity: 0 }, 300);
    $(".openCloseNav i").addClass("fa-bars").removeClass("fa-xmark");
  }
});

let userName = document.querySelector("#name"),
  userEmail = document.querySelector("#email"),
  userPhone = document.querySelector("#phone"),
  userAge = document.querySelector("#age"),
  userPassword = document.querySelector("#password"),
  userRePassword = document.querySelector("#rePassword");
btnSubmit = document.querySelector("#btnSubmit");

let regName = RegExp(/^[a-zA-Z\s\D]{3,}$/gm),
  regEmail = RegExp(/^[\w\S\d]{3,}(@)[a-z]{2,}(\.)[a-z]{2,4}$/gm),
  regPhone = RegExp(/^(02)?01[012456][0-9]{8}$/gm),
  regAge = RegExp(/^[1-7][0-9]|(80)$/gm),
  regPassword = RegExp(/^[\S\w0-9]{5,}[!|@|#|$|%|&|*]{1,}[\w]*$/gm);

function validation() {
  if (regName.test(userName.value)) {
    userName.style.borderBottom = "1px solid green";
  } else if (regName.test(userName.value) == false || userName.value == "") {
    userName.style.borderBottom = "1px solid red";
  }
  if (regEmail.test(userEmail.value)) {
    userEmail.style.borderBottom = "1px solid green";
  } else if (regEmail.test(userEmail.value) == false || userEmail.value == "") {
    userEmail.style.borderBottom = "1px solid red";
  }
  if (regPhone.test(userPhone.value)) {
    userPhone.style.borderBottom = "1px solid green";
  } else if (regPhone.test(userPhone.value) == false || userPhone.value == "") {
    userPhone.style.borderBottom = "1px solid red";
  }
  if (regAge.test(userAge.value)) {
    userAge.style.borderBottom = "1px solid green";
  } else if (regAge.test(userAge.value) == false || userAge.value == "") {
    userAge.style.borderBottom = "1px solid red";
  }
  if (regPassword.test(userPassword.value)) {
    userPassword.style.borderBottom = "1px solid green";
  } else if (
    regPassword.test(userPassword.value) == false ||
    userPassword.value == ""
  ) {
    userPassword.style.borderBottom = "1px solid red";
  }
  if (
    userPassword.value != userRePassword.value ||
    userRePassword.value == ""
  ) {
    userRePassword.style.borderBottom = "1px solid red";
  } else if (userPassword.value == userRePassword.value) {
    userRePassword.style.borderBottom = "1px solid green";
  }
}

btnSubmit.addEventListener("click", validation);
