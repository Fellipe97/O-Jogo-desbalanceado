import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
import { Button } from '../../components/Button';


export const SelectionFighters = () => {
	const navigate = useNavigate();


	return (
		<Container>
				<Button 
					title='Voltar'
					style={{marginTop: 20}}
					onClick={()=>navigate('/')}
				/>
		</Container>
	);
};