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
    name: "Muhammed Hussain",
    section: "Degree Final Year",
    memNo: "30/293012",
  },
  {
    adNo: "3014",
    name: "Muhammed Favvaz P",
    section: "Degree Final Year",
    memNo: "30/293014",
  },
  {
    adNo: "2947",
    name: "Muhammed Murshid A",
    section: "Degree Final Year",
    memNo: "30/292947",
  },
  {
    adNo: "2844",
    name: "Muhammed Shaheer Ak",
    section: "Degree Final Year",
    memNo: "30/292844",
  },
  {
    adNo: "2951",
    name: "Muhammed Fasil T",
    section: "Degree Final Year",
    memNo: "30/292951",
  },
  {
    adNo: "2946",
    name: "Shuhaib A",
    section: "Degree Final Year",
    memNo: "30/292946",
  },
  {
    adNo: "2976",
    name: "Mohammed Siraj Ap",
    section: "Degree Final Year",
    memNo: "30/292976",
  },
  {
    adNo: "2975",
    name: "Muhammed Fuad Mp",
    section: "Degree Final Year",
    memNo: "30/292975",
  },
  {
    adNo: "2963",
    name: "Muhammed Sadique",
    section: "Degree Final Year",
    memNo: "30/292963",
  },
  {
    adNo: "2983",
    name: "Ramil A Backer Mr",
    section: "Degree Final Year",
    memNo: "30/292983",
  },
  {
    adNo: "3015",
    name: "Athhar Jahan",
    section: "Degree Final Year",
    memNo: "30/293015",
  },
  {
    adNo: "2980",
    name: "Mohamed Irfan",
    section: "Degree Final Year",
    memNo: "30/292980",
  },
  {
    adNo: "2931",
    name: "Muhammed Rabeeh M",
    section: "Degree Final Year",
    memNo: "30/292931",
  },
  {
    adNo: "2933",
    name: "Mohammed Afthab",
    section: "Degree Final Year",
    memNo: "30/292933",
  },
  {
    adNo: "3001",
    name: "Mohammed Arshad",
    section: "Degree Final Year",
    memNo: "30/293001",
  },
  {
    adNo: "2993",
    name: "Muhammed Swalih",
    section: "Degree Final Year",
    memNo: "30/292993",
  },
  {
    adNo: "3401",
    name: "Muhammed Ali A",
    section: "Degree Final Year",
    memNo: "30/293401",
  },
  {
    adNo: "2957",
    name: "Najmudheen C",
    section: "Degree Final Year",
    memNo: "30/292957",
  },
  {
    adNo: "2974",
    name: "Muhammed Jasim Muneer Cp",
    section: "Degree Final Year",
    memNo: "30/292974",
  },
  {
    adNo: "3010",
    name: "Muhammed Munavir",
    section: "Degree Final Year",
    memNo: "30/293010",
  },
  {
    adNo: "2960",
    name: "Mohamed Zakariya Ps",
    section: "Degree Final Year",
    memNo: "30/292960",
  },
  {
    adNo: "3404",
    name: "Mohammed Anas An",
    section: "Degree Final Year",
    memNo: "30/293404",
  },
  {
    adNo: "2941",
    name: "Mohammed Afsal K",
    section: "Degree Final Year",
    memNo: "30/292941",
  },
  {
    adNo: "2979",
    name: "Muhammed Abdul Hakeem",
    section: "Degree Final Year",
    memNo: "30/292979",
  },
  {
    adNo: "3004",
    name: "Swalih",
    section: "Degree Final Year",
    memNo: "30/293004",
  },
  {
    adNo: "2956",
    name: "Khalid",
    section: "Degree Final Year",
    memNo: "30/292956",
  },
  {
    adNo: "2982",
    name: "Anshif Shaheen Vp",
    section: "Degree Final Year",
    memNo: "30/292982",
  },
  {
    adNo: "2950",
    name: "Mohamed Sabith",
    section: "Degree Final Year",
    memNo: "30/292950",
  },
  {
    adNo: "2969",
    name: "Muhammed Junaid P",
    section: "Degree Final Year",
    memNo: "30/292969",
  },
  {
    adNo: "2958",
    name: "Salmanul Faris Kt",
    section: "Degree Final Year",
    memNo: "30/292958",
  },
  {
    adNo: "3017",
    name: "Muhammed Raees Mk",
    section: "Degree Final Year",
    memNo: "30/293017",
  },
  {
    adNo: "2981",
    name: "Mohammed Siyadh A",
    section: "Degree Final Year",
    memNo: "30/292981",
  },
  {
    adNo: "2966",
    name: "Mohamed Shakeeb",
    section: "Degree Final Year",
    memNo: "30/292966",
  },
  {
    adNo: "2992",
    name: "Ibrahim Badusha C",
    section: "Degree Final Year",
    memNo: "30/292992",
  },
  {
    adNo: "2944",
    name: "Adil Samnas",
    section: "Degree Final Year",
    memNo: "30/292944",
  },
  {
    adNo: "2973",
    name: "Abdul Haseeb K",
    section: "Degree Final Year",
    memNo: "30/292973",
  },
  {
    adNo: "2970",
    name: "Muhammad Shareef Mk",
    section: "Degree Final Year",
    memNo: "30/292970",
  },
  {
    adNo: "2998",
    name: "Muhammed Sahal",
    section: "Degree Final Year",
    memNo: "30/292998",
  },
  {
    adNo: "2954",
    name: "Mohammed Sanif P",
    section: "Degree Final Year",
    memNo: "30/292954",
  },
  {
    adNo: "2990",
    name: "Ahmed Shafeeque",
    section: "Degree Final Year",
    memNo: "30/292990",
  },
  {
    adNo: "2991",
    name: "Sadhique",
    section: "Degree Final Year",
    memNo: "30/292991",
  },
  {
    adNo: "3009",
    name: "Fadil Mohyudheen",
    section: "Degree Final Year",
    memNo: "30/293009",
  },
  {
    adNo: "2936",
    name: "Mohammed Razi Tk",
    section: "Degree Final Year",
    memNo: "30/292936",
  },
  {
    adNo: "2978",
    name: "Sayyid Ahammed Razi Kn",
    section: "Degree Final Year",
    memNo: "30/292978",
  },
  {
    adNo: "2959",
    name: "Muhammed Shahin Pk",
    section: "Degree Final Year",
    memNo: "30/292959",
  },
  {
    adNo: "3003",
    name: "Muhammed Muhsin",
    section: "Degree Final Year",
    memNo: "30/293003",
  },
  {
    adNo: "3011",
    name: "Muhmad Muzammil M",
    section: "Degree Final Year",
    memNo: "30/293011",
  },
  {
    adNo: "2996",
    name: "Muhammad Baheej Kt",
    section: "Degree Final Year",
    memNo: "30/292996",
  },
  {
    adNo: "2953",
    name: "Ajsal Kt",
    section: "Degree Final Year",
    memNo: "30/292953",
  },
  {
    adNo: "2972",
    name: "Muhammed Favaz A",
    section: "Degree Final Year",
    memNo: "30/292972",
  },
  {
    adNo: "3008",
    name: "Muhmmed Iqbal Tt",
    section: "Degree Final Year",
    memNo: "30/293008",
  },
  {
    adNo: "3353",
    name: "Muhammed Sinan K",
    section: "Degree First Year",
    memNo: "30/313353",
  },
  {
    adNo: "3328",
    name: "Muhammed Bujair C P",
    section: "Degree First Year",
    memNo: "30/313328",
  },
  {
    adNo: "3365",
    name: "Muhammed Basil C",
    section: "Degree First Year",
    memNo: "30/313365",
  },
  {
    adNo: "3312",
    name: "Muhammed Dilshad A",
    section: "Degree First Year",
    memNo: "30/313312",
  },
  {
    adNo: "3316",
    name: "Jamshid K",
    section: "Degree First Year",
    memNo: "30/313316",
  },
  {
    adNo: "3171",
    name: "Abdul Basith V",
    section: "Degree First Year",
    memNo: "30/313171",
  },
  {
    adNo: "3310",
    name: "Muzammil Siddique",
    section: "Degree First Year",
    memNo: "30/313310",
  },
  {
    adNo: "3350",
    name: "Abdul Basith Pk",
    section: "Degree First Year",
    memNo: "30/313350",
  },
  {
    adNo: "3896",
    name: "Muhammed Rasil C",
    section: "Degree First Year",
    memNo: "30/313896",
  },
  {
    adNo: "3372",
    name: "Muhammed Theshreef",
    section: "Degree First Year",
    memNo: "30/313372",
  },
  {
    adNo: "3343",
    name: "Jamnas Muhammed Pc",
    section: "Degree First Year",
    memNo: "30/313343",
  },
  {
    adNo: "3369",
    name: "Abdullah Al Mubarak",
    section: "Degree First Year",
    memNo: "30/313369",
  },
  {
    adNo: "3331",
    name: "Farsin Vp",
    section: "Degree First Year",
    memNo: "30/313331",
  },
  {
    adNo: "3314",
    name: "Mohammed Afsal Ap",
    section: "Degree First Year",
    memNo: "30/313314",
  },
  {
    adNo: "3366",
    name: "Muhammed Afzal Kv",
    section: "Degree First Year",
    memNo: "30/313366",
  },
  {
    adNo: "3364",
    name: "Subhan V",
    section: "Degree First Year",
    memNo: "30/313364",
  },
  {
    adNo: "3371",
    name: "Shameel",
    section: "Degree First Year",
    memNo: "30/313371",
  },
  {
    adNo: "3653",
    name: "Muhammed Luquman A",
    section: "Degree First Year",
    memNo: "30/313653",
  },
  {
    adNo: "3383",
    name: "Muhammed Ishaque K",
    section: "Degree First Year",
    memNo: "30/313383",
  },
  {
    adNo: "3347",
    name: "Muhammed Riyan P",
    section: "Degree First Year",
    memNo: "30/313347",
  },
  {
    adNo: "3322",
    name: "Muhammad Anas U",
    section: "Degree First Year",
    memNo: "30/313322",
  },
  {
    adNo: "3351",
    name: "Mohammed Salih P",
    section: "Degree First Year",
    memNo: "30/313351",
  },
  {
    adNo: "3340",
    name: "Sahadudheen M",
    section: "Degree First Year",
    memNo: "30/313340",
  },
  {
    adNo: "3325",
    name: "Anvar Hussain Ms",
    section: "Degree First Year",
    memNo: "30/313325",
  },
  {
    adNo: "3315",
    name: "Muhammed Jasir K",
    section: "Degree First Year",
    memNo: "30/313315",
  },
  {
    adNo: "3894",
    name: "Muhammed Nasweeh",
    section: "Degree First Year",
    memNo: "30/313894",
  },
  {
    adNo: "3360",
    name: "Muhammad Rabeeh Kt",
    section: "Degree First Year",
    memNo: "30/313360",
  },
  {
    adNo: "3373",
    name: "Muhammed Mufeed",
    section: "Degree First Year",
    memNo: "30/313373",
  },
  {
    adNo: "3165",
    name: "Muhammed Nufais",
    section: "Degree First Year",
    memNo: "30/313165",
  },
  {
    adNo: "3377",
    name: "Muhammed Adil K",
    section: "Degree First Year",
    memNo: "30/313377",
  },
  {
    adNo: "3309",
    name: "Muhammed Shabeeb Tp",
    section: "Degree First Year",
    memNo: "30/313309",
  },
  {
    adNo: "3897",
    name: "Mohammed Salih P",
    section: "Degree First Year",
    memNo: "30/313897",
  },
  {
    adNo: "3324",
    name: "Nihal Muhamed Vp",
    section: "Degree First Year",
    memNo: "30/313324",
  },
  {
    adNo: "3352",
    name: "Muhammed Thenshir",
    section: "Degree First Year",
    memNo: "30/313352",
  },
  {
    adNo: "3892",
    name: "Muhammed Mannah Ca",
    section: "Degree First Year",
    memNo: "30/313892",
  },
  {
    adNo: "3151",
    name: "Mohammed Munavvir",
    section: "Degree First Year",
    memNo: "30/313151",
  },
  {
    adNo: "3359",
    name: "Muhammed Jafin Tvc",
    section: "Degree First Year",
    memNo: "30/313359",
  },
  {
    adNo: "3320",
    name: "Muhammed Sinan P",
    section: "Degree First Year",
    memNo: "30/313320",
  },
  {
    adNo: "3898",
    name: "Salmanul Faris K",
    section: "Degree First Year",
    memNo: "30/313898",
  },
  {
    adNo: "3319",
    name: "Muhammed Nizam C.H",
    section: "Degree First Year",
    memNo: "30/313319",
  },
  {
    adNo: "3355",
    name: "Abdunnafih Mp",
    section: "Degree First Year",
    memNo: "30/313355",
  },
  {
    adNo: "3390",
    name: "Muhammed Inshad K",
    section: "Degree First Year",
    memNo: "30/313390",
  },
  {
    adNo: "2962",
    name: "Mohammed Musthajab",
    section: "Degree First Year",
    memNo: "30/312962",
  },
  {
    adNo: "3388",
    name: "Muhammed Ya'Qoob P",
    section: "Degree First Year",
    memNo: "30/313388",
  },
  {
    adNo: "3345",
    name: "Muhammed Ameer",
    section: "Degree First Year",
    memNo: "30/313345",
  },
  {
    adNo: "2949",
    name: "Muhammed Swalih Pp",
    section: "Degree First Year",
    memNo: "30/312949",
  },
  {
    adNo: "3329",
    name: "Abdul Malik Kc",
    section: "Degree First Year",
    memNo: "30/313329",
  },
  {
    adNo: "3374",
    name: "Muhammed Zulfikar",
    section: "Degree First Year",
    memNo: "30/313374",
  },
  {
    adNo: "3317",
    name: "Mohammed Sabith M",
    section: "Degree First Year",
    memNo: "30/313317",
  },
  {
    adNo: "3125",
    name: "Saifudheen Mt",
    section: "Degree First Year",
    memNo: "30/313125",
  },
  {
    adNo: "3308",
    name: "Abdul Bari Nc",
    section: "Degree First Year",
    memNo: "30/313308",
  },
  {
    adNo: "3370",
    name: "Muhammed Abdu Rahman",
    section: "Degree First Year",
    memNo: "30/313370",
  },
  {
    adNo: "3341",
    name: "Muhammed Shabeeb Kk",
    section: "Degree First Year",
    memNo: "30/313341",
  },
  {
    adNo: "3381",
    name: "Muhamed Ihsan N",
    section: "Degree First Year",
    memNo: "30/313381",
  },
  {
    adNo: "3891",
    name: "Muhammad Sahal Tk",
    section: "Degree First Year",
    memNo: "30/313891",
  },
  {
    adNo: "3348",
    name: "Mohammed Nihal P",
    section: "Degree First Year",
    memNo: "30/313348",
  },
  {
    adNo: "3326",
    name: "Muhammad Raoof",
    section: "Degree First Year",
    memNo: "30/313326",
  },
  {
    adNo: "3379",
    name: "Muhammed Thanseer",
    section: "Degree First Year",
    memNo: "30/313379",
  },
  {
    adNo: "3361",
    name: "Mohammed Swalih K",
    section: "Degree First Year",
    memNo: "30/313361",
  },
  {
    adNo: "3895",
    name: "Muhammed Nihal Ok",
    section: "Degree First Year",
    memNo: "30/313895",
  },
  {
    adNo: "3645",
    name: "Mohammed Ashiq As",
    section: "Degree Second Year",
    memNo: "30/303645",
  },
  {
    adNo: "3158",
    name: "Nazim Ali Mohamed Ka",
    section: "Degree Second Year",
    memNo: "30/303158",
  },
  {
    adNo: "3185",
    name: "Shamil Kc",
    section: "Degree Second Year",
    memNo: "30/303185",
  },
  {
    adNo: "3161",
    name: "Muhammed Munawar Pt",
    section: "Degree Second Year",
    memNo: "30/303161",
  },
  {
    adNo: "2945",
    name: "Ya'Qoob A",
    section: "Degree Second Year",
    memNo: "30/302945",
  },
  {
    adNo: "2999",
    name: "Muhammed Ansas Ip",
    section: "Degree Second Year",
    memNo: "30/302999",
  },
  {
    adNo: "3831",
    name: "Sahed Cp",
    section: "Degree Second Year",
    memNo: "30/303831",
  },
  {
    adNo: "3135",
    name: "Basith Mahmood Pc",
    section: "Degree Second Year",
    memNo: "30/303135",
  },
  {
    adNo: "3647",
    name: "Muhammed Bilal N",
    section: "Degree Second Year",
    memNo: "30/303647",
  },
  {
    adNo: "3129",
    name: "Muhammed Mirshad K",
    section: "Degree Second Year",
    memNo: "30/303129",
  },
  {
    adNo: "3646",
    name: "Naseehudheen S",
    section: "Degree Second Year",
    memNo: "30/303646",
  },
  {
    adNo: "3821",
    name: "Muhammed Adnan B",
    section: "Degree Second Year",
    memNo: "30/303821",
  },
  {
    adNo: "3180",
    name: "Midlaj P",
    section: "Degree Second Year",
    memNo: "30/303180",
  },
  {
    adNo: "3132",
    name: "Muhammed Unais K",
    section: "Degree Second Year",
    memNo: "30/303132",
  },
  {
    adNo: "3195",
    name: "Muhammed Raoof",
    section: "Degree Second Year",
    memNo: "30/303195",
  },
  {
    adNo: "3177",
    name: "Muhammed Abdul Basith",
    section: "Degree Second Year",
    memNo: "30/303177",
  },
  {
    adNo: "3202",
    name: "Jouhar Jahan K",
    section: "Degree Second Year",
    memNo: "30/303202",
  },
  {
    adNo: "3127",
    name: "Muhammed Ajnan P",
    section: "Degree Second Year",
    memNo: "30/303127",
  },
  {
    adNo: "3141",
    name: "Muhammed Rashid At",
    section: "Degree Second Year",
    memNo: "30/303141",
  },
  {
    adNo: "3169",
    name: "Muhammad Rishad Mt",
    section: "Degree Second Year",
    memNo: "30/303169",
  },
  {
    adNo: "2935",
    name: "Muzammil Pm",
    section: "Degree Second Year",
    memNo: "30/302935",
  },
  {
    adNo: "3191",
    name: "Rashid Abdul Azeez A",
    section: "Degree Second Year",
    memNo: "30/303191",
  },
  {
    adNo: "2964",
    name: "Muhammed Adil C",
    section: "Degree Second Year",
    memNo: "30/302964",
  },
  {
    adNo: "3149",
    name: "Salman Faris Abdussalam P",
    section: "Degree Second Year",
    memNo: "30/303149",
  },
  {
    adNo: "3181",
    name: "Muhammed Shabeeb M",
    section: "Degree Second Year",
    memNo: "30/303181",
  },
  {
    adNo: "3200",
    name: "Mohammed Samnoon M",
    section: "Degree Second Year",
    memNo: "30/303200",
  },
  {
    adNo: "2934",
    name: "Muhammed Nihal I",
    section: "Degree Second Year",
    memNo: "30/302934",
  },
  {
    adNo: "3652",
    name: "Bilal Muhammeed A",
    section: "Degree Second Year",
    memNo: "30/303652",
  },
  {
    adNo: "3126",
    name: "Muhammed Althaf Pk",
    section: "Degree Second Year",
    memNo: "30/303126",
  },
  {
    adNo: "3174",
    name: "Muhammed Rasmil Ct",
    section: "Degree Second Year",
    memNo: "30/303174",
  },
  {
    adNo: "3128",
    name: "Muhammed Niyas Kp",
    section: "Degree Second Year",
    memNo: "30/303128",
  },
  {
    adNo: "3818",
    name: "Hafiz Jamal Ej",
    section: "Degree Second Year",
    memNo: "30/303818",
  },
  {
    adNo: "3816",
    name: "Ameer Suhail K",
    section: "Degree Second Year",
    memNo: "30/303816",
  },
  {
    adNo: "2948",
    name: "Muhammed Ameer C",
    section: "Degree Second Year",
    memNo: "30/302948",
  },
  {
    adNo: "3162",
    name: "Fayizul Hasan Ak",
    section: "Degree Second Year",
    memNo: "30/303162",
  },
  {
    adNo: "3204",
    name: "Muhammed Althaf Aa",
    section: "Degree Second Year",
    memNo: "30/303204",
  },
  {
    adNo: "3143",
    name: "Nashbil Ahammed Km",
    section: "Degree Second Year",
    memNo: "30/303143",
  },
  {
    adNo: "3822",
    name: "Muhammed Aflah Kk",
    section: "Degree Second Year",
    memNo: "30/303822",
  },
  {
    adNo: "3829",
    name: "Muhammed Thoufeeq Et",
    section: "Degree Second Year",
    memNo: "30/303829",
  },
  {
    adNo: "3196",
    name: "Mubashir T",
    section: "Degree Second Year",
    memNo: "30/303196",
  },
  {
    adNo: "3192",
    name: "Muhammad Jaseer T",
    section: "Degree Second Year",
    memNo: "30/303192",
  },
  {
    adNo: "3815",
    name: "Althaf Ali P",
    section: "Degree Second Year",
    memNo: "30/303815",
  },
  {
    adNo: "3186",
    name: "Mohmmed Shibili K",
    section: "Degree Second Year",
    memNo: "30/303186",
  },
  {
    adNo: "2968",
    name: "Mohammed Afsal",
    section: "Degree Second Year",
    memNo: "30/302968",
  },
  {
    adNo: "3827",
    name: "Muhammed Shafeeq T",
    section: "Degree Second Year",
    memNo: "30/303827",
  },
  {
    adNo: "3199",
    name: "Muhammed Swalih M",
    section: "Degree Second Year",
    memNo: "30/303199",
  },
  {
    adNo: "3190",
    name: "Abdulla Sinan T",
    section: "Degree Second Year",
    memNo: "30/303190",
  },
  {
    adNo: "3651",
    name: "Faizal A",
    section: "Degree Second Year",
    memNo: "30/303651",
  },
  {
    adNo: "2997",
    name: "Muhammed Sahal Mk",
    section: "Degree Second Year",
    memNo: "30/302997",
  },
  {
    adNo: "3826",
    name: "Muhammed Naseel M",
    section: "Degree Second Year",
    memNo: "30/303826",
  },
  {
    adNo: "3153",
    name: "Abdul Raoof",
    section: "Degree Second Year",
    memNo: "30/303153",
  },
  {
    adNo: "3650",
    name: "Sharafath Ms",
    section: "Degree Second Year",
    memNo: "30/303650",
  },
  {
    adNo: "3194",
    name: "Muhamed Aslam Farhan U",
    section: "Degree Second Year",
    memNo: "30/303194",
  },
  {
    adNo: "3138",
    name: "Muhammed Janish Nehyan P",
    section: "Degree Second Year",
    memNo: "30/303138",
  },
  {
    adNo: "3183",
    name: "Badusha Ta",
    section: "Degree Second Year",
    memNo: "30/303183",
  },
  {
    adNo: "3168",
    name: "Irshad P",
    section: "Degree Second Year",
    memNo: "30/303168",
  },
  {
    adNo: "3131",
    name: "Mohammed Mishab Mp",
    section: "Degree Second Year",
    memNo: "30/303131",
  },
  {
    adNo: "3187",
    name: "Muhammed Sinan K",
    section: "Degree Second Year",
    memNo: "30/303187",
  },
  {
    adNo: "3139",
    name: "Muhammed Shibli C",
    section: "Degree Second Year",
    memNo: "30/303139",
  },
  {
    adNo: "3813",
    name: "Abdulla K",
    section: "Degree Second Year",
    memNo: "30/303813",
  },
  {
    adNo: "3198",
    name: "Nawwaf V",
    section: "Degree Second Year",
    memNo: "30/303198",
  },
  {
    adNo: "3140",
    name: "Aboobacker Shad",
    section: "Degree Second Year",
    memNo: "30/303140",
  },
  {
    adNo: "3641",
    name: "Abdulla A",
    section: "Degree Second Year",
    memNo: "30/303641",
  },
  {
    adNo: "3814",
    name: "Afsal K",
    section: "Degree Second Year",
    memNo: "30/303814",
  },
  {
    adNo: "3825",
    name: "Muhammed Junaid Kv",
    section: "Degree Second Year",
    memNo: "30/303825",
  },
  {
    adNo: "3144",
    name: "Muhammed Fayis Pv",
    section: "Degree Second Year",
    memNo: "30/303144",
  },
  {
    adNo: "2828",
    name: "Muhammed Farhan P",
    section: "Degree Second Year",
    memNo: "30/302828",
  },
  {
    adNo: "3832",
    name: "Ziyad Tp",
    section: "Degree Second Year",
    memNo: "30/303832",
  },
  {
    adNo: "3156",
    name: "Muhammed Naseef Kp",
    section: "Degree Second Year",
    memNo: "30/303156",
  },
  {
    adNo: "3648",
    name: "Swabir H",
    section: "Degree Second Year",
    memNo: "30/303648",
  },
  {
    adNo: "3820",
    name: "Muhammed Junaid Kk",
    section: "Degree Second Year",
    memNo: "30/303820",
  },
  {
    adNo: "3424",
    name: "Majid Pk",
    section: "Senior Secondary Final Year",
    memNo: "30/323424",
  },
  {
    adNo: "3451",
    name: "Muhammed Shamir T",
    section: "Senior Secondary Final Year",
    memNo: "30/323451",
  },
  {
    adNo: "3367",
    name: "Shareef T",
    section: "Senior Secondary Final Year",
    memNo: "30/323367",
  },
  {
    adNo: "3464",
    name: "Muhammed Afsal N",
    section: "Senior Secondary Final Year",
    memNo: "30/323464",
  },
  {
    adNo: "3441",
    name: "Fahmeed Khan Ep",
    section: "Senior Secondary Final Year",
    memNo: "30/323441",
  },
  {
    adNo: "3490",
    name: "Fawaz Muhammed Vs",
    section: "Senior Secondary Final Year",
    memNo: "30/323490",
  },
  {
    adNo: "3382",
    name: "Amjad Moosa Pk",
    section: "Senior Secondary Final Year",
    memNo: "30/323382",
  },
  {
    adNo: "3430",
    name: "Mohammed Muzammil E",
    section: "Senior Secondary Final Year",
    memNo: "30/323430",
  },
  {
    adNo: "3450",
    name: "Ahmad Razi Pt",
    section: "Senior Secondary Final Year",
    memNo: "30/323450",
  },
  {
    adNo: "3433",
    name: "Muhammed Swadiq",
    section: "Senior Secondary Final Year",
    memNo: "30/323433",
  },
  {
    adNo: "3432",
    name: "Muhammed Midlaj Av",
    section: "Senior Secondary Final Year",
    memNo: "30/323432",
  },
  {
    adNo: "3358",
    name: "Muhammed Farhan Ev",
    section: "Senior Secondary Final Year",
    memNo: "30/323358",
  },
  {
    adNo: "3485",
    name: "Muhammed Muflih K",
    section: "Senior Secondary Final Year",
    memNo: "30/323485",
  },
  {
    adNo: "3468",
    name: "Labeeb Sp",
    section: "Senior Secondary Final Year",
    memNo: "30/323468",
  },
  {
    adNo: "3346",
    name: "Muhammed Nihal Pa",
    section: "Senior Secondary Final Year",
    memNo: "30/323346",
  },
  {
    adNo: "3436",
    name: "Muhammed Shibili A",
    section: "Senior Secondary Final Year",
    memNo: "30/323436",
  },
  {
    adNo: "3418",
    name: "Abdulla Sinan Pt",
    section: "Senior Secondary Final Year",
    memNo: "30/323418",
  },
  {
    adNo: "3414",
    name: "Muhammed Hisham Ac",
    section: "Senior Secondary Final Year",
    memNo: "30/323414",
  },
  {
    adNo: "3447",
    name: "Muhammed Nufail Kp",
    section: "Senior Secondary Final Year",
    memNo: "30/323447",
  },
  {
    adNo: "3457",
    name: "Muhammed Sufyan Mp",
    section: "Senior Secondary Final Year",
    memNo: "30/323457",
  },
  {
    adNo: "3426",
    name: "Muhammed Nazeeb N",
    section: "Senior Secondary Final Year",
    memNo: "30/323426",
  },
  {
    adNo: "3428",
    name: "Muhammed Sinan Kt",
    section: "Senior Secondary Final Year",
    memNo: "30/323428",
  },
  {
    adNo: "3416",
    name: "Swalih Minhaj U",
    section: "Senior Secondary Final Year",
    memNo: "30/323416",
  },
  {
    adNo: "3336",
    name: "Mohammed Maflooh K",
    section: "Senior Secondary Final Year",
    memNo: "30/323336",
  },
  {
    adNo: "3476",
    name: "Jishil K",
    section: "Senior Secondary Final Year",
    memNo: "30/323476",
  },
  {
    adNo: "3342",
    name: "Nahid K",
    section: "Senior Secondary Final Year",
    memNo: "30/323342",
  },
  {
    adNo: "3461",
    name: "Sayyid Miqdad Hasani P",
    section: "Senior Secondary Final Year",
    memNo: "30/323461",
  },
  {
    adNo: "3417",
    name: "Midhlaj Pm",
    section: "Senior Secondary Final Year",
    memNo: "30/323417",
  },
  {
    adNo: "3376",
    name: "Muhammed Nabeel Np",
    section: "Senior Secondary Final Year",
    memNo: "30/323376",
  },
  {
    adNo: "3440",
    name: "Muhammed Aslam Vt",
    section: "Senior Secondary Final Year",
    memNo: "30/323440",
  },
  {
    adNo: "3460",
    name: "Javad Ahmad Bilal P",
    section: "Senior Secondary Final Year",
    memNo: "30/323460",
  },
  {
    adNo: "3484",
    name: "Mohammed Aslam Kv",
    section: "Senior Secondary Final Year",
    memNo: "30/323484",
  },
  {
    adNo: "3321",
    name: "Muhammed Dilfas Pt",
    section: "Senior Secondary Final Year",
    memNo: "30/323321",
  },
  {
    adNo: "3415",
    name: "Arshad Mp",
    section: "Senior Secondary Final Year",
    memNo: "30/323415",
  },
  {
    adNo: "3453",
    name: "Muhammed Habeeb",
    section: "Senior Secondary Final Year",
    memNo: "30/323453",
  },
  {
    adNo: "3483",
    name: "Mohammed Rabeeh P",
    section: "Senior Secondary Final Year",
    memNo: "30/323483",
  },
  {
    adNo: "3427",
    name: "Ashmil Ashraf Kp",
    section: "Senior Secondary Final Year",
    memNo: "30/323427",
  },
  {
    adNo: "3344",
    name: "Mohammed Ramshad U",
    section: "Senior Secondary Final Year",
    memNo: "30/323344",
  },
  {
    adNo: "3420",
    name: "Abdul Basith Vp",
    section: "Senior Secondary Final Year",
    memNo: "30/323420",
  },
  {
    adNo: "3412",
    name: "Sayyid Muhammed Miqdad Jifri",
    section: "Senior Secondary Final Year",
    memNo: "30/323412",
  },
  {
    adNo: "3439",
    name: "Muhammed Sahl Pp",
    section: "Senior Secondary Final Year",
    memNo: "30/323439",
  },
  {
    adNo: "3409",
    name: "Muhammed Irfan K",
    section: "Senior Secondary Final Year",
    memNo: "30/323409",
  },
  {
    adNo: "3410",
    name: "Muhammed Masroor P",
    section: "Senior Secondary Final Year",
    memNo: "30/323410",
  },
  {
    adNo: "3471",
    name: "Muhammed Shammas",
    section: "Senior Secondary Final Year",
    memNo: "30/323471",
  },
  {
    adNo: "3419",
    name: "Farhan C",
    section: "Senior Secondary Final Year",
    memNo: "30/323419",
  },
  {
    adNo: "3363",
    name: "Muhammed Rabeeh K",
    section: "Senior Secondary Final Year",
    memNo: "30/323363",
  },
  {
    adNo: "3452",
    name: "Muhammed Nafeel",
    section: "Senior Secondary Final Year",
    memNo: "30/323452",
  },
  {
    adNo: "3437",
    name: "Muhammed Shakeeb T",
    section: "Senior Secondary Final Year",
    memNo: "30/323437",
  },
  {
    adNo: "3442",
    name: "Abdul Raoof Ca",
    section: "Senior Secondary Final Year",
    memNo: "30/323442",
  },
  {
    adNo: "3463",
    name: "Munawir Ali K",
    section: "Senior Secondary Final Year",
    memNo: "30/323463",
  },
  {
    adNo: "3323",
    name: "Mohammed Rabeeh P",
    section: "Senior Secondary Final Year",
    memNo: "30/323323",
  },
  {
    adNo: "3475",
    name: "Ahmad Shameem Kp",
    section: "Senior Secondary Final Year",
    memNo: "30/323475",
  },
  {
    adNo: "3465",
    name: "Muhammed Midlaj Ms",
    section: "Senior Secondary Final Year",
    memNo: "30/323465",
  },
  {
    adNo: "3206",
    name: "Muhammed Junaid Kt",
    section: "Senior Secondary Final Year",
    memNo: "30/323206",
  },
  {
    adNo: "3422",
    name: "Abdul Muhaimin Pt",
    section: "Senior Secondary Final Year",
    memNo: "30/323422",
  },
  {
    adNo: "3470",
    name: "Mohammed Raees K",
    section: "Senior Secondary Final Year",
    memNo: "30/323470",
  },
  {
    adNo: "3467",
    name: "Muhammed Naseeh Mc",
    section: "Senior Secondary Final Year",
    memNo: "30/323467",
  },
  {
    adNo: "3458",
    name: "Muhammed Bisher Kc",
    section: "Senior Secondary Final Year",
    memNo: "30/323458",
  },
  {
    adNo: "3481",
    name: "Minhaj P",
    section: "Senior Secondary Final Year",
    memNo: "30/323481",
  },
  {
    adNo: "Null3",
    name: "Null",
    section: "Senior Secondary Final Year",
    memNo: "Null",
  },
  {
    adNo: "Null",
    name: "Null",
    section: "Senior Secondary Final Year",
    memNo: "Null",
  },
  {
    adNo: "Null",
    name: "Null",
    section: "Senior Secondary Final Year",
    memNo: "Null",
  },
  {
    adNo: "Null",
    name: "Null",
    section: "Senior Secondary Final Year",
    memNo: "Null",
  },
  {
    adNo: "Null",
    name: "Null",
    section: "Senior Secondary Final Year",
    memNo: "Null",
  },
  {
    adNo: "Null",
    name: "Null",
    section: "Senior Secondary Final Year",
    memNo: "Null",
  },
  {
    adNo: "Null",
    name: "Null",
    section: "Senior Secondary Final Year",
    memNo: "Null",
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
    layout += `<div class="id_front">
    <div class="hadi_dot"></div>
            <div class="data_header">
                <p class="heading">Member Identity Card</p>
                <p class="isActive">Active Member</p>
                </div>
            <div class="id_data">
                <div class="id_image" id="image"
                    style="background:red url('./data/img/${
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
        </div>`;
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
