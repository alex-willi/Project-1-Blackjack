
const deal = document.querySelector('#deal')

const hit = document.querySelector('#hit')

const stay = document.querySelector('#stay')

const playAgain = document.querySelector('#play-again')

let pTotal = document.querySelector("#player-total")

let dTotal = document.querySelector('#dealer-total')

let pCards = document.querySelector("#player-cards")

let dCards = document.querySelector('#dealer-cards')

let dealerDownCard = document.querySelector('#hidden-card')

let end = document.querySelector('#end-round')

let playerHand = []

let playerTotal = []

let dealerHand = []

let dealerTotal = []

let discard = []

function dealP(){
    let randCard = Math.floor(Math.random()* deck.length)
    let rCard = deck[randCard]
    discard.push(rCard)
    playerHand.push(rCard.card)
    playerTotal.push(rCard.faceValue)
    deck.splice(randCard,1)
}

function dealD(){
    let randCard = Math.floor(Math.random()* deck.length)
    let rCard = deck[randCard]
    discard.push(rCard)
    dealerHand.push(rCard.card)
    dealerTotal.push(rCard.faceValue)
    deck.splice(randCard,1)
}

function totalAllPlayer(){
    pCards.innerHTML = playerHand
    if (playerTotal.length !== 0){
    pTotal.innerHTML = playerTotal.reduce((a,b)=> a+ b)
    }else{
        pTotal.innerHTML = playerTotal
    }
}

function totalAllDealer(){
    dCards.innerHTML = dealerHand
    if (dealerTotal.length !== 0){
        dTotal.innerHTML = dealerTotal.reduce((a,b)=> a+ b)
        }else{
            dTotal.innerHTML = dealerTotal
        }
}

function showCard(){
    let randCard = Math.floor(Math.random()* deck.length)
    let rCard = deck[randCard]
    discard.push(rCard)
    dealerHand.push(rCard.card)
    dealerTotal.push(rCard.faceValue)
    deck.splice(randCard,1)
    dealerDownCard.innerHTML = " "
}

function calcWinner(){pTotal.innerHTML
    if (dTotal.innerHTML > 21){
        end.innerHTML = "HOUSE BUST YOU WIN"
        playAgain.style.display = "inline"
    }else if (playerTotal.reduce((a,b)=> a+ b) > dealerTotal.reduce((a,b)=> a+ b)){
        end.innerHTML = "YOU WIN"
        playAgain.style.display = "inline"
    }else if(pTotal.innerHTML == dTotal.innerHTML){
        end.innerHTML = "PUSH"
        playAgain.style.display = "inline"
    }else{
        end.innerHTML = "HOUSE WINS"
        playAgain.style.display = "inline"
    } 
 }
 
deal.addEventListener('click',()=>{
    if(pTotal.innerHTML < 1){
    dealP()
    dealP()
    dealD()
    dealerDownCard.innerHTML = "hidden"
    totalAllPlayer()
    totalAllDealer()
    }
})

hit.addEventListener('click',() => {
    if(playerHand.length >= 2){
         dealP()
         totalAllPlayer()
     }
     if(pTotal.innerHTML > 21){
        end.innerHTML = "BUST HOUSE WINS"
        showCard()
        totalAllDealer()
        playAgain.style.display = "inline"
     }
 })

 stay.addEventListener('click',() => {
    if (playerHand.length >= 2){
     showCard()
     totalAllDealer()
    while(dTotal.innerHTML < 18){
        dealD()
        totalAllDealer()
    }
    calcWinner()
}
 })

 playAgain.addEventListener('click',() => {
    deck.push(...discard)
    discard.splice(0,discard.length)
    playAgain.style.display = "none"
    end.innerHTML = ""
    playerHand.splice(0,playerHand.length)
    playerTotal.splice(0,playerTotal.length)
    dealerHand.splice(0,dealerHand.length)
    dealerTotal.splice(0,dealerTotal.length)
    totalAllPlayer()
    totalAllDealer()
 })


 

 


    
   







