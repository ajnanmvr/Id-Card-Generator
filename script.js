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
const filterButton = () => {
  let container = document.querySelector(".filterButtons");
  for (let i = 0; i < btns.length; i++) {
    container.insertAdjacentHTML(
      "beforeend",
      `<li class="${btns[i][0].replaceAll(" ", "-")}" onclick="filterData('${
        btns[i][0]
      }')">${btns[i][1]}</li>`
    );
  }
};

let studentData = [
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
];

let filterData = (key) => {
  let dataInfo = document.querySelector(".dataInfo");
  // Matching Data
  let finalData = studentData.filter((value) => value.section == key);
  // returns Complete Database is `$key` Doesn't Exsist
  if (!key) {
    finalData = studentData;
    dataInfo.style.opacity = "0";
  } else {
    dataInfo.style.opacity = "1";
  }

  // Creating HTML
  let layout = "";
  finalData.forEach(({ name, adno, section }) => {
    layout += `
    <div class="id_card">
        <div class="id_front">
            <div class="data_header">
                <p class="heading">Member Identity Card</p>
                <p class="isActive">Active Member</p>
                </div>
            <div class="id_data">
                <div class="id_image" id="image"
                    style="background:rgba(255, 255, 0, 0.247) url('./data/img/${adno}.jpg')" alt="Student Image"></div>
                <p class="name_adno_container">
                    <span class="name_container">Name: <span class="name">${name}</span> </span>
                    <span class="adno_container">Ad.No: <span class="adno">${adno}</span> </span>
                    </p>
                <p class="section_container">Section: <span class="section">${section}</span> </p>
                <div class="data_footer">
                    <p class="ValidDate_container">Valid Upto: <span class="section">07-06-2023</span> </p>
                    <p class="memNo_container">Membership Number: <span class="memNo">30/${adno}</span> </p>
                </div>
            </div>
        </div>
        <div class="id_back"></div>
    </div>
    `;
  });

  // Printing HTML
  document.querySelector("main").innerHTML = layout;

  // Printing Info
  let myInfo = document.querySelector(".info");
  let newInfo = `
  <table>
    <tr class="filteredData">
    <th>Filtered Data:</th>
    <td>${finalData.length}</td>
    </tr>
    <tr>
    <th>Filtering By:</th>
    <td>${key}</td>
    </tr>
    <tr class="totalData">
      <th>Total Data:</th>
      <td>${studentData.length}</td>
    </tr>
  </table>`;

  myInfo.innerHTML = newInfo;
};

filterData();

filterButton();
