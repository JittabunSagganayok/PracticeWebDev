const imagenajaEl = document.getElementById("imagenaja");
const btnEl = document.getElementById("btn");

//const containerEl = document.getElementById("container");

const apiurl = "https://api.catboys.com/img";

btnEl.addEventListener("click",getapi);

async function getapi(){
    try{
        imagenajaEl.src = "https://img.elo7.com.br/product/original/25658AB/adesivo-loading-carregando-parede-quarto-cama-sala-hd-adesivo-cama-casal-divertida.jpg"; 
        btnEl.disabled=true; //ปิดไม่ให้ปุ่มกดได้
        const response = await fetch(apiurl);
        const data = await response.json();
        console.log(data.url);
        
        imagenajaEl.src = data.url; 
        btnEl.disabled=false;
    }
    catch (error){
        
        console.log(error);
    }
}
