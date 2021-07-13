class TokenSquare{
  const(number){
    this.number = number;
  }
}

function getRandom(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function generateHTMLSquares(){
  const numberOfSquares = 8;
  let squaresHTML = '';
  for (let i = 0; i < numberOfSquares; i++){
    squaresHTML +=
    '<div class = "board-square">' +
    '<h1 class = "text-center">'+getRandom(0,10)+'</h1>' +
    '</div>';
  }
  const tokenElement = document.getElementById('token-field');
  tokenElement.innerHTML = squaresHTML;

}

var number = setInterval(generateHTMLSquares, 1000);

//generateHTMLSquares();
