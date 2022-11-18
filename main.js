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
let pTotal = document.querySelector("#player-total")
let dTotal = document.querySelector('#dealer-total')
let pCards = document.querySelector("#player-cards")
let dCards = document.querySelector('#dealer-cards')

let playerHand = []
let playerTotal = []
let dealerHand = []
let dealerTotal = []
let hideCard = ""
function dealP(){
    let randCard = Math.floor(Math.random()* deck.length)
    let rCard = deck[randCard]
    playerHand.push(rCard.card)
    playerTotal.push(rCard.faceValue)
    deck.splice(randCard,1)
}
function dealD(){
    let randCard = Math.floor(Math.random()* deck.length)
    let rCard = deck[randCard]
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

deal.addEventListener('click',()=>{
    dealP()
    dealP()
    dealD()
    totalAllPlayer()
    totalAllDealer()
    
    })

hit.addEventListener('click',() => {
    if(playerHand.length >= 2){
         dealP()
         totalAllPlayer
     }
 })

 stay.addEventListener('click',() => {
    if(dealerTotal < 18){
        dealD()
        totalAllDealer()
    }
 })


    
   







