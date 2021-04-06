alert("welcome")
const getUserName = prompt("Enter your username");
const getUserAge = Number(prompt("Enter your age"))
alert("your name is " + getUserName + " and you are " + getUserAge + " Years old")

const showMenu = Number(prompt(`Enter your service
1. Buy data
2. Buy Airtel`))
if(showMenu === 1){
    alert(`you want to buy data. Please confirm your details 
    1. Name: ${getUserName}
    2. Service: Data
    3. Age: ${getUserAge}`)
}

if(showMenu === 2){
    alert("you want to buy airtime")
}