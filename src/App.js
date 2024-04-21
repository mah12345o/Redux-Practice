import React from 'react'
import { Provider } from 'react-redux'
import Child from './com/Child'
import store from './redux/store'
const App = () => {
  return (
    <Provider store={store}>
        <Child />
    </Provider>
  )
}

export default App