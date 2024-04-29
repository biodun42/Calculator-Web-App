function del() {
  let screen = document.calc.text;
  let value = screen.value;
  screen.value = value.substr(0, value.length - 1);
}

let two = document.getElementById("two");
two.addEventListener("click", function () {
  let body = document.querySelector("body");
  let toggle = document.getElementById("circle");
  body.classList.add("active1");
  body.classList.remove("active2");
  toggle.style.left = "36%";
});

let one = document.getElementById("one");
one.addEventListener("click", function () {
  let body = document.querySelector("body");
  let toggle = document.getElementById("circle");
  body.classList.remove("active1");
  body.classList.remove("active2");
  toggle.style.left = "3.5px";
});

let three = document.getElementById("three");
three.addEventListener("click", function () {
  let body = document.querySelector("body");
  let toggle = document.getElementById("circle");
  body.classList.add("active2");
  body.classList.remove("active1");
  toggle.style.left = "67%";
});
