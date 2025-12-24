import React, { useContext } from 'react'
import { CompanyContext } from './Company'

function Childs(props) {
    const companyName = useContext(CompanyContext);
  return (
    <div>Childs
        <h3>
            Title from Parent ={props.parentTitle}
        </h3>
        <h3>CompanyName:{companyName}</h3>
    </div>
  )
}

export default Childs