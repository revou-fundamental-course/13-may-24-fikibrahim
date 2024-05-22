function openTab(tabName) {
  var i, tabContent, tabs;
  tabContent = document.getElementsByClassName("tab-content");
  tabs = document.getElementsByClassName("tab");

  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("active");
  }

  for (i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");
  event.currentTarget.classList.add("active");
}

function calculateArea() {
  var base = document.getElementById("base").value;
  var height = document.getElementById("height").value;
  if (base && height) {
    var area = 0.5 * base * height;
    document.getElementById("area-result").innerText = "Luas Segitiga: " + area;
  } else {
    document.getElementById("area-result").innerText =
      "Harap masukkan alas dan tinggi segitiga!";
  }
}

function calculatePerimeter() {
  var side1 = document.getElementById("side1").value;
  var side2 = document.getElementById("side2").value;
  var side3 = document.getElementById("side3").value;
  if (side1 && side2 && side3) {
    var perimeter = parseFloat(side1) + parseFloat(side2) + parseFloat(side3);
    document.getElementById("perimeter-result").innerText =
      "Keliling Segitiga: " + perimeter;
  } else {
    document.getElementById("perimeter-result").innerText =
      "Harap masukkan ketiga sisi segitiga!";
  }
}

function resetValues() {
  document.getElementById("base").value = "";
  document.getElementById("height").value = "";
  document.getElementById("side1").value = "";
  document.getElementById("side2").value = "";
  document.getElementById("side3").value = "";

  document.getElementById("area-result").innerText = "";
  document.getElementById("perimeter-result").innerText = "";

  document.getElementById("reset-confirmation").innerText =
    "Data berhasil direset!";
}

document.getElementById('current-year').innerText = new Date().getFullYear();
