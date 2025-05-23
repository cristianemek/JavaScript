

/**
 * 
 * @param {HTMLDivElement} element 
 */



export const environmentsComponent = (element) =>{

    console.log( import.meta.env );

    const html = `
        DEV: ${ import.meta.env.DEV} <br/>
        PROD: ${ import.meta.env.PROD} <br/>
        API_KEY: ${ import.meta.env.VITE_API_KEY} <br/>
        DEV: ${ import.meta.env.VITE_BASE_URL} <br/>
    `;
    element.innerHTML = html;
}