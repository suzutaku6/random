// script.js

// // ランダムな数字を生成して表示する関数
// function displayRandomNumber() {
//   var randomNumber = Math.floor(1000 + Math.random() * 9000); // 0から99までのランダムな数を生成
//   document.getElementById('number').innerText = randomNumber;
// }

// function displayRandomNumberAnnser() {
//   var Anser = Math.floor(1000 + Math.random() * 9000); // 0から99までのランダムな数を生成
//   document.getElementById('anser').innerText = addOneToEachDigit(Anser);
// }

function generateRandomNumber() {
  return Math.floor(1000 + Math.random() * 9000); // 1000から9999までのランダムな数を生成
}
function incrementNumber(number) {
  // 数字を文字列に変換して各桁に+1を加え、再度数値に変換する
  var incrementedNumber = String(number).split('').map(function(digit) {
    var newDigit = (parseInt(digit) + 1) % 10; // 10で割った余りを取ることで0〜9の範囲に収める
    return String(newDigit);
  }).join('');

  while (incrementedNumber.length < 4) {
    incrementedNumber = "0" + incrementedNumber;
  }
  return parseInt(incrementedNumber);
}

window.onload = function() {
  // 最初のランダムな数字を生成
  var initialRandomNumber = generateRandomNumber();
  // 各桁に+1を加えた数字を表示
  document.getElementById('number').innerText = initialRandomNumber;
  document.getElementById('anser').innerText = ("A.  " + incrementNumber(initialRandomNumber));
  // 2秒ごとにランダムな数字を更新
  setInterval(function() {
    var initialRandomNumber = generateRandomNumber();
    // 各桁に+1を加えた数字を表示
    document.getElementById('number').innerText = initialRandomNumber;
      // 各桁に+1を加えた数字を表示
    document.getElementById('anser').innerText = ("A.  " + incrementNumber(initialRandomNumber));
  }, 2000);
}

