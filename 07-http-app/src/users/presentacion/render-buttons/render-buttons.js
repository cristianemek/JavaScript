import usersStore from '../../store/users-store';
import './render-buttons.css'

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const renderButtons = (element) =>{

    const nextButton = document.createElement('button');
    nextButton.innerHTML='Next >';

    const previousButton = document.createElement('button');
    previousButton.innerHTML='< Prev';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id='current-page';
    currentPageLabel.innerText= usersStore.getCurrentPage();

    element.append(previousButton,currentPageLabel,nextButton);

}

