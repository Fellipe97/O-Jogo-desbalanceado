import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 100vh;

    justify-content: center;
    align-items: center;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    width: 500px;
`;

export const Title = styled.h1`
    color: #A283D3;
    font-size: 40px;
    font-weight: bold;
`;

export const Line = styled.div`
    width: 100%;
    height: 5px;

    background-color: #8C61B3;

    border-radius: 100px;

    margin-top: 10px;
`;
