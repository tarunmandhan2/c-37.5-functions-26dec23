"use strict";

//?  Q1. Add three Numbers
document.querySelector("#btn1").addEventListener("click", () => {
  let num1 = Number(document.querySelector("#num1").value);
  let num2 = Number(document.querySelector("#num2").value);
  let num3 = Number(document.querySelector("#num3").value);
  if (num1 <= 0 && num2 <= 0 && num3 <= 0) {
    document.querySelector("#output1").innerHTML = "Please fill All inputs";
    document.querySelector("#output1").style.backgroundColor = "#f6a0a0";
  } else if (num1 <= 0) {
    document.querySelector("#output1").innerHTML = "Please fill 1st inputs";
    document.querySelector("#output1").style.backgroundColor = "#f8f92fb0";
  } else if (num2 <= 0) {
    document.querySelector("#output1").innerHTML = "Please fill 2nd inputs";
    document.querySelector("#output1").style.backgroundColor = "#f8f92fb0";
  } else if (num3 <= 0) {
    document.querySelector("#output1").innerHTML = "Please fill 3rd inputs";
    document.querySelector("#output1").style.backgroundColor = "#f8f92fb0";
  } else {
    num1 += num2 + num3;
    document.querySelector("#output1").innerHTML = `Total: ${num1}`;
    document.querySelector("#output1").style.backgroundColor = "#0cdf753a";
  }
});

//todo 2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//? Q2. Check mean of three numbers
document.querySelector("#btn2").addEventListener("click", () => {
  let mean1 = Number(document.querySelector("#mean1").value);
  let mean2 = Number(document.querySelector("#mean2").value);
  let mean3 = Number(document.querySelector("#mean3").value);
  if (mean1 <= 0 && mean2 <= 0 && mean3 <= 0) {
    document.querySelector("#output2").innerHTML =
      "Please fill All mean values";
    document.querySelector("#output2").style.backgroundColor = "#f6a0a0";
  } else if (mean1 <= 0) {
    document.querySelector("#output2").innerHTML = "Please fill 1st mean value";
    document.querySelector("#output2").style.backgroundColor = "#f8f92fb0";
  } else if (mean2 <= 0) {
    document.querySelector("#output2").innerHTML = "Please fill 2nd mean value";
    document.querySelector("#output2").style.backgroundColor = "#f8f92fb0";
  } else if (mean3 <= 0) {
    document.querySelector("#output2").innerHTML = "Please fill 3rd mean value";
    document.querySelector("#output2").style.backgroundColor = "#f8f92fb0";
  } else {
    mean1 = (mean1 + mean2 + mean3) / 3;
    document.querySelector(
      "#output2"
    ).innerHTML = `Mean value : ${mean1.toFixed(2)}`;
    document.querySelector("#output2").style.backgroundColor = "#0cdf753a";
  }
});

//todo 3~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//? Q3. Calculate year from age
document.querySelector("#btn3").addEventListener("click", () => {
  const age = +document.querySelector("#birthyear").value;
  const curryear = new Date().getFullYear();
  if (age >= 1 && age <= 77) {
    let dobyear = curryear - age;
    document.querySelector(
      "#output3"
    ).innerHTML = `Your birth year is : ${dobyear}`;
    document.querySelector("#output3").style.backgroundColor = "#0cdf753a";
  } else {
    document.querySelector("#output3").innerHTML = "Invalid age";
    document.querySelector("#output3").style.backgroundColor = "#f6a0a0";
  }
});

//todo 4~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//? Q4. Check area of rectangle, square, circle.
document.querySelector("#btn4").addEventListener("click", () => {
  let width4 = +document.querySelector("#width4").value;
  let heigth4 = +document.querySelector("#heigth4").value;
  let area4 = width4 * heigth4;
  document.querySelector("#output4").innerHTML = area4;
});
document.querySelector("#btn4_2").addEventListener("click", () => {
  let side4 = +document.querySelector("#side4").value;
  let area4_2 = Math.pow(side4, 2);
  document.querySelector("#output4_2").innerHTML = area4_2;
});
document.querySelector("#btn4_3").addEventListener("click", () => {
  let radius4 = +document.querySelector("#radius4").value;
  let area4_3 = (Math.pow(radius4, 2) * Math.PI).toFixed(2);
  document.querySelector("#output4_3").innerHTML = area4_3;
});

//todo 5~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//? Q5. Check perimeter of rectangle and square
document.querySelector("#btn5").addEventListener("click", () => {
  let width5 = Number(document.querySelector("#width5").value);
  let heigth5 = +document.querySelector("#heigth5").value;
  let area5 = (width5 + heigth5) * 2;
  document.querySelector("#output5").innerHTML = area5;
});
document.querySelector("#btn5_2").addEventListener("click", () => {
  let side5 = +document.querySelector("#side5").value;
  let area5_2 = side5 * 4;
  document.querySelector("#output5_2").innerHTML = area5_2;
});

//todo 6~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//? Q6. Check BMI of user using weight and height. wt(kg) / (h*h(m))
document.querySelector("#btn6").addEventListener("click", () => bmi());
const bmi = () => {
  let weight6 = +document.querySelector("#weight6").value;
  let heigth6 = +document.querySelector("#heigth6").value;
  heigth6 = heigth6 / 100; //* here convert cm to meter
  let bmi = (weight6 / heigth6 ** 2).toFixed(1);
  document.querySelector("#output6").innerHTML = `BMI =${bmi} kg/m<sup>2</sup>`;
  document.querySelector("#bmi_result").value = bmi;
};

//todo 7~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//? Q7. Convert Temperature in F to C . ( fahrenheit to celsius )
document.querySelector("#btn7").addEventListener("click", () => f_cel());
const f_cel = () => {
  let fahrenheit = +document.querySelector("#fahrenheit").value;
  let celsius = (((fahrenheit - 32) * 5) / 9).toFixed(1);
  document.querySelector("#output7").innerHTML = `${celsius} °C `;
};

//todo 7~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//? Q 8. Convert miles to kms.
document.querySelector("#btn8").addEventListener("click", () => milesToKm());
const milesToKm = () => {
  let miles = +document.querySelector("#miles").value;
  let milesToKm = (miles * 1.609).toFixed(1);
  document.querySelector("#output8").innerHTML = `${milesToKm} Kms`;
};
