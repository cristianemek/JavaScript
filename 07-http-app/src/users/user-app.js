import { renderButtons } from "./presentacion/render-buttons/render-buttons";
import { renderTable } from "./presentacion/render-table/render-table";
import usersStore from "./store/users-store";

/**
 * 
 * @param {HTMLDivElement} element 
 */



export const UserApp = async(element) =>{

    await usersStore.loadNextPage();

    renderTable(element);
    renderButtons(element);

}





