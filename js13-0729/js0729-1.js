// 取得元素節點
// 根據 id 屬性
// let myjs = document.getElementById('js');
// console.log(typeof myjs);
// console.log(myjs.innerHTML);
// console.log(myjs.textContent);
// console.log(document.querySelector('#js').textContent);

// // 根據 html 標籤
// let myli = document.getElementsByTagName('li');
// console.log(myli);
// // 取出 css
// console.log(myli.item(1).textContent);
// console.log(myli[1].textContent);

// // 顯示所有的 li
// for (let i = 0; i < myli.length; i++) {
//     console.log(myli.item(i).textContent);
//     console.log(myli[i].textContent);
// }

// console.log("---querySelector---");
// console.log(document.querySelector('h1'));
// console.log("---getElementsByTagName---");
// console.log(document.getElementsByTagName('h1').item(0).textContent);
// console.log(document.getElementsByTagName('h1')[0].textContent);

// 使用類別名稱
// let mySubjects = document.getElementsByClassName('subjects');
// console.log(mySubjects);
// for (let i = 0; i < mySubjects.length; i++) {
//     console.log(mySubjects.item(i).textContent);
//     console.log(mySubjects[i].textContent);
// }

// // 顯示指定的內容(必須有id) => html
// console.log(mySubjects['html'].textContent);

console.log(document.getElementById('p1').textContent);
console.log(document.querySelector('#p1').textContent);

// 取得 li 中的 的子元素中的第一個p
let myP = document.querySelectorAll('li>p');
console.log(myP);
console.log(myP[0].textContent);

// 取得 li 的子元素中的div下的第一個p
let myDivP = document.querySelectorAll('li>div>p');
console.log(myDivP);
console.log(myDivP[0].textContent);
