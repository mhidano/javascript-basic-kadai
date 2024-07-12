// 今日の日付を取得
const today = new Date();

// 年、月、日を取得
const [year, month, day] = [
  today.getFullYear(),
  today.getMonth() + 1, // 月は0基点のため+1
  today.getDate(),
];

// 形式を整えて表示
const formattedDate = `${year}年${month}月${day}日`;
console.log(formattedDate);
