import React from 'react'
import styled from 'styled-components'

function StyleComonents() {

    const Button = styled.button({
        backgroundColor:"blue",
        color:"white",
        padding:"10px 20px",
        border:"none",
        borderRadius:"20px"
    })

  const Tr = styled.tr`
  background-color: gray;

  &:nth-child(even) {
    background-color: lightgray;
  }

  &:nth-child(odd) {
    background-color: white;
  }
`;
    const Table = styled.table
       `
       padding:"20px";
        backgroundColor:"lightgray"

    `
    
  return (
    <div>StyleComonents
        <br />
        <Button>Click Here</Button>
        <Table>
            <Tr>
            <td>test-1</td>
            <td>test-2</td>
            <td>test-3</td>
            <td>test-4</td>
            <td>test-5</td>
        </Tr>
        <Tr>
            <td>test-1</td>
            <td>test-2</td>
            <td>test-3</td>
            <td>test-4</td>
            <td>test-5</td>
        </Tr>
        <Tr>
            <td>test-1</td>
            <td>test-2</td>
            <td>test-3</td>
            <td>test-4</td>
            <td>test-5</td>
        </Tr>
        <Tr>
            <td>test-1</td>
            <td>test-2</td>
            <td>test-3</td>
            <td>test-4</td>
            <td>test-5</td>
        </Tr>
        <Tr>
            <td>test-1</td>
            <td>test-2</td>
            <td>test-3</td>
            <td>test-4</td>
            <td>test-5</td>
        </Tr>
        </Table>
        
    </div>
  )
}

export default StyleComonents