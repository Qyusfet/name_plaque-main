// Adding variables to store our data
const usrInput = document.querySelector('.field-input')
const userLetterPreviw = document.querySelector('.plaque-prev')
const userPricePreviw = document.querySelector('#plaquePrice')

const buy = document.getElementById("buyMe")
const text = document.getElementById("guessField")
const note = document.querySelector('.note')
const invoice = document.querySelector('.invoice')
// var textlen= text.value - text.value.replaceAll(' ', '').length

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
    alert(String.fromCharCode(0x26A0) +'Enter your Custom letters')

    invoice.textContent = ''
    }

    if (text.value ===''){
    note.textContent = String.fromCharCode(0x26A0) + '  Enter your letters' + String.fromCharCode(9757)
    note.style.color = 'red'

    userLetterPreviw.textContent = 'Name not found'
    userLetterPreviw.style.fontSize = '20px'

    invoice.textContent = ''

    }

    else if (text.value ==" "){
      note.textContent = String.fromCharCode(0x26A0) + '  Enter your letters' + String.fromCharCode(9757)
    note.style.color = 'red'

    userLetterPreviw.textContent = 'Name not found'
    userLetterPreviw.style.fontSize = '20px'

    invoice.textContent = ''
    }

    else if (text.value.length > 15){
    userLetterPreviw.textContent = 'Max lenght exceeded'
    userLetterPreviw.style.fontSize = '20px'
    note.textContent = String.fromCharCode(0x26A0) + '  Sorry'+ String.fromCharCode(10071) +' You have exceed the number of available letter (Max is 15)'
    note.style.color = 'red'
    text.value = '' 
    
    invoice.textContent = ''
    }

    else {
      note.textContent = String.fromCharCode(9989) + ' Success: Thank You ' + String.fromCharCode(9996)
      note.style.color = 'blue'
      text.value = ''

      invoice.textContent = 'You have successfully place and order to print "'+ userLetterPreviw.textContent.toUpperCase() + '" at the cost of ' + userPricePreviw.textContent
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
    }
    else {
        alert('Success: Thank You')
        text.value = ''
    }
}
*/ 