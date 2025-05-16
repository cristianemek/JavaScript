let a = 5;

if (a > 10) {
  console.log("a es mayor a 10");
}

console.log("fin de programa");

let dia = 3;

const diaSemana = {
  1: () => "Lunes - 1",
  2: () => "martes - 2",
  3: () => "miercoles - 3",
  4: () => "jueves - 4",
  5: () => "Lunes - 5",
  6: () => "Lunes - 6",
  7: () => "Lunes - 7",
};

const diaLetra = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];

console.log(diaSemana[dia]());
console.log(diaLetra[dia - 1]);
