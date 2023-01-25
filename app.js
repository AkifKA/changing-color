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
const colors=[
{
id:0,
color:"Indian Red",
rgb: "(205, 92, 92)",
hex:"#CD5C5C",
},
{
id:1,
color:"Light Coral",
rgb: "(240, 128, 128)",
hex:"#F08080",
},
{
id:2,
color:"Salmon",
rgb: "(255, 0, 0)",
hex:"#FA8072",
},
{
id:3,
color:"Dark Salmon",
rgb: "(233, 150, 122)",
hex:"#E9967A",
},
{
id:4,
color:"LightSalmon",
rgb: "(255, 160, 122)",
hex:"#FFA07A",
},
{
id:5,
color:"Crimson",
rgb: "(220, 20, 60)",
hex:"#DC143C",
},
{
id:6,
color:"Red",
rgb: "(255, 0, 0)",
hex:"#FF0000",
},
{
id:7,
color:"Fire Brick",
rgb: "(178, 34, 34)",
hex:"#22222",
},
{
id:8,
color:"Dark Red",
rgb: "(139, 0, 0)",
hex:"#8B0000",
},
{
id:9,
color:"Pink",
rgb: "(255, 192, 203)",
hex:"#FFC0CB",
},





];


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