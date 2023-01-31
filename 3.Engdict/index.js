const inputEl = document.getElementById("input");
const suggestEl = document.getElementById("suggest");
const containermeaningEl = document.getElementById("containermeaning");
const titleEl = document.getElementById("title");
const meaningEl =  document.getElementById("meaning");
const audioEl = document.getElementById("audio");



inputEl.addEventListener("change",(word)=>{
    //console.log(word.target.value);
    // if(word.target.value === "change"){
    //     console.log(word.target.value);
    // }
   //if (word.target.value && word.key === "Enter"){
        fetchapi(word.target.value);
   //}
    
});

async function fetchapi(inputword){
    try{
    containermeaningEl.style.display = "none";
    suggestEl.innerText = `Searching the meaning of "${inputword}"`;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputword}`;
    const result = await fetch(url).then((res)=>res.json());
    console.log(result);
    
    if(result.title=="No Definitions Found"){
       suggestEl.style.display = "block";
       containermeaningEl.style.display = "none";
       suggestEl.innerText = `Can't Find the meaning of "${inputword}"`;
    //    titleEl.innerText = result[0].word ;
    //    meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
    //    audioEl.src = result[0].phonetics[0].audio;
    }
    else{
        suggestEl.style.display = "none";
       containermeaningEl.style.display = "block";
       titleEl.innerText = result[0].word ;
       meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
       audioEl.src = result[0].phonetics[0].audio;
    }
    }
    catch(error){
        console.log(error);
        suggestEl.style.display = "block";
       containermeaningEl.style.display = "none";
       suggestEl.innerText = `Error !`;
    }
}
//พิม ALT+96 = `