//取得送出按鈕(擇一)
//let myBtn = document.getElementById('btn');
let myBtn = document.querySelector('#btn');

myBtn.addEventListener('click', () => {
    let result = "";
    //取得科目全部
    let subjects = document.getElementsByName('subject');
    //使用迴圈逐一檢查是否被選取 => ckecked
    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].checked) {
            //取得選項按鈕的值
            result = subjects[i].value;
            //因為是單選，所以找到後就結束迴圈
            break;
        }
    }
    console.log('科目：' + result);
});