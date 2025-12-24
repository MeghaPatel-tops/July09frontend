import React from 'react'
import Parent from './Parent';

function GrandParent() {
    let Title= "Welcome msg";
  return (
    <div>
        GrandParent
        <Parent title={Title}></Parent>
    </div>
  )
}

export default GrandParent