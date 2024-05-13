import { useState, useReducer } from 'react';
import "./App.css";
import Todo from './Todo';

import './App.css'
// useReduser用來處理 state 邏輯 有兩個參數: state(自訂名稱:todos) dispatch傳進來的參數:action
const reduser = (todos, action) => { // reduser用來改變state(這邊是todos)  // 根據第二個action做一些改變/動作
  console.log(todos);// 參數1 todos: [], // 參數2 action: 透過dispatch傳進去的Obj {type: 'ADD', payload: {…}}  其中payload: {todoContent: 'Hello World'} action.payload.todoContent= 'Hello World' 
  switch(action.type){
    case "ADD":
      return [
      ...todos,   // ...todos把前一個todos保留
      {todoContent:action.payload.todoContent, complete: false} // 把新的todos加進去第一個todoContent是屬性名稱 , complete一開始為false
    ]
  }
}
function App() {
  const [todos, dispatch] = useReducer(reduser, []);  // [參數1 state: todos, 參數2 dispatch: dispatch (用來觸發 reduser 的 func) ] // = useReducer(dispatch觸發的func: reduser, todos一開始為一個空的array: [])
  const [todoContent, setTodoContent] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault(); // 防止表單被送出時網頁refresh    
    dispatch({ type:"ADD", payload: { todoContent: todoContent }}); //dispatch會傳一些參數(條件)給reduser reduser根據參數改state // 參數1, type(動作分類), 新增add 刪除 完成 算是一些動作action, 參數2,帶資料進去payload,第一個todoContent是屬性名稱
  }
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input
        type="text"
        value={ todoContent }
        onChange={(e) => { setTodoContent(e.target.value) }}
        placeholder="Type in something..."
        />
      </form>      
      {todos.map((todo)=>(
        <Todo todo={ todo } dispatch={ dispatch }/>
      ))}      
    </div>
  )
}
export default App;