const Article=document.querySelectorAll(".article");
const Btn=document.querySelectorAll(".Btn");
Btn.forEach(function(btn){
 
  
    btn.addEventListener("click",function(e){
      Btn.forEach(function(btttn){
        btttn.classList.remove("bkg");
      })
      btn.classList.remove("bkg");
      const id =e.currentTarget.dataset.id;
      const dp=document.getElementById(id);
      Article.forEach(function(art){
        art.classList.add("display");
      })
      dp.classList.remove("display");
      e.target.classList.add("bkg");
    })
})






