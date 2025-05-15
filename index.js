
let sum=0
let hasBlackJack=false
let isLive=true
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
let cards=[]
let player={
 name:"Dania",
 chips:145
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chips
function startGame(){
  sum=0
  hasBlackJack=false
  isLive=true
  let firstCard=getRandomCard()
  let secondCard=getRandomCard()
  cards=[firstCard,secondCard]
  sum+=firstCard+secondCard
  renderGame()
}
function renderGame(){
  cardEl.textContent="Cards: "
  for (const card of cards) {
    cardEl.textContent+=card+" "
  }
  if(sum<21){
    message="Do you want to draw a new card?"
  }else if(sum===21){
    message="Wohoo! You've got Blackjack"
    hasBlackJack=true
  }else{
    message="You're out of the game"
    isLive=false
  }
  messageEl.textContent=message
  sumEl.textContent="Sum: "+sum

}
function newCard(){
  if((!hasBlackJack)&&isLive){
  let card=getRandomCard()
  sum+=card
  cards.push(card)
  
  renderGame()}
 
}
function getRandomCard(){
  // if 1 =>return 11
    // if 11-13 =>return 10
  let random= (Math.floor(Math.random()*13)+1)
  if(random>10){
    return 10
  }else if(random===1){
    return 11
  }else return random
}
