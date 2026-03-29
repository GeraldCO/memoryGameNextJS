import { GameClient } from "./components/GameClient"; 
import fetchCharacter from "../api/client";

export default async function Home() {
  const characters = await fetchCharacter();
  

  return (
    <main>
      <GameClient initialCharacters={characters} />
    </main> 
  );
}
