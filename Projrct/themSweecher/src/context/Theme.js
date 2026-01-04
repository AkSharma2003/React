import { createContext, useContext } from "react";

export const ThemeContaxt = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider=ThemeContaxt.Provider

export default function useTheme(){
    return useContext(ThemeContaxt)
}
