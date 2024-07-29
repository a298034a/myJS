// 使用 name 屬性，取得元素內容
// let myDrinks = document.getElementsByName('drinks');
// console.log(myDrinks);

// for(let i = 0; i < myDrinks.length; i++){
//     console.log(myDrinks[i].value);
// }

// 取得勾選的項目內容
// 1. 找到按鈕
let myBtn = document.querySelector('#btn');
// 2. 監聽按鈕是否背按了(clisk => 左鍵一下的事件)
myBtn.addEventListener('click', () => {
    let arrResult = [];
    let arrResultNot = [];
    let myDrinks = document.getElementsByName('drinks');

    for (let i = 0; i < myDrinks.length; i++) {
        if (myDrinks[i].checked) {
            arrResult.push(myDrinks[i].value);
        }

        if (!myDrinks[i].checked) {
            arrResultNot.push(myDrinks[i].value);
        }
    }

    console.log("被勾選：" + arrResult);
    console.log("沒有被勾選：" + arrResultNot);
});