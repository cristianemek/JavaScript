
/**
 * 
 * @param {String} carta espera recibir un string de carta, Ejemplo: '2C','KD'
 * @returns {Number} retorna un int equivalente al valor de esa carta '2C' = 2, 'KD' = 10
 */


export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}