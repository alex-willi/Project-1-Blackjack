let deckOfCards = ['as', 'ah', 'ac','ad','ks','kh','kc','kd','qs','qh','qc','qd','js','jh','jd','js','10s','10h','10c','10d','9s','9h','9c','9d','8s','8h','8c','8d','7s','7h','7c','7d','6s','6h','6c','6d','5s','5h','5c','5d','4s','4h','4c','4d','3s','3h','3c','3d','2s','2h','2c','2d',]
let playerHand = []
let dealerHand = []
function dealP(){
    playerHand.push(deckOfCards.splice(Math.floor(Math.random()* deckOfCards.length), 1))
}
function dealD(){
    dealerHand.push(deckOfCards.splice(Math.floor(Math.random()* deckOfCards.length), 1))
}


const deal = document.querySelector("#deal")

deal.addEventListener('click',() => {
    dealD()
    dealD()
    dealP()
    dealP()
})


