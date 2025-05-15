let a = 10;
let b =10;
a=30;

console.log({a,b})

let juan = {nombre: 'juan'};
let ana = {...juan};
ana.nombre = 'Ana';
console.log({juan, ana})

const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter, tony});

//arreglos

const frutas = ['manazan','pera', 'piña'];

console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread');

console.time('slice');
const otrasFrutas2 = frutas.slice();;
console.timeEnd('slice');

console.time('array from');
const otrasFrutas4=Array.from(frutas)
console.timeEnd('array from');

otrasFrutas.push('Mango');
console.table({frutas,otrasFrutas,otrasFrutas2,otrasFrutas4});