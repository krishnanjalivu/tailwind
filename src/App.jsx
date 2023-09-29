import React from 'react'
import Todos from './components/Todos'
import {RecoilRoot, useRecoilValue} from 'recoil'
import { totalTodos } from './state/selectors/TotalTodos'

const App = () => {
  const totalTodosState=useRecoilValue(totalTodos)
  return (
    
    <div className='App'>
      <h1>Hello</h1>
      <Todos />
      <h3>Total Todos:{totalTodosState}</h3>
    </div>
    
  )
}

export default App

