var arr = ["rost", "top", 6];
var i = 0;
var ask = prompt("введите значение");

while (i < arr.length) {
  arr[arr.length -i] = arr[arr.length -i - 1];
  i++;
}
arr[0] = ask;
