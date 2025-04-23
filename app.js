const answer = document.querySelector(".answer")
const calcInput = document.querySelector(".calcInput").addEventListener("click",(event)=>{
    // answer.value();
    const targettedCloseButton = event.target.closest("button");
    if(targettedCloseButton){
        const btnValue = targettedCloseButton.value;
        if(btnValue== "C"){
            answer.value = "";
        }
        else if(btnValue== "="){
            answer.value= eval(answer.value);
        }
        else{
            answer.value= answer.value + btnValue;
        }
        
        // console.log(targettedCloseButton.value);
        
    }
    

    // console.log(event.target,);
})
