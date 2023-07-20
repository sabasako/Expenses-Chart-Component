("use strict");

const chartComponents = document.querySelectorAll(".chart-components");
const price = document.querySelectorAll(".price");
const currentDay = new Date().getDay() - 1;

let i = 0;

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    chartComponents.forEach((el) => {
      if (currentDay === i) {
        chartComponents[i].classList.add("active");
      }
      price[i].textContent = `$${data[i].amount}`;
      chartComponents[i].style.height = `${data[i].amount * 2.5}px`;
      i++;
    });
  });
