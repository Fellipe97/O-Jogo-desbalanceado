import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { 
	Container,
	Box,
	BoxTop,
	Title, 
	Line,
	BoxContent
} from './styles';
import { Button } from '../../components/Button';
import { CharacterContext } from '../../context/CharacterContext';
import { DefaultCharacter } from '../../dtos/DefaultCharacter';
import { ButtonCharacter } from '../../components/ButtonCharacter';


export const SelectionFighters = () => {
	const navigate = useNavigate();
	//const { character } = useContext(CharacterContext);
	const characterContext = useContext(CharacterContext)


	useEffect(()=>{
		console.log('character: ', characterContext.character)

		console.log('DefaultCharacter', DefaultCharacter)
	},[])

	return (
		<Container>
			<Box>
				<BoxTop>
					<Title>Seleção de personagem</Title>
					<Line />
				</BoxTop>
				<BoxContent>	
					{DefaultCharacter.map((item)=>(
						<ButtonCharacter 
							picture= {item.pictureSmall}
						/>
					))}
				</BoxContent>
			</Box>
				<Button 
					title='Voltar'
					style={{marginTop: 20}}
					onClick={()=>navigate('/')}
				/>
		</Container>
	);
};