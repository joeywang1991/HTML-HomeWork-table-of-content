// var virus = {
//     Taiean: ['455', '440', '7'],
//     America: ['397萬', '116萬', '14.4萬'],
//     Brazil: ['217萬', '147萬', '8.15萬'],
//     India: ['119萬', '75.3萬', '2.87萬'],
//     Russia: ['78.9萬', '57.2萬', '1.27萬']
// }

// var taiwan = ['455', '440', '7'];
// var america = ['397萬', '116萬', '14.4萬'];
// var brazil = ['217萬', '147萬', '8.15萬'];
// var india = ['119萬', '75.3萬', '2.87萬'];
// var russia = ['78.9萬', '57.2萬', '1.27萬'];

// var virus = [taiwan, america, brazil, india, russia];
// console.log(virus);


let covid = [{
        country: '台灣',
        sick: 455,
        cure: 440,
        death: 7
    },
    {
        country: '美國',
        sick: 3970000,
        cure: 1160000,
        death: 144000
    },
    {
        country: '巴西',
        sick: 2170000,
        cure: 1470000,
        death: 81500
    },
    {
        country: '印度',
        sick: 1190000,
        cure: 753000,
        death: 28700
    },
    {
        country: '俄羅斯',
        sick: 789000,
        cure: 572000,
        death: 12700
    }
]


let country = document.querySelectorAll("tbody tr td:first-child");
let sick = document.querySelectorAll("tbody tr td:nth-child(2)");
let cure = document.querySelectorAll("tbody tr td:nth-child(3)");
let death = document.querySelectorAll("tbody tr td:last-child");
for (let i = 0; i < covid.length; i++) {
    country[i].innerText = covid[i].country;
    sick[i].innerText = covid[i].sick;
    cure[i].innerText = covid[i].cure;
    death[i].innerText = covid[i].death;
}

sick[covid.length].innerText = covid.map(x => x.sick).reduce(function(pre,cur){return pre + cur});

cure[covid.length].innerText = covid.map(x => x.cure).reduce(function(pre,cur){return pre + cur});

death[covid.length].innerText = covid.map(x => x.death).reduce(function(pre,cur){return pre + cur});
