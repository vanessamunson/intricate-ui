import React, { createContext, useContext, ReactNode } from 'react';
import { themes, themeColors } from './themes';

type Themes = keyof typeof themes;
const ThemeContext = createContext<{theme: Themes; colors: themeColors}>({theme: 'coral', colors: themes['coral'],});

// Theme has a 'theme' prop which accepts a string value of the user's desired theme
// If no theme is chosen, the default is 'coral'
// Theme component must wrap all content in the application root 
export const Theme = ({theme, children}: {theme: Themes; children: ReactNode}) => {
    const colors = themes[theme];
    return (
        <ThemeContext.Provider value={{theme: theme, colors: colors}}>
            {children}
        </ThemeContext.Provider>
    );
};

// Returns the current theme and/or its colors
export const getTheme = () => {
    return useContext(ThemeContext);
};