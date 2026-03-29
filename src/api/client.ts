'user server';

import { CharacterType } from "../app/types/characters";

export default async function fetchCharacter() {
    const characters: CharacterType[] = [];
    for (let i = 0; i < 10; i++) {
        const character = await fetch(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 826)}`);
        const data = await character.json();
        characters.push({
            id: data.id,
            name: data.name,
            image: data.image,
            wasClicked: false,
        });
    }

    return characters;
}