import React from 'react';
import { getTheme } from '../Theme'; 
import styles from './Button.module.css';

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
    console.log(styles.button);
    const { colors } = getTheme();
    const backgroundColor = color ? colors[color] : colors.primary;

    // Users cannot set the color to something other than default if they use className, style prop is more specific -- fix
    // Rename variable
    const defaultStyles: React.CSSProperties = {
        backgroundColor,
        ...style,
    };

    const defaultClasses = `${styles.button} ${className}`.trim();

    return (
        <button onClick={onClick} className={defaultClasses} style={defaultStyles}>
            {children}
        </button>
    );
};

export default Button;