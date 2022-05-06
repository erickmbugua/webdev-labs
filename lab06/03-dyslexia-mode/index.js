/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const dyslexiaMode = ev => {
  console.log("yep");
  const domElement = ev.currentTarget;
  if (domElement.dataset.pressed === "false"){
    document.querySelector('body').className = "dyslexia-mode";
    domElement.dataset.pressed = "true"
  }
  else{
    document.querySelector('body').className = "";
    domElement.dataset.pressed = "false"
  }
  
};


document.querySelector('#dyslexia-toggle').onclick = dyslexiaMode;