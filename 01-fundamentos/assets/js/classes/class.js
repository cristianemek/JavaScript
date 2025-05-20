

class Persona{


    static _conteo=0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log('Hola a todos, soy un método estático');
    }

    nombre='';
    codigo='';
    frase='';
    comida='';

    constructor(nombre='sin nombre',codigo='sin codigo',frase='sin frase'){
        this.codigo=codigo;
        this.nombre=nombre,
        this.frase=frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }
    
    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}

const spiderman= new Persona('peter parker','Spiderman','soy tu amigable vecino spider');
const ironman= new Persona('Tony Stark','Ironman','Yo soy ironman');


spiderman.miFrase();

spiderman.setComidaFavorita = 'EL pie de cereza de la tia May';

console.log(spiderman)
console.log(Persona.conteo);
Persona.mensaje();