import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
export default function ThemeProvider({children}){
    
    const [theme,setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prev) => prev == 'light' ? 'dark' : 'light');
    }

    useEffect(()=>{
        document.body.className = theme;
    },[theme]);

    return (<ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>)
}
export const useTheme = () => useContext(ThemeContext);