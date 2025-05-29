

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

const arrayWith = superheroes.with(1, {
    ID: 2,
    name: 'Batman 2.0',
});
console.log(superheroes[1].name); // Batman
console.log(arrayWith[1].name); // Batman 2.0
console.log(superheroes[1] === arrayWith[1]); // false

const elemento = arrayWith.at(1);
console.log(elemento.name); // Batman 2.0