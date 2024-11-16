import "./App.css";
import React, { createContext, useContext, ReactNode } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<Theme>("light");

interface ThemeProviderProps {
  theme: Theme;
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  return (
    <div className={`theme-${theme}`}>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </div>
  );
};

const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return theme;
};

// Components
const Body = () => {
  const theme = useTheme();
  return (
    <div className="content">
      <h1>메인 콘텐츠</h1>
      <p>현재 테마: {theme}</p>
    </div>
  );
};

const Footer = () => {
  const theme = useTheme();
  return (
    <footer className="footer">
      <p>푸터 영역</p>
      <p>현재 테마: {theme}</p>
    </footer>
  );
};

const App = () => {
  return (
    <ThemeProvider theme="dark">
      <Body />
      <ThemeProvider theme="light">
        <Footer />
      </ThemeProvider>
    </ThemeProvider>
  );
};

export { ThemeProvider, useTheme, type Theme };
export default App;
