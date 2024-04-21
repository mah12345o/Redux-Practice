import React from 'react'
import { Provider } from 'react-redux'
import Child from './com/Child'
import Child2 from './com/Child2'
import store from './redux/store'
const App = () => {
  return (
    <Provider store={store}>
        <Child />
        <Child2/>
    </Provider>
  )
}

export default App