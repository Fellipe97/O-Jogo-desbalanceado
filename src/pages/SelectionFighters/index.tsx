import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import {
	Container,
	Box,
	BoxTitle,
	Title,
	Line,
	BoxContent,
	BoxButtons
} from './styles';
import { Button } from '../../components/Button';
import { CharacterContext } from '../../context/CharacterContext';
import { DefaultCharacter } from '../../dtos/DefaultCharacter';
import { ButtonCharacter } from '../../components/ButtonCharacter';



export const SelectionFighters = () => {
	const navigate = useNavigate();
	const { character } = useContext(CharacterContext);
	const characterContext = useContext(CharacterContext)


	useEffect(() => {
		console.log('character: ', character)
		console.log('DefaultCharacter', DefaultCharacter)
	}, [])

	const handleStartGame = () => {
		if(character && character?.length > 1){
			navigate('/gameConfig')
		}else{
			alert('Adione pelo menos dois personagens.')
		}
	}

	return (
		<Container>
			<Box>

				<BoxTitle>
					<Title>Seleção de personagem</Title>
					<Line />
				</BoxTitle>
				<BoxContent>
					{DefaultCharacter.map((item) => (
						<ButtonCharacter
							picture={item.pictureSmall} //{item.pictureSmall}
							onClick={() => characterContext.addCharacter(item)}
						/>
					))}
				</BoxContent>


				<BoxTitle>
					<Title>Personagens escolhidos</Title>
					<Line />
				</BoxTitle>
				<BoxContent>
					{character?.length === 0 &&
						<h1>Não há personagem selecionado.</h1>
					}
					{character && character?.length !== 0 &&
						character.map((item) => (
							<ButtonCharacter
								picture={item.pictureSmall}
								onClick={() => alert(item)}
							/>
						))
					}
				</BoxContent>

			{character && character?.length !== 0 &&
				<BoxButtons>

					<Button
						title='Remover'
						style={{ marginTop: 20 }}
						onClick={() => characterContext.removeCharacter()}
						color='redButton'
						className='buttonStyle'
					/>
					<Button
						title='Iniciar o jogo'
						style={{ marginTop: 20 }}
						onClick={handleStartGame}
						className='buttonStyle'
					/>
				</BoxButtons>
			}
			</Box>
		</Container>
	);
};