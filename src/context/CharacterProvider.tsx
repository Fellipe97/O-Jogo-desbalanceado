import { useState, useEffect } from 'react';

import { CharacterContext } from "./CharacterContext"
import { Character } from '../dtos/Character';


export const CharacterProvider = ({ children }: { children: JSX.Element }) => {
    const [character, setCharacter] = useState<Character[]>([])

    useEffect(() => {
        const recoverData = async () => {
            const storageData = localStorage.getItem('characters');
            if (storageData) {
                const charactersArray = JSON.parse(storageData) as Character[];
                setCharacter(charactersArray);
            }
        }
        recoverData()
    }, [])

    const addCharacter = async (newCharacter: Character) => {
        try {
            setCharacter(prevCharacters => [...prevCharacters, newCharacter]);
            const updatedCharacters = [...character, newCharacter];
            localStorage.setItem('characters', JSON.stringify(updatedCharacters));
            return {
                update: true
            }

        } catch (error) {
            return {
                update: false,
                error: 'Não foi possível remover o personagem.'
            }
        }
    }

    const removeCharacter = async () => {
        try {

            const characterToRemove = character[character.length - 1];
            setCharacter(prevCharacters => prevCharacters.filter(character => character !== characterToRemove));
            const updatedCharacters = character.filter(character => character !== characterToRemove);
            localStorage.setItem('characters', JSON.stringify(updatedCharacters));

            return {
                update: true
            }

        } catch (error) {
            return {
                update: false,
                error: 'Não foi possível remover o personagem.'
            }
        }
    }


    return (
        <CharacterContext.Provider value={{ character, addCharacter, removeCharacter }}>
            {children}
        </CharacterContext.Provider >
    )
}