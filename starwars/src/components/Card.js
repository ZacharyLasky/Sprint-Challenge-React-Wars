import React, { useState } from 'react';
import styled from 'styled-components';

// STYLES
const PersonDiv = styled.div`display: flex; justify-content: center; background: red;`;
const PersonH1 = styled.h1`color: grey`;

export default function Card(props) {
  const data = props.dataProps;
    return (
      <PersonDiv>
        {data.map(person => {
          return <PersonH1>{person.name}</PersonH1>
        })}
      </PersonDiv>
      )
    }