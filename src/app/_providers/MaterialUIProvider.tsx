'use client';
import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material';
import {Lexend} from "next/font/google";

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
});

const common = {
  typography: {
    fontFamily: lexend.style.fontFamily,
    fontSize: 16,
  },
};

export const muiTheme = createTheme(common);

interface Props {
  children: React.ReactNode
}
export default function MaterialUIProvider({children}: Props) {
  return (
    <ThemeProvider theme={muiTheme}>{children} </ThemeProvider>
  );
}
