import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import {
	Container,
	Box,
	BoxTitle,
	Title,
	Line,
	BoxContent
} from './styles';
import { Button } from '../../components/Button';
import { CharacterContext } from '../../context/CharacterContext';
import { DefaultCharacter } from '../../dtos/DefaultCharacter';
import { ButtonCharacter } from '../../components/ButtonCharacter';

import Character0 from '../../assets/personagens/Character0.png'



export const SelectionFighters = () => {
	const navigate = useNavigate();
	const { character } = useContext(CharacterContext);
	const characterContext = useContext(CharacterContext)


	useEffect(() => {
		console.log('character: ', character)

		console.log('DefaultCharacter', DefaultCharacter)
	}, [])

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
							onClick={()=>characterContext.addCharacter(item)}
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
								picture={item.pictureSmall} //{item.pictureSmall}
								onClick={()=>alert(item)}
							/>
						))
					}
				</BoxContent>
			</Box>

			{character && character?.length !== 0 &&
				<Button
					title='Remover'
					style={{ marginTop: 20 }}
					onClick={() => characterContext.removeCharacter()}
					color='redButton'
					className='buttonStyle'
				/>
			}
		</Container>
	);
};