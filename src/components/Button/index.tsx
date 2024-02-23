import { ButtonHTMLAttributes, useEffect } from 'react';
import { ButtonCTA } from "./styles";
import CircularProgress from '@mui/material/CircularProgress';


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string,
    isDisabled?: boolean,
    color?: "default" | "redButton" | "greenButton"
}

export function Button({ title, color = 'default', type, isDisabled = false, ...rest }: ButtonProps) {


    return (
        <ButtonCTA
            type={type}
            color={color}
            disabled={isDisabled}
            {...rest}
        >
            {isDisabled &&
                <CircularProgress size={24} color="inherit" />
            }

            {!isDisabled &&
                title    
            }

        </ButtonCTA>
    )
}