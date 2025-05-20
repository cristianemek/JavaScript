
class Persona {

    static porObjeto({nombre, apellido, edad}) {
        return new Persona(nombre, apellido, edad);
    }


    // Constructor de la clase Persona
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  getInfo() {
    console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}`);
  }

}

const nombre1   = 'Juan',
      apellido1 = 'Pérez',
      edad1     = 30;

const persona = new Persona(nombre1, apellido1, edad1);
persona.getInfo(); // Nombre: Juan, Apellido: Pérez, Edad: 30

const crist={
    nombre: 'Cristian',
    apellido: 'Rodriguez',
    edad: 25
};

const persona2 = Persona.porObjeto(crist);

persona2.getInfo();


