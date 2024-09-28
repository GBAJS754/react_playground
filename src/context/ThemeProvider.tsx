import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext<null | {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}>(null);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState("light");

  const themeValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const value = useContext(ThemeContext);
  if (value == null) {
    throw new Error("useOverlay is only available within OverlayProvider.");
  }

  return value;
};
