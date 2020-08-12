// Ipad
const ipadColor = [{
    'color': '太空灰色',
    'producting': 'img/ipad-2.png',
    'btncolor': 'img/finish-spacegray-201903.png'
},{
    'color': '銀色',
    'producting': 'img/ipad-1.png',
    'btncolor': 'img/finish-silver-201903.png'
},
{
    'color': '金色',
    'producting': 'img/ipad-3.png',
    'btncolor': 'img/finish-gold-201903.png'
}];

// Iphone

const iphoneprice = [24900, 26900, 30400]
const iphoneColor = [{
        'color': '白色',
        'producting': 'img/iphone11-white-select-2019.png',
        'btncolor': 'img/finish-white-201909.jpg'
    },
    {
        'color': '黑色',
        'producting': 'img/iphone11-black-select-2019.png',
        'btncolor': 'img/finish-black-201909.jpg'
    },
    {
        'color': '綠色',
        'producting': 'img/iphone11-green-select-2019.png',
        'btncolor': 'img/finish-green-201909.jpg'
    },
    {
        'color': '黃色',
        'producting': 'img/iphone11-yellow-select-2019.png',
        'btncolor': 'img/finish-yellow-201909.jpg'
    },
    {
        'color': '紫色',
        'producting': 'img/iphone11-purple-select-2019.png',
        'btncolor': 'img/finish-purple-201909.jpg'
    },
    {
        'color': '(PRODUCT)RED',
        'producting': 'img/iphone11-red-select-2019.png',
        'btncolor': 'img/finish-red-201909.jpg'
    }
];

function CreateColor() {
    let btn = document.createElement('button')

}

function Cleanbox() {
    let imgbox = document.getElementById('imgbox')
    imgbox.innerHTML = '';
}

function Clone(x) {
    let temp = document.getElementById('temp01')
    let imgbox = document.getElementById('imgbox')
    for (let i = 0; i < x.length; i++) {
        let clone = temp.content.cloneNode(true);        
        imgbox.appendChild(clone)
        let btn = document.getElementsByClassName('tempbtn')[i]
        btn.setAttribute('onclick',`Changeimg(${i})`)
        let img = document.getElementsByClassName('imgbox')[i]
        img.setAttribute('src', x[i].btncolor)
        let text = document.getElementsByClassName('textbox')[i]
        text.innerText = x[i].color
    }
}

// function Changeimg(item) {
//     console.log()
// }