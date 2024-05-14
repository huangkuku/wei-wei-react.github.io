import React from 'react'

const Todo = ({todo, dispatch, id}) => {
    // dispatch傳入type 根據type改變state(這邊是todo)資料 讓complete 顯示為 刪除 或 完成
    // todo= {id: 65945, todoContent: 'todo', complete: false}
  return (
    <div className="todo">
        <span 
        style={{ textDecoration: todo.complete ? "line-through": null}}
        key={{id:todo.id}}
        >
        {todo.todoContent }
        </span>
        <button 
        className="toggle" 
        onClick={()=>{dispatch({ type:"TOGGLE", payload:{ id:todo.id } })}} // payload 告訴他要根據id修改狀態state payload:{資料的屬性: 資料}
        >
        {todo.complete ? "Cancel":"Complete"}
        </button>
        <button 
        className="delete" 
        onClick={ ()=>{dispatch({ type:"DELETE", payload:{ id:todo.id } })}}
        >
        Delete
        </button>
    </div>
  )
}

export default Todo