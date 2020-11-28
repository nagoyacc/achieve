function add(i, j) {
  let sum = i + j;
  return sum;
}
console.log(add(2,3));




function isOverTen(i) {
  if (i >= 10) { // 10以上であればtrue
    return true;
  } else { // 10未満
    return false;
  }
}
console.log(isOverTen(10)); // 10以上なのでtrue
console.log(isOverTen(8)); // 10未満なのでfalse





function divide(i, j) {
  if (j === 0) {
    return "error";
  } else {
    return i / j;
  }
}
console.log(divide(2, 5)); // 0.4
console.log(divide(2, 0)); // error



function showResult(i, j) {
  let result = divide(i, j); // divide関数の結果をresult変数に入れる
  if (result === "error") { // 結果が文字列 "error" だったらそのまま出力(割り切れない場合のため)
    return result;
  } else { // 割り切れている場合はresultに100をかける
    return `${result * 100}パーセントです`;
  }
}
console.log(showResult(2, 6)); // 50パーセントです