import React from 'react'
import {  useDispatch } from 'react-redux'
import { increment } from '../redux/action'

const Child = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => dispatch(increment())}>add</button>
    </div>
  )
}

export default Child