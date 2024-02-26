import { ButtonHTMLAttributes, useEffect } from 'react';
import { ButtonCTA } from "./styles";
import CircularProgress from '@mui/material/CircularProgress';


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    picture: string,
    isDisabled?: boolean,
}

export function ButtonCharacter({ picture, isDisabled = false, ...rest }: ButtonProps) {

    useEffect(()=>{
        console.log(picture)
    },[])

    return (
        <ButtonCTA
            disabled={isDisabled}
            //style={{ backgroundImage: `url(backgroundButton)` }}
            //style={{ backgroundImage: `url(${picture})` }}
            style={{ backgroundImage: `url(${picture})` }}
            
            
            //style={{ backgroundImage: `url("https://github.com/Fellipe97/O-Jogo-desbalanceado/blob/main/src/assets/personagens/teste.png")` }}

            {...rest}
        >
            {isDisabled &&
                <CircularProgress size={24} color="inherit" />
            }

            {/* <img src={`../../assets/personagens/${picture}.png`}/> */}
        </ButtonCTA>
    )
}