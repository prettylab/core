"use client";

import { ReactNode } from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

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
