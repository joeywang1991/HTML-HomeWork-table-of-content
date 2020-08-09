function Getrandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Createanswer(ans) {
    //更好的方法是 是用 set陣列
    for (let i = 0; i < 4;) {
        let num = Getrandom(0, 9);
        if ($.inArray(num, ans) == -1) {
            //$ 是jQuery的語法
            ans[i] = num;
            i++;
        }
    }
    let box = document.getElementById('box');
    let li = document.createElement('li');
    let text = document.createElement('span');
    box.appendChild(li);
    li.appendChild(text);
    text.innerText = '遊戲開始!!';

}

function Showanswer(ans) {
    let box = document.getElementById('box');
    let li = document.createElement('li');
    let text = document.createElement('span');
    box.appendChild(li);
    li.appendChild(text);
    text.innerText = '答案是: ' + ans.join('');
}

function Check(num, ans) {
    let a = 0,
        b = 0;


        
    let result = ans.filter((x) => {
        return num.indexOf(x) > -1;
    })
    console.log(result);
    result.forEach((x) => {
        if (ans.indexOf(x) == num.indexOf(x)) {
            a++;
        } else {
            b++;
        }
    });
    return `${a}A${b}B`
}

function Createli(result, guess) {
    let box = document.getElementById('box');
    let li = document.createElement('li');
    let badge = document.createElement('span');
    let text = document.createElement('span');
    box.appendChild(li);    
    if (guess.length != 4) {
        text.textContent = '請輸入四個數字喔!!';
    } else {
        li.appendChild(badge);
        badge.textContent = result;
        text.textContent = ' ' + guess;
        if (result == "4A0B") {
            badge.classList.add('badge', 'badge-success');
            text.textContent += '  你猜對惹!!';
        } else {
            badge.classList.add('badge', 'badge-danger');
        }
    }

    li.appendChild(text);
}

function Btnhidden(x) {
    let star = document.getElementById('star');
    console.log(star);
    if (x == true) {
        star.style.visibility = 'hidden';
    } else if (x == false) {
        star.style.visibility = 'visible';        
    }
}