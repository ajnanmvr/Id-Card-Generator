
const filterButton = () => {
  let btns = [
    ["Secondary First Year", "1"],
    ["Secondary Second Year", "2"],
    ["Secondary Third Year", "3"],
    ["Secondary Fourth Year", "4"],
    ["Secondary Fifth Year", "5"],
    ["Senior Secondary First Year", "6"],
    ["Senior Secondary Second Year", "7"],
    ["Degree First Year", "8"],
    ["Degree Second Year", "9"],
    ["Degree Third Year", "10"],
  ];
  let container = document.querySelector(".filterButtons");
  for (let i = 0; i < btns.length; i++) {
    container.insertAdjacentHTML(
      "beforeend",`<li onclick="filterData('${btns[i][0]}')">${btns[i][1]}</li>`
    );
  }
};
filterButton();

var filterBtnContainer = document.querySelector(".filterButtons");
var filterBtns = filterBtnContainer.querySelectorAll("li");
for (var i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

const studentData = [
  {
    name: "Muhammed Ajnan P",
    adno: 3127,
    section: "Degree First Year",
  },
  {
    name: "Muhammed Niyas KP",
    adno: 3128,
    section: "Degree Second Year",
  },
  {
    name: "Muhammed Mirshad",
    adno: 3129,
    section: "Degree Second Year",
  },
  {
    name: "Muhammed Mirshad",
    adno: 3129,
    section: "Degree Second Year",
  },
  {
    name: "Muhammed Mirshad",
    adno: 3129,
    section: "Degree Second Year",
  },
  {
    name: "Muhammed Mirshad",
    adno: 3129,
    section: "Degree Second Year",
  },
];

 filterData = (key)=> {
  // Matching Data
  let finalData = studentData.filter((value) => value.section == key);

  // returns Complete Database is `$key` Doesn't Exsist
  if (!key) {
    finalData = studentData;
  }

  // Creating HTML
  let layout = "";
  finalData.forEach(({ name, adno, section }) => {
    layout += `<div class="id_card">
    <div class="id_front">
        <img class="id_image" id="image" src="./data/img/${adno}.png" alt="">
        <div class="id_data">
            <p class="name_container">Name: <span id="name">${name}</span> </p>
            <p class="adno_container">AdNo: <span id="adno">${adno}</span> </p>
            <p class="section_container">Section: <span id="section">${section}</span> </p>
            <p class="MemNo_container">Membership No: <span id="memNo">30/${adno}</span> </p>
        </div>
    </div>
    <div class="id_back"></div>
    </div>`;
  });

  // Printing HTML
  document.querySelector("main").innerHTML = layout;
};

filterData()