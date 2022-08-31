// Adding variables to store our data
const usrInput = document.querySelector('.field-input')
const userLetterPreviw = document.querySelector('.plaque-prev')
const userPricePreviw = document.querySelector('#plaquePrice')

const buy = document.getElementById("buyMe")
const text = document.getElementById("guessField")

var textlen= text.value.replaceAll(' ', '')

// Arrow function
const countLetters = (some_data) =>{

  const optName = some_data.replaceAll(' ', '')
  const price = optName.length *5;
  userLetterPreviw.textContent = some_data;
  userPricePreviw.textContent = '$'+ price;

}

usrInput.oninput = (e)=>{
  countLetters(e.target.value)
}


//Project

// Arrow function
buyNow = () =>{
    if (userLetterPreviw.textContent == 'Your Name'){
    alert('Enter your Custom letters')
    }
    
    if (text.value ===''|| ' '){
    alert('Enter your letters')
    }

    else if (textlen.length > 15){
    userLetterPreviw.textContent = 'Max lenght exceeded'
    userLetterPreviw.style.fontSize = '20px'
    alert('Sorry! You have exceed the number of available letter (Max is 15)') 
    text.value = ''   
    }

    else {
        alert('Success: Thank You')
        text.value = ''
    }
}
buy.addEventListener("click", buyNow);



// Using default function
/*
buy.addEventListener("click", buyNow);

function buyNow()
{
    if (userLetterPreviw.textContent == 'Your Name'){
    alert('Enter your Custom letters')
    }
    
    if (text.value ===''){
    alert('Enter your letters')
    }

    else if (textlen.length > 15){
    userLetterPreviw.textContent = 'Max lenght exceeded'
    userLetterPreviw.style.fontSize = '20px'
    alert('Sorry! You have exceed the number of available letter (Max is 15)')  
    text.value = ''  
    }

    else {
        alert('Success: Thank You')
        text.value = ''
    }
}
*/