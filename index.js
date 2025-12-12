
let cards = []
let sum = 0
let message= ""
let isAlive=false
let hasblackJack=false
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")



function randomNumber(){
let newNumber= Math.floor(Math.random() * 13 ) + 1
if (newNumber>10){
    return 10}

else if (newNumber===1){
return 11
}
else {
    return newNumber
}
}


function startGame(){
        isAlive = true
    let firstCard= randomNumber()
    let secondCard= randomNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
 cardsEl.textContent = "Cards: "
    // Create a for loop that renders out all the cards instead of just two
    for (i=0; i<cards.length; i+=1){
    cardsEl.textContent += cards[i] + " "
    }
  
sumEl.textContent="Sum:" + " " + sum
  
if (sum<=20){
    message="Do you want to draw another card"
    
}

else if (sum===21){
    message="Woohoo!you've got blackjack!"
    let hasblackJack=true

}
else {
    message="You're out of the game"
    isAlive=false

}
messageEl.textContent=message
console.log(message)
}

function newCard(){
    let additionalCard=randomNumber()
    sum+=additionalCard
    cards.push(additionalCard)
  console.log(cards)
    renderGame()
} 