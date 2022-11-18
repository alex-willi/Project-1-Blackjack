const deck = [
    {
        card: 'A spade',
        faceValue: 1,
        img: 'A',
    },
    {
        card: 'A heart',
        faceValue: 1,
        img: 'A',
    },
    {
        card: 'A club',
        faceValue: 1,
        img: 'A',
    },
    {
        card: 'A dimond',
        faceValue: 1,
        img: 'A',
    },
    {
        card: 'K spade',
        faceValue: 10,
        img: 'K',
    },
    {
        card: 'K heart',
        faceValue: 10,
        img: 'K',
    },
    {
        card: 'K club',
        faceValue: 10,
        img: 'K',
    },
    {
        card: 'K dimond',
        faceValue: 10,
        img: 'K',
    },
    {
        card: 'Q spade',
        faceValue: 10,
        img: 'Q',
    },
    {
        card: 'Q heart',
        faceValue: 10,
        img: 'Q',
    },
    {
        card: 'Q club',
        faceValue: 10,
        img: 'Q',
    },
    {
        card: 'Q dimond',
        faceValue: 10,
        img: 'Q',
    },
    {
        card: 'J spade',
        faceValue: 10,
        img: 'J',
    },
    {
        card: 'J heart',
        faceValue: 10,
        img: 'J',
    },
    {
        card: 'J club',
        faceValue: 10,
        img: 'J',
    },
    {
        card: 'J dimond',
        faceValue: 10,
        img: 'J',
    },
    {
        card: '10spade',
        faceValue: 10,
        img: '10',
    },
    {
        card: '10heart',
        faceValue: 10,
        img: '10',
    },
    {
        card: '10club',
        faceValue: 10,
        img: '10',
    },
    {
        card: '10dimond',
        faceValue: 10,
        img: '10',
    },
    {
        card: '9spade',
        faceValue: 9,
        img: '9',
    },
    {
        card: '9heart',
        faceValue: 9,
        img: '9',
    },
    {
        card: '9club',
        faceValue: 9,
        img: '9',
    },
    {
        card: '9dimond',
        faceValue: 9,
        img: '9',
    },
    {
        card: '8spade',
        faceValue: 8,
        img: '8',
    },
    {
        card: '8heart',
        faceValue: 8,
        img: '8',
    },
    {
        card: '8club',
        faceValue: 8,
        img: '8',
    },
    {
        card: '8dimond',
        faceValue: 8,
        img: '8',
    },
    {
        card: '7spade',
        faceValue: 7,
        img: '7',
    },
    {
        card: '7heart',
        faceValue: 7,
        img: '7',
    },
    {
        card: '7club',
        faceValue: 7,
        img: '7',
    },
    {
        card: '7dimond',
        faceValue: 7,
        img: '7',
    },
    {
        card: '6spade',
        faceValue: 6,
        img: '6',
    },
    {
        card: '6heart',
        faceValue: 6,
        img: '6',
    },
    {
        card: '6club',
        faceValue: 6,
        img: '6',
    },
    {
        card: '6dimond',
        faceValue: 6,
        img: '6',
    },
    {
        card: '5spade',
        faceValue: 5,
        img: '5',
    },
    {
        card: '5heart',
        faceValue: 5,
        img: '5',
    },
    {
        card: '5club',
        faceValue: 5,
        img: '5',
    },
    {
        card: '5dimond',
        faceValue: 5,
        img: '5',
    },
    {
        card: '4spade',
        faceValue: 4,
        img: '4',
    },
    {
        card: '4heart',
        faceValue: 4,
        img: '4',
    },
    {
        card: '4club',
        faceValue: 4,
        img: '4',
    },
    {
        card: '4dimond',
        faceValue: 4,
        img: '4',
    },
    {
        card: '3spade',
        faceValue: 3,
        img: '3',
    },
    {
        card: '3heart',
        faceValue: 3,
        img: '3',
    },
    {
        card: '3club',
        faceValue: 3,
        img: '3',
    },
    {
        card: '3dimond',
        faceValue: 3,
        img: '3',
    },
    {
        card: '2spade',
        faceValue: 2,
        img: '2',
    },
    {
        card: '2heart',
        faceValue: 2,
        img: '2',
    },
    {
        card: '2club',
        faceValue: 2,
        img: '2',
    },
    {
        card: '2dimond',
        faceValue: 2,
        img: '2',
    },

]
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
    pTotal.innerHTML = playerTotal.reduce((a,b)=> a+ b)
}
function totalAllDealer(){
    dCards.innerHTML = dealerHand
    dTotal.innerHTML = dealerTotal.reduce((a,b)=> a+ b)
}
function hiddenCard(){
    dealerDownCard.innerHTML = "hidden"
    
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

function calcWinner(){
    if (dTotal.innerHTML > 21){
        end.innerHTML = "YOU WIN"
        playAgain.style.display = "inline"
    }else if (dTotal.innerHTML < pTotal.innerHTML){
        end.innerHTML = "YOU WIN"
        playAgain.style.display = "inline"
    }else{
        end.innerHTML = "HOUSE WINS"
        playAgain.style.display = "inline"
    } 
 }
deal.addEventListener('click',()=>{
    dealP()
    dealP()
    dealD()
    hiddenCard()
    totalAllPlayer()
    totalAllDealer()    
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
     showCard()
     totalAllDealer()
    while(dTotal.innerHTML < 18){
        dealD()
        totalAllDealer()
    }
    calcWinner()
    
 })

 playAgain.addEventListener('click',() => {
    deck.push(...discard)
    discard.splice(0,discard.length)
 })

 

 


    
   







