function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        card.push(card)
        renderGame()
    }
}