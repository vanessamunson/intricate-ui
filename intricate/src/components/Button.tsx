import React from 'react';
import { getTheme } from '../Theme'; 

type Props = {
    onClick?: () => void;
    className?: string;
    color?: 'primary' | 'secondary' | 'tertiary' | 'pale' | 'dark' | 'accent';
    style?: React.CSSProperties;
    children: React.ReactNode;
};

const Button: React.FC<Props> = ({
    onClick = () => {}, 
    className = '', 
    color = 'primary',
    style = {},
    children
}) => {
    const { colors } = getTheme();
    const backgroundColor = color ? colors[color] : colors.primary;

    const styles: React.CSSProperties = {
        backgroundColor,
        color: '#fafafa',
        width: '90px',
        height: '40px',
        border: 'none',
        borderRadius: '20px',
    };

    const allStyles = {...styles, ...style};

    return (
        <button onClick={onClick} className={className} style={allStyles}>
            {children}
        </button>
    );
};

export default Button;