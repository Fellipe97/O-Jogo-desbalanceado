import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;

    padding-inline: 10%;
    padding-block: 20px;
`;

export const TitleDiv = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 10px;

    h1{
        color: #A283D3;
        font-size: 40px;
        font-weight: bold;
    }
`;

export const Line = styled.div`
    width: 100%;
    height: 5px;

    background-color: #8C61B3;

    border-radius: 100px;
`;


export const CharacterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    gap: 10px;
`;

export const CharacterBox = styled.div`
    display: flex;
    gap: 20px;
`;

export const LeftCharacterDiv = styled.div`
    //width: 50%;
    display: flex;

    img{
        width: 250px;
        border-radius: 10px;
        object-fit: cover;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`;

export const RightCharacterDiv = styled.div`
    flex:1;
    padding: 20px;
`;

export const NameCharacter = styled.h1`
    flex:1;
    color: #ffffff;
`;
