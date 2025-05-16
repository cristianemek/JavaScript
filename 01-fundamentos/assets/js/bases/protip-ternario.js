const elMayor = (a,b) =>(a>b) ? `${a} es mayor`: `${b} es mayor`;

console.log(elMayor(10,11));

const amigo = true;

const personajes=[
    'peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
];

const nota = 60;
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A':
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B':
              nota >= 75 ? 'C+':
              nota >= 70 ? 'C':
              nota >= 65 ? 'D+':
              nota >= 60 ? 'D': 'F';
            
console.log({nota,grado});

