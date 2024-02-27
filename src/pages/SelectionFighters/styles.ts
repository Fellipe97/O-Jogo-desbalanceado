import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    //height: 100vh;

    justify-content: center;
    align-items: center;

    .buttonStyle{
        margin-bottom: 50px;
    }
`;

export const Box = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    width: 100%;

    //background-color: red;
`;

export const BoxTitle = styled.div`
    margin-top: 20px;
`;

export const BoxContent = styled.div`
    margin-top: 20px;

    //background-color: red;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;

    justify-content: left;

    gap: 10px;
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
export const DivButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
`;