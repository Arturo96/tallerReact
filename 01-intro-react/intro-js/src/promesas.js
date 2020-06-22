import {heroes} from './heroes';

const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);

const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

console.log(getHeroeByOwner('DC'));

const getHeroeByIdAsync = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('El heroe no existe');
            }
        }, 2000)
    });
}



getHeroeByIdAsync(33).then(console.log)
    .catch(console.warn);
