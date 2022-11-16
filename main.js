const deal = document.querySelector("#deal")
const hit = document.querySelector("#hit")
const pCards = document.querySelector("#player-cards")
let pTotal = document.querySelector("#player-total")

let deckOfCards = ['as', 'ah', 'ac','ad','ks','kh','kc','kd','qs','qh','qc','qd','js','jh','jd','js','10s','10h','10c','10d','9s','9h','9c','9d','8s','8h','8c','8d','7s','7h','7c','7d','6s','6h','6c','6d','5s','5h','5c','5d','4s','4h','4c','4d','3s','3h','3c','3d','2s','2h','2c','2d',]




let dealerHand = []

let total = []

let playerHand = []




function dealP(){
    playerHand.push(deckOfCards.splice(Math.floor(Math.random()* deckOfCards.length), 1))
}

function dealD(){
    dealerHand.push(deckOfCards.splice(Math.floor(Math.random()* deckOfCards.length), 1))
}

calcTotalP = function (first) {
    for (let i = 0; i < first.length; i ++) {
        for (j = 0; j < first[i].length; j++){
         let x = first[i][j].charAt(0)
         if (x == 'k' || x == '1'|| x == 'q' || x == 'j'){
         x = '10'
         }
         if (x == 'a'){
             x = '11'
            }
            let h = parseInt(x)
            total.push(h)
            console.log(total)
            let retTotal = total.reduce((a, b) => a + b, 0)
            pTotal.innerHTML = retTotal
            console.log(retTotal)
        }
  }       
}




deal.addEventListener('click',() => {
    dealD()
    dealD()
    dealP()
    dealP()
    pCards.textContent = playerHand
    calcTotalP(playerHand)
  
    


})

hit.addEventListener('click', () => {
    // if(playerHand.length >= 2)
    dealP()
    calcTotalP(playerHand)
    pCards.textContent = playerHand.toString()
})






