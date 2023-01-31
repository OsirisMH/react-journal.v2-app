import React from 'react';
import { ThemeProvider } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';

import { baseTheme } from './baseTheme';

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      { children }
    </ThemeProvider>
  )
}
