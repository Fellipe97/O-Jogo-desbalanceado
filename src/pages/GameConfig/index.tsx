import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
import { Button } from '../../components/Button';


export const GameConfig = () => {
    const navigate = useNavigate();


    return (
        <Container>
            <h1>configuração</h1>
            <Button
                title='Voltar'
                onClick={() => navigate('/selectionFighters')}
            />
        </Container>
    );
};