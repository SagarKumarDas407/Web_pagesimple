let Navbar=document.querySelector(".navbar");

window.addEventListener("scroll", ()=>{
    let windowpoint=window.scrollY
    console.log(windowpoint)
   

    if(windowpoint > 200){
        Navbar.classList.add("sticky")
        Navbar.classList.add("downav")
       
    }
    else if( windowpoint > 50){
        Navbar.classList.add("upnav")
    }
    else{
        Navbar.classList.remove("sticky")
        Navbar.classList.remove("upnav")
        Navbar.classList.remove("downav")
    }
});


const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
