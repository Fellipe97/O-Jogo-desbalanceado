import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import {
    Container,
    TitleDiv,
    Line,
    CharacterDiv,
    LeftCharacterDiv,
    RightCharacterDiv,
    NameCharacter,
    CharacterBox,
} from './styles';
import { Button } from '../../components/Button';
import { CharacterContext } from '../../context/CharacterContext';

import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';



export const GameConfig = () => {
    const navigate = useNavigate();
    const { character } = useContext(CharacterContext);



    return (
        <Container>
            <TitleDiv>
                <h1>Atributos dos Lutadores</h1>
                <Line />
            </TitleDiv>

            <CharacterDiv>
                {character && character?.map((item) => (
                    <CharacterBox>
                        <LeftCharacterDiv>
                            <img src={item.pictureBig} />
                        </LeftCharacterDiv>
                        <RightCharacterDiv>
                            <NameCharacter>{item.name}</NameCharacter>
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: item.strength, label: 'Força' },
                                            { id: 1, value: item.agility, label: 'Agilidade' },
                                            { id: 2, value: item.intelligence, label: 'Inteligência' },
                                            { id: 3, value: item.resistance, label: 'Resistência' },
                                        ],
                                        highlightScope: { faded: 'global', highlighted: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },

                                    },
                                ]}
                                slotProps={{
                                    legend: {
                                        labelStyle: {
                                            fontSize: 14,
                                            fontWeight: 'bold',
                                            fill: '#ffffff',
                                        },
                                    },
                                }}
                                width={400}
                                height={250}
                            />
                        </RightCharacterDiv>
                    </CharacterBox>
                ))}
            </CharacterDiv>

            <TitleDiv style={{ marginTop: 20 }}>
                <h1>Configuração</h1>
                <Line />
            </TitleDiv>
            
            <h1>!!!!!!!!!! FALTA A CONFIGURALÇÃO DO JOGO !!!!!!!!!!!!!!!!!!!</h1>
            <Button
                title='Voltar'
                color='redButton'
                onClick={() => navigate('/selectionFighters')}
            />

        </Container>
    );
};