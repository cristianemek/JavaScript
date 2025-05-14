let juegos=['zelda','mario','sonic','tetris','pacman'];

let primero=juegos[2-2];
let ultiomo=juegos[juegos.length-1];

juegos.forEach( (elemento,indice, arr)=>{
    console.log(elemento,indice, arr);
} );


juegos.push('tetris');