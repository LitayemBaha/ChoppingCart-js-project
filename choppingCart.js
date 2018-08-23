let plus=Array.from(document.querySelectorAll('.plus'));
let modelNumber=Array.from(document.querySelectorAll('.model-number'));
let minus=Array.from(document.querySelectorAll('.minus'));
let modelPrice=Array.from(document.querySelectorAll('.model-price'));
let tab=[150,250,100];
let totalPrice=document.querySelector('.total-price');

for(let i=0;i<plus.length;i++)
  {
    plus[i].addEventListener("click",(event)=>{ 
      let valPlus=modelNumber[i].value;
      modelNumber[i].value=parseInt(valPlus)+1;
  modelPrice[i].value=parseInt(modelPrice[i].value)+tab[i]+"$";   
      totalPrice.value=parseInt(totalPrice.value)+tab[i]+"$";
  });
  
     minus[i].addEventListener("click",(event)=>{ 
       let valMinus=parseInt(modelNumber[i].value);
       if(valMinus>0){
          modelNumber[i].value=valMinus-1;
       }
       let valPrice=parseInt(modelPrice[i].value);
       if(valPrice>0){
         modelPrice[i].value=valPrice-tab[i]+"$";
        totalPrice.value=parseInt(totalPrice.value)-tab[i]+"$";

       }
  }); 
}

redHeart=document.querySelectorAll('.heart');
let actualColor="";
let newColor="";
for(let i of redHeart){
  i.addEventListener("mouseenter",(event)=>{ 
  actualColor=i.style.color;
  i.style.color="red";
  });
  i.addEventListener("mouseleave",(event)=>{ 
    if(newColor==="red")
      {i.style.color="red";}
    else
     {i.style.color="#aab8c2";}
   });
 i.addEventListener("click",(event)=>{ 
  if(actualColor==="red")
    {i.style.color="#aab8c2";  
     newColor="#aab8c2";
    }
  else
    {i.style.color="red";
     newColor="red";
    }
 });
}

delate=document.querySelectorAll('.delate');
for(let i of delate){
  i.addEventListener("click",(event)=>{ 
  i.parentNode.parentNode.remove(i);
  });
}

