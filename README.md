# myJS

上課練習的檔案

## js01-認識 JavaScript

## js02-變數 常數 if-else

## js10-亂數

## js11-亂數函式、物件基礎
以取得樂透號碼為例

## js12-物件樣板、陣列物件、其餘參數

## js13-DOM
getElementById() => 根據 id 屬性<br>
getElementByName() => 根據 name 屬性
```
大多應用在表單元素
選項按鈕(radio)
核取方塊(checkBox)
下拉式清單(comboBox)
```
getElementByTagName() => 根據 HTML 標籤名稱<br>
getElementByClassName() => 根據類別名稱<br>
querySelector() => 根據 CSS 選擇器取得第一個元素<br>
querySelectorAll() => 根據 CSS 選擇器取得全部元素

## Homework

### Bingo Number

內定一個數字結果 => let bingoNum = 99<br>
彈出輸入視窗，輸入數字<br>
最多能夠猜3次<br>

三次內答對，顯示結果如下：
```
第1次：11
第2次：99
答對了
```

三次內答錯，顯示結果如下：
```
第1次：11
第2次：88
第3次：66
挑戰失敗
```

### ex3 猜數字，直到猜對才結束
舉例：<br>
```
亂數值：60
第1次：50 => 太小了（提示：50-100）
第2次：90 => 太大了（提示：50-90）
第3次：80 => 太大了（提示：50-80）
第4次：55 => 太小了（提示：55-80）
第5次：60 => 猜對了
```

### FiveStar 巢狀迴圈
印出
```
*
**
***
****
*****
```

