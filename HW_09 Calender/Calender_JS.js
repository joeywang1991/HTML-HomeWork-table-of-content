
const montharrayyy = ['January','February','March','April','May','June','July','August','September','October','November','December']

function Createtrtd(x, y) {
    let tbody = document.getElementsByTagName('tbody')[0];
    let day = 1 - x; //判斷 1號在星期幾
    let row = Math.ceil((x + y ) / 7); //計算有幾個星期

    for (let i = 0; i < row; i++) {
        let tr = document.createElement('tr');
        for (let n = 0; n < 7; n++) {
            let td = document.createElement('td');
            if (day >= 1 && day <= y) {
                td.innerText = day;
                td.classList.add('canhover')
                td.setAttribute('data-toggle','modal')
                td.setAttribute('data-target','#Modal01')
            }
            day = day + 1;
            tr.append(td);
        }
        tbody.append(tr);
    }
}

function Cleanpage() {
    let tbody = document.getElementsByTagName('tbody')[0];
    tbody.innerHTML = "";
}

function Getdate(year,month) {

    // 取得當前月份
    let getmonth = new Date(year,month,1);
    // 取得當前月份的天數
    let lastdate = new Date(year, (month + 1), 0);

    Createtrtd(getmonth.getDay(), lastdate.getDate());

    document.getElementById('title').innerText=`${year}年  ${montharrayyy[month]}`;
}

function Savedata(){
    let item = document.getElementById('exampleInputitem')
    let time = document.getElementById('exampleInputtime')
    console.log(item.value)
    console.log(time.value)

}

function Savelocalstorage(x,y){
    let item = {
        thing: x,
        time: y
    }
}