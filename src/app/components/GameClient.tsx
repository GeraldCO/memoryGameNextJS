'use client';

import {useState} from "react";
import type {CharacterType} from "../types/characters";
import ImageCard from "./ImageCard";

interface GameClienteProps {
    initialCharacters: CharacterType[];
}

export const GameClient = ({initialCharacters}: GameClienteProps) => {


    //function shuffle
    //function restart game
    //function onImageClick
    //function setScore

    function onImage(character: CharacterType) {
        
    }

    return(
        <div>
            <ul>
                {initialCharacters.map((character)=>{
                    return(
                        <ImageCard character={character}
                         />
                    )
                })}
            </ul>
        </div>
    )
}