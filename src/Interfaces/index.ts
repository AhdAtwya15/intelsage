export interface IColorShades {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

export interface IThemeTokens {
    grey: IColorShades;
    primary: IColorShades;
    greenAccent: IColorShades;
    redAccent: IColorShades;
    blueAccent: IColorShades;
}

export interface IExtendedPalette {
    neutral: {
        dark: string;
        main: string;
        light: string;
    };
    primary: {
        main: string;
    };
    secondary: {
        main: string;
    };
    background: {
        default: string;
    };
    mode: "dark" | "light";
}

export interface IThemeSetting {
    palette: IExtendedPalette;
    typography: {
        fontFamily: string;
        fontSize: number;
        h1: { fontFamily: string; fontSize: number };
        h2: { fontFamily: string; fontSize: number };
        h3: { fontFamily: string; fontSize: number };
        h4: { fontFamily: string; fontSize: number };
        h5: { fontFamily: string; fontSize: number };
        h6: { fontFamily: string; fontSize: number };
    };
}


export interface IColorModeContext{
    toggleColorMode: () => void;
}

export interface IFormInputs{
    firstName: string,
    lastName: string,
    email: string,
    contact: string,
    address1: string,
    address2: string,
}