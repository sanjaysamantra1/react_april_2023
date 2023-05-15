import React,{ memo } from 'react'

function Cars({cars}) {
  return <>
    {console.log('Cars component rendered....')}
    <h3>This is Cars component</h3>
    <ul>
        {cars.map(car=><li key={car}>{car}</li>)}
    </ul>
  </>
}
export default memo(Cars);