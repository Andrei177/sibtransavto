// const fon = document.querySelector(".start-back-img");

// //const initialBackgroundPositionY = parseFloat(getComputedStyle(fon).backgroundPositionY) || 0;

// window.addEventListener("scroll", () => {
//   const scrollPosition = window.scrollY;

//   //fon.style.backgroundPositionY = `${initialBackgroundPositionY + scrollPosition * 0.5}px`;
//   fon.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
// });

// Функция обновления значения для инпутов
function updateRangeValue(input) {
  const rangeContainer = input.closest(".range-container");
  const rangeValue = rangeContainer.querySelector(".range-value");
  const value = input.value;

  rangeValue.textContent = value;

  const rangeWidth = input.offsetWidth;
  const thumbWidth = 24; // ширина бегунка
  const min = input.min;
  const max = input.max;

  const left =
    ((value - min) / (max - min)) * (rangeWidth - thumbWidth) + thumbWidth / 2;
  rangeValue.style.left = `${left}px`;
}

const ranges = document.querySelectorAll(
  '.range-container input[type="range"]'
);
ranges.forEach((range) => {
  range.addEventListener("input", () => updateRangeValue(range));
  updateRangeValue(range);
});
window.addEventListener("resize", () => {
  ranges.forEach((range) => {
    updateRangeValue(range);
  });
});
const firstName = document.getElementById("firstName");
const phoneNumber = document.getElementById("phoneNumber");
const from = document.getElementById("from");
const to = document.getElementById("to");
const titleCargo = document.getElementById("titleCargo");
const length = document.getElementById("length");
const width = document.getElementById("width");
const height = document.getElementById("height");
const weight = document.getElementById("weight");

const btn = document.querySelector(".form-btn");
function sendApplication(formData) {
  btn.textContent = "Пожалуйста подождите...";
  fetch("http://localhost:5000/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => {
      res.json().then((json) => {
        alert(json.message);
        firstName.value = "";
        phoneNumber.value = "";
        from.value = "";
        to.value = "";
        titleCargo.value = "";
      });
      console.log(res);
    })
    .catch(() => alert("Произошла ошибка при отправке заявки, попробуйте ещё раз или позднее"))
    .finally(() => {
      btn.textContent = "Оставить заявку";
    });
}

document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();

  const messageDiv = document.querySelector(".message");

  // Простая валидация
  if (!firstName.value || !phoneNumber.value || !from.value || !to.value || !titleCargo.value) {
    messageDiv.textContent = "Пожалуйста, заполните все поля.";
    messageDiv.style.color = "red";
    return;
  } else if (!event.target.checkbox.checked) {
    messageDiv.textContent = "Необходимо дать согласие с политикой конфиденциальности";
    messageDiv.style.color = "red";
    return;
  } else messageDiv.textContent = "";
  sendApplication({
    firstName: firstName.value,
    phoneNumber: phoneNumber.value,
    from: from.value,
    to: to.value,
    titleCargo: titleCargo.value,
    length: length.value,
    width: width.value,
    height: height.value,
    weight: weight.value,
  });
});

const burgerMenu = document.getElementById("burger");
const sideMenu = document.querySelector(".side-menu");
const sideMenuInner = document.querySelector(".side-menu__inner");

burgerMenu.addEventListener("click", () => {
  sideMenu.classList.toggle("show-side-menu");
  sideMenu.classList.toggle("hide-side-menu");
  burger.classList.toggle("active");
});

sideMenu.addEventListener("click", () => {
  sideMenu.classList.remove("show-side-menu");
  sideMenu.classList.toggle("hide-side-menu");
  burger.classList.toggle("active");
});
sideMenuInner.addEventListener("click", (e) => {
  e.stopPropagation();
});