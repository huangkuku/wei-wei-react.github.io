import React from 'react'

const Todo = ({todo, dispatch}) => {
    // dispatch傳入type 根據type改變state(這邊是todo)資料 讓complete 顯示為 刪除 或 完成
    console.log(todo)
  return (
    <div className="todo">
        <span> Todo Content</span>
        <button className="toggle">Complete</button>
        <button className="delete">Delete</button>
    </div>
  )
}

export default Todo