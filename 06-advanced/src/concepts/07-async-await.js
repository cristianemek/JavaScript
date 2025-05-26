

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async(element) =>{

    const [value1,value2,value3]= await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ])
    element.innerHTML=`
        value1: ${value1} <br/>
        value2: ${value2} <br/>
        value3: ${value3} <br/>
    `


}


const slowPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("slowPromise")
    }, 2000);
})

const mediumPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("mediumPromise")
    }, 1500);
})

const fastPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("fastPromise")
    }, 1000);
})