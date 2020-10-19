import { heroes } from "../data/heroes";

export const getHeroesByName = (name) => {

    if(name === '') return [];

    return heroes.filter(h => h.superhero.toLowerCase().includes(name.toLowerCase()));
} 