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
const buttonsSectionDiv=document.querySelector(".changing-random");
const button143Colors=document.querySelector(".button-143-colors");
const buttonRGB=document.querySelector(".button-rgb");
const buttonHEX=document.querySelector(".button-hex");


//? RESULT DISPLAY SECTION DIV CAPTURING AND DECLARATION
const resultDisplay=document.querySelector(".result-display");


//? RESULT CHOOSEN COLOR H3 CAPTURING AND DECLARATION
const choosenColor=document.querySelector(".choosen-color");

//?  DECLARATION OF 143 COLORS IN AN ARRAY

colors=[
    "indianred","lightcoral","lightcoral","salmon","darksalmon","lightsalmon","crimson","red","firebrick","darkred","pink","lightpink","hotpink","deeppink","mediumvioletred","palevioletred","lightsalmon","coral","tomato","orangered","darkorange","orange","gold","yellow","lightyellow","lemonchiffon","lightgoldenrodyellow","papayawhip","moccasin","peachpuff","palegoldenrod","khaki","darkkhaki","lavender","thistle","plum","violet","orchid","fuchsia","magenta","mediumorchid","mediumpurple","rebeccapurple","blueviolet","darkviolet","darkorchid","darkmagenta","purple","indigo","slateblue","darkslateblue","mediumslateblue","greenyellow","chartreuse","lawngreen","lime","limegreen","palegreen","lightgreen","mediumspringgreen","seagreen","forestgreen","green","darkgreen","yellowgreen","olivedrab","olive","darkolivegreen","mediumaquamarine","darkseagreen","lightseagreen","darkcyan","teal"
]


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
document.querySelector(".container").addEventListener("click",(e)=>{

if(e.target.classList.contains("button-143-colors")){
console.log("clicked");
const randomColor=Math.floor(Math.random()*142);
console.log(randomColor);
console.log(e.target.closest(".changing-manually"));
// console.log(e.target.parentElement.parentElement.parentElement.closest(".changing-with-select-box"));
}

})









