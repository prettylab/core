"use client";

import { ReactNode } from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    disabled: Palette["primary"];
  }
  interface PaletteOptions {
    disabled?: PaletteOptions["primary"];
  }
}

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#003128",
        contrastText: "#fff",
      },
      success: {
        main: "#116c3f",
        contrastText: "#fff",
      },
      disabled: {
        main: "#505050",
        contrastText: "#fff",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            padding: "15px",
            borderRadius: "8px",
          },
        },
      },
    },
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
