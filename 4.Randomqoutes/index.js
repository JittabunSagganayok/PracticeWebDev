const btnElement = document.getElementById("btn");
const qouteElement = document.getElementById("qoute");
const apiurl = "https://api.api-ninjas.com/v1/quotes?category=success";

 const apikey = "L7zf+HN3/I8Sjsv+OqNQeQ==YItTR7MTVyc0YZUk";

 const options = {
    method:"GET",
    headers: {"X-Api-Key":apikey},

 };

 btnElement.addEventListener("click",getapi);

async function getapi(){
    try{
        qouteElement.innerText = "Please Wait..."; 
        btnElement.disabled=true; //ปิดไม่ให้ปุ่มกดได้
        const response = await fetch(apiurl,options);
        const data = await response.json();
        console.log(data[0].quote);
        qouteElement.innerText = data[0].quote;   
        btnElement.disabled=false;
    }
    catch (error){
        qouteElement.innerText = "Error ! Please Refresh"; 
        console.log(error);
    }
}

