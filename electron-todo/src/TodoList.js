import React from 'react'

export default function TodoList({todos, completeTodo, deleteTodo}) {
  return (
    <ul>
      {
        todos.map((todo) => (
          <li key={todo.id}>
            {+todo.completed ? <strike>{todo.content}</strike> : todo.content}
            <div className="btn-groups">
              <button className="complete" onClick={() => completeTodo(todo.id)}>{+todo.completed ? 'Rework' : 'Complete'}</button>
              <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))
      }
    </ul>
  );
}
