import {heroes} from './heroes';

const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);

const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

console.log(getHeroeByOwner('DC'));
