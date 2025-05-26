

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) =>{

    const genId=idGenerator();

    const button = document.createElement('button');
    button.innerText='Click me';
    element.append(button);

    const renderButton = () =>{
        const {value} = genId.next();
        button.innerText = `Click ${value}`
    }

    button.addEventListener('click', renderButton );

}

function* idGenerator(){
    let currentId=0;
    while (true) {
        yield ++currentId;
    }
}


function* myFirstGeneratorFunction(){

    yield 'valor1';
    yield 'valor2';
    return 'Ya no hay valores';
}
