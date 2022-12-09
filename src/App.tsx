import React from 'react';
import './App.css';
import FindMed from './components/FindMed';
import MedInfo from './components/MedInfo';
import Tables from './components/Table';

const App = () => {
  const style: React.CSSProperties = {};
  return (
    <div style={{ margin: '20px auto', padding: '10px' }}>
      <MedInfo />
      <FindMed />
      <Tables />
    </div>
  );
};
export default App;
