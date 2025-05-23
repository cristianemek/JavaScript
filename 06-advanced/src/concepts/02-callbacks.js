import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callBacksComponent = (element) =>{


}

/**
 * 
 * @param {string} id 
 * @param {*} callback 
 */


const findHero = (id, callback) =>{

    const hero = heroes.find(hero => hero.id === id);
    callback(hero);

}