import React, { useState } from 'react'
const Input = ({HandleSearch,search}) => {
  return (
    <div className='pokemon-search'>
      <input type="text" placeholder='Search Pokemon'value={search} onChange={(event)=>HandleSearch(event)}/>
    </div>
  
  )
}

export default Input
