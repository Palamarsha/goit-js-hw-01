function getElementWidth(content, padding, border) {
const numberContent = Number.parseFloat(content);
const numberPadding = Number.parseFloat(padding);
const numberBorder = Number.parseFloat(border);
const result = numberContent + 2 * numberPadding + 2 * numberBorder;
return result
}
getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200