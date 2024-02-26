import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { Container, Box, Title, Line } from './styles';
import { Button } from '../../components/Button';


export const Home = () => {
	const navigate = useNavigate();
	

	return (
		<Container>
			<Box>
				<Title>O jogo desbalanceado</Title>
				<Line />
				<Button 
					title='Simulação assistida'
					style={{marginTop: 20}}
					onClick={()=>navigate('/selectionFighters')}
				/>
			</Box>
		</Container>
	);
};