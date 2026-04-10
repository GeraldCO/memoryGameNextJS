'use client';

import { useState } from 'react';
import  ImageCard  from './ImageCard';
import type { CharacterType } from '../types/characters';

interface GameClientProps {
  initialCharacters: CharacterType[];
}

export const GameClient = ({ initialCharacters }: GameClientProps) => {
  const [characters, setCharacters] = useState<CharacterType[]>(initialCharacters);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  function shuffle<T>(array: T[]) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function restartGame(array: CharacterType[]) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      result[i].wasClicked = false;
    }
    console.log(result);
    return result;
  }

  function onImageClick(character: CharacterType) {
    setCharacters((prev) => {
      if (prev.find((c) => c.id === character.id)?.wasClicked) {
        console.log('restart the game');
        const resetCharacters = restartGame(prev);
        setScore(0);
        return resetCharacters;
      }
      const updated = prev.map((item) =>
        item.id === character.id ? { ...item, wasClicked: true } : item,
      );
      return shuffle(updated);
    });

    setScore((prev) => {
      const newScore = prev + 1;
      if (newScore > maxScore) {
        setMaxScore(newScore);
      }
      return newScore;
    });
  }

  return (
    <div className="container mx-auto my-8 px-4">
      <div className="flex justify-end">
        <span>Score = {score}</span>
        <span className="mx-8">MaxScore = {maxScore}</span>
      </div>

      <ul className="columns-4 gap-8">
        {characters.map((character) => {
          return (
            <ImageCard
              key={character.id}
              character={character}
              clickHandler={onImageClick}
            />
          );
        })}
      </ul>
    </div>
  );
};