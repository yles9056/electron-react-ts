import React from 'react';
import './App.css';
import {ThemeProvider} from "@material-ui/core/styles"
import Layout from './components/Layout';
import theme from './theme';
// 定义全局的electron
declare global {
  interface Window {
      electron: any;
  }
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
