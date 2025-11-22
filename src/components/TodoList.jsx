import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onEdit, onDelete }) => {
  if(todos.length === 0) {
    return <p>No todos, Add one</p>
  }
  // else
  return (
    <div>
      {
        todos?.map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        )
      }
    </div>
  )
}

export default TodoList;