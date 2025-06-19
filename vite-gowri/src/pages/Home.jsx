import React from 'react'

const Home = ({items,users}) => {
  return (
    <div>
      <ol>
        {items.map((frds)=><li>{frds}</li>)}
      </ol>
      <h1>{users.username}</h1>
      <h1>{users.userpassword}</h1>

    </div>
  )
}

export default Home