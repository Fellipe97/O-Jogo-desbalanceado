import { useState, useEffect } from 'react';

import { CharacterContext } from "./CharacterContext"
import { Character } from '../dtos/Character';


export const CharacterProvider = ({ children }: { children: JSX.Element }) => {
    const [character, setCharacter] = useState<Character[]>([])

    useEffect(() => {
        const recoverData = async () => {
            const storageData = localStorage.getItem('characters');
            if (storageData) {
                setCharacter(JSON.parse(storageData));
            }
        }
        recoverData()
    }, [])

    const addCharacter = async (newCharacter: Character) => {
        try {
            const updatedCharacters = [...character, newCharacter];
            setCharacter(prevCharacters => [...prevCharacters, newCharacter]);
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
            const updatedCharacters = [...character];
            updatedCharacters.pop();
            setCharacter(updatedCharacters);
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