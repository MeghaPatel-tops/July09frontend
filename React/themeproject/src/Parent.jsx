import React from 'react'
import Childs from './Childs'

function Parent(props) {
  return (
    <div>Parent
        <h2>Title from Gran Parent:{props.title}</h2>
        <Childs parentTitle={props.title}></Childs>
    </div>
  )
}

export default Parent