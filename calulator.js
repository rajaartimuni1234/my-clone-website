let screen =document.getElementById("screen");
let buttons= document.querySelectorAll("button");
let screenValue='';
for(item of buttons){
    item.addEventListener('click', (e)=>{
       buttonText=e.target.innerText;
        
        console.log(buttonText);

        if (buttonText=='x'){
         buttonText='*';
         screenValue+=buttonText;
         screen.value=screenValue;
         
        }
    
        else if (buttonText=='='){
             try{
                screen.value=eval(screenValue);
                console.log(eval(screenValue));
                screenValue=screen.value;
            
             }
             catch(err) {
                screenValue='';
               screen.value='error';
              
             }
             }
        else if(buttonText=='C'){
            screen.value="";
            window.location.reload();
            
        }
        else if(buttonText=='D'){
            
             screenValue=screenValue.slice(0,-1);
             screen.value=screenValue;

        }

        else {
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}