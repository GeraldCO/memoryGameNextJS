'use client';

import type { CharacterType} from "../types/characters";
import Image from "next/image";

interface ImageCardProps {
  character: CharacterType;
  clickHandler: (character: CharacterType) => void;
}

export default function ImageCard({ character, clickHandler }:ImageCardProps) {
  return (
    <li onClick={()=>clickHandler(character)} className="flex flex-col items-center gap-2 rounded-lg bg-white p-4 shadow-md">
      <Image src={character.image} alt={character.name} className="h-24 w-24 rounded-full object-cover" />
      <p className="text-sm font-medium text-gray-800">{character.name}</p>
    </li>
  );
}