function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    isAlive = true;
    card = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}