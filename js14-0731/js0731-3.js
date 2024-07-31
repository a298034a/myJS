let myCity = document.querySelector('#city');

// 建立一個縣市陣列
let arrCity = ["台北市","新北市","桃園市"];
for (let i = 0; i < arrCity.length; i++) {
    myCity.innerHTML += `<option value="${arrCity[i]}">${arrCity[i]}</option>`;
}