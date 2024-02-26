import { ButtonHTMLAttributes, useEffect } from 'react';
import { ButtonCTA } from "./styles";
import CircularProgress from '@mui/material/CircularProgress';
import backgroundButton from '../../assets/personagens/teste.png'


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    picture: string,
    isDisabled?: boolean,
}

export function ButtonCharacter({ picture, isDisabled = false, ...rest }: ButtonProps) {


    return (
        <ButtonCTA
            disabled={isDisabled}
            style={{ backgroundImage: `url(../../assets/personagens/teste.png)` }}
            //style={{ backgroundImage: `url(${backgroundButton})` }}
            {...rest}
        >
            {isDisabled &&
                <CircularProgress size={24} color="inherit" />
            }

        </ButtonCTA>
    )
}