import React, { useState, useEffect } from 'react'
import { UPDATE_TODO, DELETE_TODO, TOGGLE_TODO, GET_TODOS } from '../../queries'
import { useMutation } from '@apollo/react-hooks'

const updateAfterDeleteMutation = (cache, { data }) => {
  ;(function(cache, data) {
    const { todoes } = cache.readQuery({ query: GET_TODOS })
    cache.writeQuery({
      query: GET_TODOS,
      data: { todoes: todoes.filter(todo => todo.id !== data.deleteTodo.id) }
    })
  })(cache, data)
}

const Note = ({ todo: { id, completed, title } }) => {
  let inputRef

  const [editable, setEditable] = useState(false)
  const [value, setValue] = useState(title)

  const [deleteTodo] = useMutation(DELETE_TODO, { update: updateAfterDeleteMutation })
  const [toggleTodo] = useMutation(TOGGLE_TODO)
  const [updateTodo] = useMutation(UPDATE_TODO)

  useEffect(() => {
    if (editable) {
      inputRef.focus()
    }
  }, [editable])

  const handleEdit = () => {
    setEditable(!editable)
    if (editable) {
      updateTodo({ variables: { data: { title: value }, where: { id } } })
    }
  }

  const classString = completed ? 'note completed' : 'note'
  return (
    <div className={classString}>
      <input
        ref={input => (inputRef = input)}
        className={editable ? 'editable' : ''}
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
        disabled={!editable}
      />
      <button className="edit" onClick={handleEdit}>
        {editable ? 'Save' : 'Edit'}
      </button>
      <button
        className="done"
        onClick={() => toggleTodo({ variables: { data: { completed: !completed }, where: { id } } })}
      >
        {completed ? 'Undone' : 'Done'}
      </button>
      <button className="delete" onClick={() => deleteTodo({ variables: { where: { id } } })}>
        Delete
      </button>
    </div>
  )
}

export default Note
