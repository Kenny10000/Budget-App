
function auth() {
  var priceOfItem = Number(document.getElementById("priceOne").value)
  var newMoney = money - priceOfItem
  moneyS.innerHTML = "Available Money: ₦" + newMoney
  money =  newMoney
}


var money = 10000
moneyS.innerHTML = "Available Money: ₦" + money


document.getElementById("daTe").innerHTML = Date()




function spend(){
    if (productOne.value == ""  || priceOne.value == "" ) {
        error.style.display="block"
    } else if (Number(priceOne.value) > 0 && Number(priceOne.value) > money ){
      mix.style.display="block"
      document.getElementById('productOne').value =""
        document.getElementById('priceOne').value ="" 
      }
       else {
        document.getElementById('showOne').innerHTML  += `<h6>${productOne.value}  - ₦ ${priceOne.value}</h6>`
        auth()
        document.getElementById('productOne').value =""
        document.getElementById('priceOne').value ="" 
        mix.style.display="none"
        error.style.display="none" 
        }
          
    }

