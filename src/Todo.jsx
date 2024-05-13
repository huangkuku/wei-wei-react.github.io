import React from 'react'

const Todo = ({todo, dispatch}) => {
    // dispatch傳入type 根據type改變state(這邊是todo)資料 讓complete 顯示為 刪除 或 完成
  return (
    <div className="todo">
        <span style={{textDecoration: todo.complete? "line-through": null}}>
            { todo.todoContent }
        </span>
        <button className="toggle" onClick={()=>dispatch({type:"TOGGLE",payload:{id: todo.id}})}>
            {todo.complete? "Cancle":"Complete"}
        </button>
        <button className="delete">Delete</button>
    </div>
  )
}

export default Todo