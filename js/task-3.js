function getElementWidth(content, padding, border) {
    const numberContent = Number.parseFloat(content);
    const numberPadding = Number.parseFloat(padding);
    const numberBorder = Number.parseFloat(border);
    const result = numberContent + 2 * numberPadding + 2 * numberBorder;
    console.log(result);

}
getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");

