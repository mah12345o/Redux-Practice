import React from 'react'
import { useSelector } from 'react-redux'

const Child2 = () => {
    const savedcards = useSelector((state) => state.numOfItems);
  return (
    <div>child2-{savedcards}</div>
  )
}

export default Child2