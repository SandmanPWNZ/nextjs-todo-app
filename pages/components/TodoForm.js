import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { ADD_TODO, GET_TODOS } from '../../queries'

let todoInput

const updateAfterAddMutation = (cache, { data }) => {
  ;(function(cache, data) {
    const { todoes } = cache.readQuery({ query: GET_TODOS })
    cache.writeQuery({
      query: GET_TODOS,
      data: { todoes: todoes.concat(data.createTodo) }
    })
  })(cache, data)
}

const TodoForm = () => {
  const [todoText, setTodoText] = useState('')
  const [errorText, setErrorText] = useState('')

  const [createTodo, mutationState] = useMutation(ADD_TODO, {
    update: updateAfterAddMutation
  })

  const errorClass = errorText ? 'message error' : 'message'

  const handleKeyPress = () => {
    if (event.key === 'Enter') {
      if (!todoText) {
        setErrorText('No empty values!!')
        return
      }
      createTodo({ variables: { data: { title: todoText } } })
      setErrorText('')
      setTodoText('')
    }
  }

  return (
    <div>
      {errorText && <p className={errorClass}>{errorText}</p>}
      <input
        placeholder="Enter Notes"
        type="text"
        className="input"
        value={todoText}
        onChange={event => setTodoText(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <div className="button" onClick={() => createTodo({ variables: { data: { title: todoText } } })}>
        +
      </div>
    </div>
  )
}

export default TodoForm
