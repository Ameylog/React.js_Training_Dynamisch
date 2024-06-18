import React from 'react'

export default function ExportsCompoents() {
  return (
    <div>
      <h5> This is export Componets</h5>

    </div>
  )
}
 
export const Car=()=>{
  return (
    <>
    {/* same  file no need import by default is exported */}
      <Bike/>        
      <p>I am car component</p>
    </>
  )
}

export function Bike(){
  return (
    <>
      <p>I am Bike component</p>
    </>
  )
}