import React from 'react';

import Data from './components/Data';
import './App.css';

import styled from 'styled-components';
//STYLES
const DataDiv = styled.div`border: 3px solid orange; border-radius: 10px; color: red; margin: 0px 100px 0px 100px; font-size: 60px; height: 250px; display:`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <DataDiv>
        <Data></Data>
      </DataDiv>
  </div>
  );
}

export default App;