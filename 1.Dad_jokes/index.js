const btnElement = document.getElementById("btn");
const jokeElement = document.getElementById("joke");
const apiurl = "https://api.api-ninjas.com/v1/dadjokes?limit=2";

 const apikey = "L7zf+HN3/I8Sjsv+OqNQeQ==YItTR7MTVyc0YZUk";

 const options = {
    method:"GET",
    headers: {"X-Api-Key":apikey},

 };



async function getapi(){
    try{
        jokeElement.innerText = "Please Wait..."; 
        btnElement.disabled=true; //ปิดไม่ให้ปุ่มกดได้
        const response = await fetch(apiurl,options);
        const data = await response.json();
        console.log(data[0].joke);
        jokeElement.innerText = data[0].joke;   
        btnElement.disabled=false;
    }
    catch (error){
        jokeElement.innerText = "Error ! Please Refresh"; 
        console.log(error);
    }
}

btnElement.addEventListener("click",getapi);
