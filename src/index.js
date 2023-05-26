import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

document.querySelectorAll("img").forEach(resim => {
  resim.addEventListener("mouseover", (e) => {
    e.target.style.filter = "grayscale(100%)";
  });
  resim.addEventListener("mouseout", (e) => {
    e.target.style.filter = "grayscale(0)";
  });
});


window.addEventListener("load", ()=>{
    setTimeout(()=>{
        document.querySelector("body").style.background="gray"
    },2000)
    
})

let handler = (e)=>{
    e.target.style.width = "50%"
}
let dblhandler = (e)=>{
    e.target.style.width = "100%"
}
document.querySelectorAll("img").forEach((resim)=>{
    resim.addEventListener("click", handler)
    resim.addEventListener("dblclick", dblhandler)
})

document.addEventListener("keydown",(event)=>{
    document.querySelectorAll("img").forEach((resim)=>{
        if (event.key === "a") {
            resim.removeEventListener("click", handler)
          }

    })
})
    
