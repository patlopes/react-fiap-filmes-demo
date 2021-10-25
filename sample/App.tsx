import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import temaDefault from './global/themes/default';

export default function App() {
  return (
    <ThemeProvider theme={{temaDefault}}>
        <Home />
    </ThemeProvider>
  
  );
}