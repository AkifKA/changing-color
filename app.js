//? INPUTS CAPTURING AND DECLARATION

//! Inputting text with color names  
const colorsFromInput=document.querySelector(".colors-from-input-color");
const selectedColorFromInput=colorsFromInput.value;

//! Inputting text with RGB  
const colorsFromInputRGB=document.querySelector(".colors-from-input-color-rgb");
const selectedColorsFromInputRGB=colorsFromInputRGB.value;

//! Inputting text with HEX  
const colorsFromInputHEX=document.querySelector(".colors-from-input-color-hex");
const selectedColorsFromInputHEX=colorsFromInputHEX;

//? DECLARATION OF 140 COLORS
const colors={
id:0,
red:"red",
rgb: "(255, 0, 0)",
hex:"FF0000",
};


//? SELECT BOX CAPTURING AND DECLARATION
const colorsFromSelectBox=document.querySelector(".colors-from-select-box");
console.log(colorsFromSelectBox[colors.id].value);
// const selectedColorFromSelectBox=colorsFromSelectBox[colorsFromSelectBox.option].value;
// console.log(selectedColorFromSelectBox);


//? RESULT DISPLAY DIV CAPTURING AND DECLARATION
const resultDisplay=document.querySelector("result-display");







// console.log(colors.red);

colorsFromSelectBox.addEventListener("change",(e)=>{

console.log(e.target.value);



})
// const selectedColor=selectBoxColorName.options[select.selectedIndex];
// console.log(selectedColor);