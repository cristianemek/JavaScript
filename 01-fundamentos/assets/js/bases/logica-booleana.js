const regresaTrue = () => {
    console.log('Regresa True');
    return true;
};

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
};

console.warn('ASIGGNACIONES');

const soyUndefinido = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola Mundo' && 150;
const a2 = true && 'Hola Mundo' && false && 'a';
const a3 = soyUndefinido || 'Ya no soy indefinido';

console.log({ a1, a2 });