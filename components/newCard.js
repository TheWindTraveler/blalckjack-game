function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame()
    }
}