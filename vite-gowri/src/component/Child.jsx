import React from 'react'

const Child = ({ name, phno, Dept }) => {
  return (
    <div>Child
    <h1>Name: {name}</h1>
    <h1>Phone No: {phno}</h1>
    <h1>Department: {Dept}</h1> 
    </div>
  )
}

export default Child