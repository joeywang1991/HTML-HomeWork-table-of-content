function initMap(LatLng) {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {
            lat: 25.046269,
            lng: 121.517551
        }
    });

    // map.data.loadGeoJson('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR03QVRRMDHgQC_XBIR62wBKePkGVs5kRyTMdaCpP032CjtFdu6uiA3m-Gc');

    map.data.setStyle(function (feature) { //設定 marker 圖案，和在甚麼條件下換圖案
        let mask_adult = feature.getProperty('mask_adult')
        let mask_child = feature.getProperty('mask_child')
        if ((mask_adult + mask_child) == 0) {
            return {
                icon: '/maskIcon_red_40px.png'
            }
        } else if ((mask_adult + mask_child) <= 1000) {
            return {
                icon: '/maskIcon_orange_40px.png'
            }
        } else {
            return {
                icon: '/maskIcon_green_40px.png'
            }
        }
    });

    var infowindow = new google.maps.InfoWindow();

    map.data.addListener('click', function (event) {
        //選取 JSON 檔案中資料的內容
        let name = event.feature.getProperty("name");
        let address = event.feature.getProperty('address');
        let phone = event.feature.getProperty('phone');
        let adult = event.feature.getProperty('mask_adult');
        let child = event.feature.getProperty('mask_child');
        let vs = event.feature.getProperty('note');

        //控制infowindow的內容，帶入HTML格式
        infowindow.setContent(`<div id="content">
                <h1 class="text-center">${name}</h1>
                <div id="bodyContent">
                    <p>地址: ${address}</p>
                    <p>電話: ${phone}</p>
                    <p>成人口罩: ${adult}</p>
                    <p>兒童口罩: ${child}</p>
                    <p>備註: ${vs}</p>
                </div>
            </div>`);
        infowindow.setPosition(event.feature.getGeometry().get());
        infowindow.setOptions({
            maxWidth: 600,
            minWidth: 300,
            pixelOffset: new google.maps.Size(0, -20) //控制infowindow 在marker上方的位置
        });
        infowindow.open(map);
    })
}

function $getcounties() {
    let counties = document.getElementById('inputcounties')
    let countiestext = counties.options[counties.selectedIndex].text;
    // console.log(countiestext);
    return countiestext;
}

function $gettown(json, ) {
    
}

function $clonetemplate(jsondata, selectitem) { //複製模板資料到mask裡面
    let template = document.getElementById('modules');
    let storemessage = document.getElementById('storemessage');
    let datasource = jsondata.features.getProperty(selectitem);
    console.log(datasource);
    // if (){
    // let clone = template.content.cloneNode(true);
    // }
    // storemessage.append(clone);
}

function $cleandiv() { //清除cardmask裡面的資料
    let storemessage = document.getElementById('storemessage')
    let towns = document.querySelector('#inputtowns')
    while (storemessage.firstChild) {
        storemessage.removeChild(storemessage.firstChild);
    }
    while (towns.firstChild) {
        towns.removeChild(towns.firstChild);
    }
}

//google map文件 Marker Clustering
// setcenter