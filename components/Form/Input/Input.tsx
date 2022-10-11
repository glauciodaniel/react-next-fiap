import React, {InputHTMLAttributes} from 'react';
import styled from '@emotion/styled';


const InputData = styled.input`
  border: none;
  border-radius: 10px;
  padding: 2px 10px;
  height: 30px;
`;



export default function Input(props:InputHTMLAttributes<HTMLInputElement>) {
return (
    <InputData {...props}/>
)

}

