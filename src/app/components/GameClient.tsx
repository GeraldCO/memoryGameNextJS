'use client';

import {useState} from "react";
import type {CharacterType} from "../types/characters";
import ImageCard from "./ImageCard";

interface GameClienteProps {
    initialCharacters: CharacterType[];
}

export const GameClient = ({initialCharacters}: GameClienteProps) => {
    const [characters, setCharacters] = useState<CharacterType[]>(initialCharacters);
    const [score, setScore] = useState<number>(0);
    const [maxScore, setMaxScore] = useState<number>(0);

    //function shuffle
    //function restart game
    //function onImageClick
    //function setScore

    function onImageClick(character: CharacterType) {
        setCharacters((prevCharacters) => {
            return prevCharacters.map((prevCharacter) => {
                if (prevCharacter.id === character.id) {
                    return {...prevCharacter, wasClicked: true};
                }
                return prevCharacter;
            });
        });
    }

    return(
        <div>

            <div >
                <span>Score: {score}</span>
                <span>Max score: {maxScore}</span>
            </div>
            <ul>
                {characters.map((character)=>{
                    return(
                        <ImageCard 
                        key={character.id}
                            character={character}
                            clickHandler={(()=> onImageClick(character))}
                         />
                    )
                })}
            </ul>
        </div>
    )
}