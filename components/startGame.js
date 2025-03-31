function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    isAlive = true;
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}