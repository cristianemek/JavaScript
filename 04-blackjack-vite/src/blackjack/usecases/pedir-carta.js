
/**
 * 
 * @param {Array<string>} deck es un array de string
 * @returns {string} retorna una carta del deck, Ejemplo: '2C'
 */



export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
