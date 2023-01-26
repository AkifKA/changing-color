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
const buttonLightToDark=document.querySelector(".button-143-colors-l-d");
const buttonDarkToLight=document.querySelector(".button-143-colors-d-l");


let count1=0;
let count2=143;

//? RESULT DISPLAY SECTION DIV CAPTURING AND DECLARATION
const resultDisplay=document.querySelector(".result-display");


//? RESULT CHOOSEN COLOR H3 CAPTURING AND DECLARATION
const choosenColor=document.querySelector(".choosen-color");




//? buttonLightToDark ADD EVEN LİSTENER
buttonLightToDark.addEventListener("click",(e)=>{
count1++;

choosenColor.innerText=`${count1}. ${e.target.parentElement.parentElement.previousElementSibling.children[4].children[1][count1].text.toUpperCase()}`


resultDisplay.style.background=`${e.target.parentElement.parentElement.previousElementSibling.children[4].children[1][count1].value}`


})



//? buttonDarkToLight ADD EVEN LİSTENER
buttonDarkToLight.addEventListener("click",(e)=>{
count2--;


choosenColor.innerText=`${count2}. ${e.target.parentElement.parentElement.previousElementSibling.children[4].children[1][count2].text.toUpperCase()}`


resultDisplay.style.background=`${e.target.parentElement.parentElement.previousElementSibling.children[4].children[1][count2].value}`

console.log(count2);

})


//?  CAPTURING OF INPUTS CONTAINER SECTION  FOR RANDOM CHANGING
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


//? SELECT BOX CAPTURING FOR MANUEL CHANGING 
colorsFromSelectBox.addEventListener("change",(e)=>{
    choosenColor.innerText=`${e.target[e.target.selectedIndex].text.toUpperCase()}`;
    resultDisplay.style.background=`${e.target.value}`
    })
    

//?  CAPTURING OF BUTTONS CONTAINER SECTION  FOR RANDOM CHANGING
document.querySelector(".container").addEventListener("click",(e)=>{

//? DECLERATION OF HEX ARRAY 
const hex=["A","B","C","D","E","F",0,1,2,3,5,6,7,8,9];
//? RANDOM NUMBERS FOR HEX INDEX
const random1=Math.floor(Math.random() * 14);
const random2=Math.floor(Math.random() * 14);
const random3=Math.floor(Math.random() * 14);
const random4=Math.floor(Math.random() * 14);
const random5=Math.floor(Math.random() * 14);
const random6=Math.floor(Math.random() * 14);


if(e.target.classList.contains("button-143-colors")){

//? RANDOM NUBERS FOR RANDOM CHANGING OF 143 COLORS
const randomColorIndex=Math.floor(Math.random()*142);

//! CAPTURING SELECT BOX WITH FOREACH 
//! document.querySelectorAll(".colors-from-select-box").forEach(item=>{
//!    console.log(item[randomColorIndex].text);

//? CHOOSEN COLOR.INNERTEXT >> SELECT BOX.TEXT WITH e.target 
choosenColor.innerText=`${e.target.parentElement.parentElement.previousElementSibling.children[4].children[1][randomColorIndex].text.toUpperCase()}`

//? RESULT DISPLAY.BACKGROUND >> SELECTBOX[RANDOMCOLORINDEX].VALUE 
resultDisplay.style.background=`${e.target.parentElement.parentElement.previousElementSibling.children[4].children[1][randomColorIndex].value}`
}


else if(e.target.classList.contains("button-rgb")){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    choosenColor.innerText=`rgb(${red},${green},${blue})`
    resultDisplay.style.background=`rgb(${red},${green},${blue})`
}


else if(e.target.classList.contains("button-hex-3")){
    choosenColor.innerText=`#${hex[random1]}${hex[random2]}${hex[random3]}`
    resultDisplay.style.background=`#${hex[random1]}${hex[random2]}${hex[random3]}`
}

else if(e.target.classList.contains("button-hex-6")){

choosenColor.innerText=`#${hex[random1]}${hex[random2]}${hex[random3]}${hex[random4]}${hex[random5]}${hex[random6]}`

resultDisplay.style.background=`#${hex[random1]}${hex[random2]}${hex[random3]}${hex[random4]}${hex[random5]}${hex[random6]}`

}

});









