const result = document.getElementById("resultText");
const calculation = document.getElementById("calculationText");
function insert(num) {
  calculation.textContent += num;
  console.log(num);
}
// clear button
document.getElementById("clr").addEventListener("click", function () {
  calculation.textContent = "";
  result.textContent = 0;
});
//last digit clear
document.getElementById("back").addEventListener("click", function () {
  var val = calculation.textContent;
  calculation.textContent = val.slice(0,- 1);
});
// equal button
document.getElementById("ans").addEventListener("click", function () {
  var val = calculation.textContent;
  result.textContent = eval(val);
  calculation.textContent = result.textContent;
});
