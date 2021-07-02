import { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { 
    isOutlined?: boolean
};

export function Button({isOutlined = false, ...props}: ButtonProps) { 
    
    return (
        <button 
        className = {`button ${isOutlined ? 'outlined' : ''}`}
         {...props} />
        //vamos usar o spread operator do JS (...) para replicicar todas as props (ou, melhor dizendo, o array de props) para dentro das chaves

    )
}
