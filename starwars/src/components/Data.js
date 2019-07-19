import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        return person.name + " ";
        })}
    </div>
  )
}

export default Data;