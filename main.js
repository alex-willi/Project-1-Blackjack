// const deal = document.querySelector("#deal")
// const hit = document.querySelector("#hit")
// const pCards = document.querySelector("#player-cards")

let deckOfCards = ['as', 'ah', 'ac','ad','ks','kh','kc','kd','qs','qh','qc','qd','js','jh','jd','js','10s','10h','10c','10d','9s','9h','9c','9d','8s','8h','8c','8d','7s','7h','7c','7d','6s','6h','6c','6d','5s','5h','5c','5d','4s','4h','4c','4d','3s','3h','3c','3d','2s','2h','2c','2d',]

let playerHand = []

let dealerHand = []
let total = []
let calcTotal = function (first) {
    for (let i = 0; i < first.length; i += 1) {
         let x = first[i].charAt(0)
         if (x == 'k' || x == '1'|| x == 'q' || x == 'j'){
         x = '10'
         }
         if (x == 'a'){
            x = '11'
         }
        let h = parseInt(x)
        total.push(h)
       let rTotal = total.reduce((a, b) => a + b, 0)
        // console.log(h)
        console.log(rTotal)
    }
}
calcTotal(deckOfCards)


// function dealP(){
//     playerHand.push(deckOfCards.splice(Math.floor(Math.random()* deckOfCards.length), 1))
// }

// function dealD(){
//     dealerHand.push(deckOfCards.splice(Math.floor(Math.random()* deckOfCards.length), 1))
// }




// deal.addEventListener('click',() => {
//     dealD()
//     dealD()
//     dealP()
//     dealP()
//     pCards.textContent = playerHand.toString()
// })

// hit.addEventListener('click', () => {
//     if(playerHand.length >= 2)
//     dealP()
//     pCards.textContent = playerHand.toString()
// })

