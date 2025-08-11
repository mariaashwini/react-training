import { useTheme } from "./context/ThemeContext";

const ThemeToggle = () => {
    const {theme,toggleTheme} = useTheme();
    return (
        <button onClick={toggleTheme}>
            Switch to {theme == "dark" ? "Light" : "Dark"} mode
        </button>
    )
}
export default ThemeToggle;