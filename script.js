let btns = [
  ["Secondary First Year", "1"],
  ["Secondary Second Year", "2"],
  ["Secondary Third Year", "3"],
  ["Secondary Fourth Year", "4"],
  ["Secondary Fifth Year", "5"],
  ["Senior Secondary First Year", "6"],
  ["Senior Secondary Final Year", "7"],
  ["Degree First Year", "8"],
  ["Degree Second Year", "9"],
  ["Degree Final Year", "10"],
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
    adNo: "3012",
    name: "MUHAMMED HUSSAIN",
    section: "Degree Final Year",
    memNo: "30/293012",
  },
  {
    adNo: "3645",
    name: "MOHAMMED ASHIQ AS",
    section: "Degree Second Year",
    memNo: "30/303645",
  },
  {
    adNo: "3158",
    name: "NAZIM ALI MOHAMED KA",
    section: "Degree Second Year",
    memNo: "30/303158",
  },
  {
    adNo: "3353",
    name: "MUHAMMED SINAN K",
    section: "Degree First Year",
    memNo: "30/313353",
  },
  {
    adNo: "3328",
    name: "MUHAMMED BUJAIR C P",
    section: "Degree First Year",
    memNo: "30/313328",
  },
  {
    adNo: "3353",
    name: "MUHAMMED SINAN K",
    section: "Degree First Year",
    memNo: "30/313353",
  },
  {
    adNo: "3328",
    name: "MUHAMMED BUJAIR C P",
    section: "Degree First Year",
    memNo: "30/313328",
  },
  {
    adNo: "3353",
    name: "MUHAMMED SINAN K",
    section: "Degree First Year",
    memNo: "30/313353",
  },
  {
    adNo: "3328",
    name: "MUHAMMED BUJAIR C P",
    section: "Degree First Year",
    memNo: "30/313328",
  },
  {
    adNo: "3353",
    name: "MUHAMMED SINAN K",
    section: "Degree First Year",
    memNo: "30/313353",
  },
  {
    adNo: "3328",
    name: "MUHAMMED BUJAIR C P",
    section: "Degree First Year",
    memNo: "30/313328",
  },
  {
    adNo: "3353",
    name: "MUHAMMED SINAN K",
    section: "Degree First Year",
    memNo: "30/313353",
  },
  {
    adNo: "3328",
    name: "MUHAMMED BUJAIR C P",
    section: "Degree First Year",
    memNo: "30/313328",
  },
  {
    adNo: "3353",
    name: "MUHAMMED SINAN K",
    section: "Degree First Year",
    memNo: "30/313353",
  },
  {
    adNo: "3328",
    name: "MUHAMMED BUJAIR C P",
    section: "Degree First Year",
    memNo: "30/313328",
  },
  {
    adNo: "3353",
    name: "MUHAMMED SINAN K",
    section: "Degree First Year",
    memNo: "30/313353",
  },
  {
    adNo: "3328",
    name: "MUHAMMED BUJAIR C P",
    section: "Degree First Year",
    memNo: "30/313328",
  },
  {
    adNo: "3353",
    name: "MUHAMMED SINAN K",
    section: "Degree First Year",
    memNo: "30/313353",
  },
  {
    adNo: "3328",
    name: "MUHAMMED BUJAIR C P",
    section: "Degree First Year",
    memNo: "30/313328",
  },
  {
    adNo: "3353",
    name: "MUHAMMED SINAN K",
    section: "Degree First Year",
    memNo: "30/313353",
  },
  {
    adNo: "3328",
    name: "MUHAMMED BUJAIR C P",
    section: "Degree First Year",
    memNo: "30/313328",
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
  finalData.forEach(({ name, adNo, section, memNo }) => {
    layout += `
        <div class="id_front">
            <div class="data_header">
                <p class="heading">Member Identity Card</p>
                <p class="isActive">Active Member</p>
                </div>
            <div class="id_data">
                <div class="id_image" id="image"
                    style="background:rgba(255, 255, 0, 0.247) url('./data/img/${
                      section + "/" + adNo
                    }.jpg')" alt="Student Image"></div>
                <p class="name_adNo_container">
                    <span class="name_container">Name: <span class="name">${name}</span> </span>
                    <span class="adNo_container">Ad.No: <span class="adNo">${adNo}</span> </span>
                    </p>
                <p class="section_container">Section: <span class="section">${section}</span> </p>
                <div class="data_footer">
                    <p class="ValidDate_container">Valid Upto: <span class="section">07-06-2023</span> </p>
                    <p class="memNo_container">Membership Number: <span class="memNo">${memNo}</span> </p>
                </div>
            </div>
        </div>
        <div class="id_back"></div>
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
