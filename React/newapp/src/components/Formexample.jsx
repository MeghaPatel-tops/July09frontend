import React from 'react'

function Formexample() {
    const formSubmit = (event)=>{
        event.preventDefault();
        alert("from sunmitted");
    }
  return (
    <div>
        <form method='post'>
            <input type="text" name="username" id="" />
            <input type="submit" value="Submit" onClick={formSubmit} />
        </form>
    </div>
  )
}

export default Formexample