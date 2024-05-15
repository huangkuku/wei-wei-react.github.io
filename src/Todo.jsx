﻿import {  useTodo } from './hooks/TodoContext'

const Todo = () => {
  const { todos, toggleTodo, deleteTodo } = useTodo();
  return (
    <>
    {todos.map((todo)=>(
      <div className="todo" key={todo.id}>
        <span style={{textDecoration: todo.complete? "line-through": null}}>
        TodoList: {todo.todoContent}
        </span>        
        <button className="toggle" onClick={()=>toggleTodo(todo.id)}>
        {todo.complete ? "Cancel":"Complete"}
        </button>
        <button className="delete" onClick={()=>deleteTodo(todo.id)}>Delete</button>
      </div>
    ))}
    </>
  )
}

export default Todo;