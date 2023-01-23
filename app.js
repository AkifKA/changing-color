//? INPUTS CAPTURING AND DECLARATION

//! Inputting text with color names  
const inputColorName=document.getElementById("input-color-name");
const inputtedColor=inputColorName.value;

//! Inputting text with RGB  
const inputColorNameRGB=document.getElementById("input-color-name-rgb");
const inputtedColorRGB=inputColorNameRGB.value;

//! Inputting text with HEX  
const inputColorNameHEX=document.getElementById("input-color-name-rgb");
const inputtedColorHEX=inputColorNameHEX.value;


//? SELECT BOX CAPTURING AND DECLARATION
const selectBoxColorName=document.getElementById("select-box-color-names");
const selectedColor=selectBoxColorName.value;

//? RESULT DISPLAY DIV CAPTURING AND DECLARATION
const resultDisplay=document.querySelector("result-display");










selectBoxColorName.addEventListener("change",()=>{

console.log(selectedColor);
})
// const selectedColor=selectBoxColorName.options[select.selectedIndex];
// console.log(selectedColor);