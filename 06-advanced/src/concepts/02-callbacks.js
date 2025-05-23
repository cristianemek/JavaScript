import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callBacksComponent = (element) =>{
    const id = '5d86371f2343e37870b91ef1e';

    findHero(id, (error,hero) =>{
        if(error) {
            element.innerHTML=error;
            return;
        }

        element.innerHTML=hero.name;
    });

}

/**
 * 
 * @param {string} id 
 * @param { (error: String|Null, hero: Object) => void } callback 
 */


const findHero = (id, callback) =>{

    const hero = heroes.find(hero => hero.id === id);

    if(!hero){
        callback(`Hero with id ${id} not found.`);
        return;
    }

    callback(null,hero);

}