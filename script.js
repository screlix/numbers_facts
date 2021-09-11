//in Ajax
// $("input").on("input", function () {
//   var number = $(this).val();
//   // if (!isNaN($(this).val())) {
//   // console.log("good");
//   $.ajax({
//     method: "GET",
//     url: "http://numbersapi.com/" + number,
//     dataType: "text",
//     success: function (response, status, xhr) {
//       $("p").html(response);
//     },
//   });
//   // }
// });

//in JS
var input = document.querySelector("input");
var myp = document.querySelector("p");
input.addEventListener("input", function () {
  var di = input.value;
  var myxhr = new XMLHttpRequest();
  myxhr.onload = function () {
    myp.innerHTML = this.responseText;
    if (this.status != 200) console.log("notfound");
  };
  var urll = "http://numbersapi.com/" + di;
  myxhr.open("GET", urll);
  myxhr.send();
});
