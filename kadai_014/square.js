const square = (num) => {
  return num * num;
};

// 変数numに０〜10までのランダムな整数を代入する
let index = Math.floor(Math.random() * 11);
// console.log(num);
console.log(square(index));
