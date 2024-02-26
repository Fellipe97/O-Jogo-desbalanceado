import { createContext } from "react";
import { Character } from "../dtos/Character";

interface resInterface{
    update: boolean;
    error?: string;
  }


export type CharacterContextType = {
    character: Character[] | null;
    addCharacter: (newCharacter:Character) => Promise<resInterface>;
    removeCharacter: () => Promise<resInterface>;
}

export const CharacterContext = createContext <CharacterContextType>(null!);