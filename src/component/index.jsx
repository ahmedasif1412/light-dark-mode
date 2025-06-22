import "./styles.css";
import useLocalStorage from "./useLocalStorage";

const DarkLightMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="dark-light-mode" data-theme={theme}>
      <div className="main-container">
        <p>Theme</p>
        <button onClick={handleThemeChange}>Change Theme</button>
      </div>
    </div>
  );
};

export default DarkLightMode;
