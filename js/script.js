let numbers = document.querySelectorAll("p");
let DivNumbers = document.querySelector(".numbers");
let prevBtn = document.querySelector(".prev-btn");
let NextBtn = document.querySelector(".next-btn");
let cssOfAfter = window.getComputedStyle(DivNumbers, "::after");
// console.log(cssOfAfter.width);
// DivNumbers.style.setProperty("--afterwidth", "100px");
let s = 0;
NextBtn.addEventListener("click", function (n) {
  s += 75;
  DivNumbers.style.setProperty("--afterwidth", `${s}px`);
  if (s <= 75) {
    prevBtn.classList.remove("nonActive");
  } else if (s === 225) {
    NextBtn.classList.add("nonActive");
    prevBtn.classList.remove("nonActive");
  } else if (s <= 150) {
    NextBtn.classList.remove("nonActive");
  }
  numbers.forEach(function (num, ind) {
    if (s === 0) {
      numbers[0].classList.add("active");
    } else if (s === 75) {
      numbers[1].classList.add("active");
    } else if (s === 150) {
      numbers[2].classList.add("active");
    } else if (s === 225) {
      numbers[3].classList.add("active");
    }
  });
});
prevBtn.addEventListener("click", function (n) {
  s -= 75;
  if (s === 0) {
    prevBtn.classList.add("nonActive");
  } else if (s === 0) {
    NextBtn.classList.remove("nonActive");
    prevBtn.classList.add("nonActive");
  } else if (s <= 150) {
    NextBtn.classList.remove("nonActive");
  }
  DivNumbers.style.setProperty("--afterwidth", `${s}px`);
  numbers.forEach(function () {
    if (s === 0) {
      numbers[1].classList.remove("active");
    } else if (s === 75) {
      numbers[2].classList.remove("active");
    } else if (s === 150) {
      numbers[3].classList.remove("active");
    }
  });
});
if (s === 0) {
  prevBtn.classList.add("nonActive");
}
