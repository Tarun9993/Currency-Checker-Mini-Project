let input = document.querySelector("#con")
let button = document.querySelector("#btn")
let text = document.querySelector("#value")
button.addEventListener("click",(e) =>{
    e.preventDefault()
    if(input.value === ""){
        alert("Please Enter a Country")
    }
    else{
       getData(input.value)
    }
})
async function getData(val){
    let response = await fetch("https://restcountries.com/v3.1/name/"+val)
    let result = await response.json()
    text.innerHTML = Object.values(result[0].currencies)[0].name + " "+ Object.values(result[0].currencies)[0].symbol
    // console.log(result[0].currencies);
    // console.log(Object.values(result[0].currencies)[0].name);
    
}