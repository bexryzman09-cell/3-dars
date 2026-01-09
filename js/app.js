const box=document.querySelector(".box");

const btn=document.createElement("button");
btn.textContent="Reload Page";

box.appendChild(btn);

btn.addEventListener(("click"),()=>{
   window.location.reload();
})