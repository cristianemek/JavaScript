

const superheroes = [
    {
        ID: 1,
        name: 'Superman',
    }
    ,
    {
        ID: 2,
        name: 'Batman',
    },
    {
        ID: 3,
        name:'Flash',
    },
    {
        ID: 4,
        name: 'Aquaman',
    },
];

const superheroesCopy = structuredClone(superheroes);
superheroesCopy[0].name = 'Superman 2.0';

console.log(superheroes[0].name); // Superman
console.log(superheroesCopy[0].name); // Superman 2.0
console.log(superheroes[0] === superheroesCopy[0]); // false
