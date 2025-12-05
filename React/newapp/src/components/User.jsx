import React from 'react'

function User(props) {
  return (
    <div>
        <h1>Welcome {props.user.uname}</h1>
        <h2>Email:{props.user.email}</h2>
    </div>
  )
}

export default User