const makeBigger = () => {
   console.log("yeah1");
   document.querySelector('.content').style.fontSize = "3.0em";
   document.querySelector('h1').style.fontSize = "3.0em";
}
const makeSmaller = () => {
   console.log("yeah2")
   document.querySelector('.content').style.fontSize = "0.5em";
   document.querySelector('h1').style.fontSize = "0.5em";
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);