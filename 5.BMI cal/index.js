const inputhEl = document.getElementById("inputh");
const inputwEl = document.getElementById("inputw");
// const suggestEl = document.getElementById("suggest");
const summaryEl = document.getElementById("summary");
const HeightEl = document.getElementById("Height");
const WeightEl = document.getElementById("Weight");
const bmiEl = document.getElementById("bmi");
const btnEl = document.getElementById("btn");
// var heightvalue = 1;
// var weightvalue =1 ;

// inputhEl.addEventListener("change",(heightinput)=>{
//     HeightEl.innerText = heightinput ;
//     //height = heightinput;
// });

btnEl.addEventListener("click",getbmi);

function getbmi(){
    try{
        //check its not string
        if(inputhEl.value*(1)==inputhEl.value && inputwEl.value*(1)==inputwEl.value ){
            summaryEl.style.display = "block";
            //HeightEl.innerText = height ;
            
            HeightEl.innerText = (inputhEl.value)/100 ;
            WeightEl.innerText = (inputwEl.value) ;
            bmiEl.innerText = (inputwEl.value)/(((inputhEl.value)/100)^2) ;
            }
            else{
                summaryEl.style.display = "none";
            }
    }
    catch(error){
        console.log(error);
    }
    
}

//พิม ALT+96 = `
