/*
* Excercise 1
*
*/

const box = document.getElementById("color-block");

box.addEventListener ("click", () => {
    const boxColor = box.getAttribute ("class"); 
    if(boxColor === "color1") {
   box.setAttribute ("class", "color2");
   document.getElementById("color-name").innerHTML = "#80f08f";
    } else {
   box.setAttribute("class", "color1");
   document.getElementById("color-name").innerHTML = "#F08080";

    }
});




/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

const button = document.getElementById("convertbtn");
const fahInput = document.getElementById("f-input");


button.addEventListener ("click", () => {
 
 let fToCel = (fahInput.value - 32) * 5 / 9;

 document.getElementById("c-output").innerHTML = fToCel;

    
    //Calculate the temperature here

    //Send the calculated temperature to HTML

});