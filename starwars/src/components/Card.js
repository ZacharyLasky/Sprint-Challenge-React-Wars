import React, { useState } from 'react';
import styled from 'styled-components';

// STYLES
const PersonDiv = styled.div`display: flex; justify-content: center; background: #6BB35D;`;

export default function Card(props) {
  const data = props.dataProps;
    return (
      <PersonDiv>
        {data.map(person => {
          return <h1>{person.name}</h1>
        })}
      </PersonDiv>
      )
    }