import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      main: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        light: string;
        light2: string;
        grey: string;
        dark: string;
      };
      text: {
        primary: string;
        secondary: string;
        accent: string;
        grey: string;
      };
      link: {
        normal: string;
        hover: string;
        visited: string;
      };
      info: {
        warning?: string;
        error: string;
        success: string;
      };
    };
    typography: {
      fonts: string[];
      sizes: {
        sizeXXS: string;
        sizeXS: string;
        sizeS: string;
        sizeM: string;
        sizeL: string;
        sizeXL: string;
        sizeXXL: string;
        sizeXXXL: string;
      };
    };
  }
}

export const theme: DefaultTheme = {
  palette: {
    main: {
      primary: `#8d0008`,
      secondary: `#fbb04c`,
      accent: `#f05b22`,
      background: `#a31418`,
      light: `#fff5ee`,
      light2: `#fffcfa`,
      grey: `#e7e7e7`,
      dark: `#000`,
    },
    text: {
      primary: `#fff5ee`,
      secondary: `#8d0008`,
      accent: `#000`,
      grey: `#333`,
    },
    link: {
      normal: `#ffac95`,
      hover: `#000`,
      visited: `#ffac95`,
    },
    info: {
      success: `#5abab6`,
      error: `#d83338`,
    },
  },
  typography: {
    fonts: [`Poppins`, `Arial`, `Helvetica`],
    sizes: {
      sizeXXS: `0.25rem`,
      sizeXS: `0.625rem`,
      sizeS: `0.75rem`,
      sizeM: `1rem`,
      sizeL: `1.25rem`,
      sizeXL: `1.5rem`,
      sizeXXL: `2.5rem`,
      sizeXXXL: `4rem`,
    },
  },
};
