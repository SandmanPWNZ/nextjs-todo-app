import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_TODOS } from '../../queries'

import Note from '../components/Note'
import TodoForm from '../components/TodoForm.js'

const App = () => {
  const { loading, error, data } = useQuery(GET_TODOS)
  if (loading) {
    return <div>We are loading yours todos, don't worry!</div>
  }
  if (error) {
    return <div>Oops! We stumbled upon this error:{error}</div>
  }
  return (
    <div className="container">
      <div>
        {data.todoes.map(todo => {
          return <Note key={todo.id} todo={todo} />
        })}
      </div>
      <div>
        <TodoForm />
      </div>
    </div>
  )
}

export default App
