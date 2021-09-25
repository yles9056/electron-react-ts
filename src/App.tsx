import React from 'react';
import './App.css';
import Layout from './components/Layout';
// 定义全局的electron
declare global {
  interface Window {
      electron: any;
  }
}
function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
