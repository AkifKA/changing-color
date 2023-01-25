//? DECLARATION OF INPUTS

//! Inputting text with color names  
const colorsFromInput=document.querySelector(".colors-from-input-color");


//! Inputting text with RGB  
const colorsFromInputRGB=document.querySelector(".colors-from-input-color-rgb");


//! Inputting text with HEX  
const colorsFromInputHEX=document.querySelector(".colors-from-input-color-hex");


//?  DECLARATION OF SELECT BOX 
const colorsFromSelectBox=document.querySelector(".colors-from-select-box");



//?  DECLARATION OF INPUTS AND SELECTBOX CONTAINER SECTION DIV FOR MANUALLY CHANGING
const inputsAndSelectBoxSectionDiv=document.querySelector(".changing-manually");


//?  DECLARATION OF BUTTONS CONTAINER SECTION DIV FOR RANDOM CHANGING
const buttonsSectionDiv=document.querySelector(".changing-random")

//? RESULT DISPLAY SECTION DIV CAPTURING AND DECLARATION
const resultDisplay=document.querySelector(".result-display");


//? RESULT CHOOSEN COLOR H3 CAPTURING AND DECLARATION
const choosenColor=document.querySelector(".choosen-color");


//?  CAPTURING OF INPUTS  CONTAINER SECTION DIV FOR RANDOM CHANGING
inputsAndSelectBoxSectionDiv.addEventListener("input",(e)=>{

    if(e.target.classList.contains("colors-from-input-color")){
        choosenColor.innerText=colorsFromInput.value.toUpperCase();
        resultDisplay.style.background=`${colorsFromInput.value}`;
    }

    else if(e.target.classList.contains("colors-from-input-color-rgb")){
        choosenColor.innerText=`rgb (${colorsFromInputRGB.value.toUpperCase()})`;
        resultDisplay.style.background=`rgb(${colorsFromInputRGB.value})`
    }
else if(e.target.classList.contains("colors-from-input-color-hex")){
    choosenColor.innerText=`#${colorsFromInputHEX.value.toUpperCase()}`;
    resultDisplay.style.background=`#${colorsFromInputHEX.value}`
}
})

colorsFromSelectBox.addEventListener("change",(e)=>{
    choosenColor.innerText=`${e.target[e.target.selectedIndex].text.toUpperCase()}`;
    resultDisplay.style.background=`${e.target.value}`

})




//?  CAPTURING OF BUTTONS CONTAINER SECTION DIV FOR RANDOM CHANGING
buttonsSectionDiv.addEventListener("click",(e)=>{
//


})






// colorsFromSelectBox.addEventListener("change",(e)=>{
//     const {selectedIndex}=e.target;
//     console.log(e.target.id);
//     resultDisplay.style.background=`${e.target.value}`
//     choosenColor.innerText=`${e.target[selectedIndex].text}`
//     })
    



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


