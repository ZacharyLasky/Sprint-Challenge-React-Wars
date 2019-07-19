import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// const centerDiv = styled.div`display: flex; flex-direction: column;`;

import Card from './Card';

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
   .then(response => {
     setData(response.data.results); 
     console.log("DATA:", response.data.results)
    })
    .catch(error => {
      console.log("ERROR:", error)
    })
  }, [])

  return(
    <div>
      {data.map(person => {
        return (person.name);
        })}
    </div>
  )
}

export default Data;