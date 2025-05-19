

const cris ={
    nombre: 'Cristian',
    edad: 24,
}


function Persona(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir= function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const maria = new Persona('Maria',23);
const melissa = new Persona('Melissa',41);

maria.imprimir();
melissa.imprimir();