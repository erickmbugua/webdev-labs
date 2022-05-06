/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const makeDefault = () => {
   console.log("yeah1");
   document.querySelector('body').className = "";
};
const makeOcean = () => {
   console.log("yeah1");
   document.querySelector('body').className = "ocean";
}
const makeDesert = () => {
   console.log("yeah1");
   document.querySelector('body').className = "desert";
};

const makeHighContrast = () => {
   console.log("yeah1");
   document.querySelector('body').className = "high-contrast";
};


document.querySelector('#default').onclick = makeDefault;
document.querySelector('#ocean').onclick = makeOcean;
document.querySelector('#desert').onclick = makeDesert;
document.querySelector('#high-contrast').onclick = makeHighContrast;