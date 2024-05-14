import { useState, useReducer } from 'react';
import "./App.css";
import Todo from './Todo';
import Action from './Action';

import './App.css'
// useReduser用來處理 state 邏輯 有兩個參數: state(自訂名稱:todos) dispatch傳進來的參數:action
const reduser = (todos, action) => { // reduser用來改變state(這邊是todos)  // 根據第二個action做一些改變/動作
  // 參數1 todos: [], // 參數2 action: 透過dispatch傳進去的Obj {type: 'ADD', payload: {…}}  其中payload: {todoContent: 'Hello World'} action.payload.todoContent= 'Hello World' 
  const { todoContent, id } = action.payload; // action.payload.todoContent解構
  
  switch(action.type){
    case Action.ADD:
      return [
      ...todos,   // ...todos把前一個todos保留
      // {todoContent:action.payload.todoContent, complete: false} // 把新的todos加進去第一個todoContent是屬性名稱 , complete一開始為false
      newTodo(todoContent) // 取代上一行code
    ];
    case Action.TOGGLE:
      return todos.map((todo)=>{
        if (todo.id === id){
          return {...todo, complete: !todo.complete}; // 直接把complete做一個反向 true變成false false變成true
        }
        return todo;
      });
    case Action.DELETE:
      return todos.filter((todo) => todo.id !== id);
    default:
      return todos;
  }
}
// 因為可以 return 很多筆資料 {todoContent: todoContent, complete: false, ...}
const newTodo =(todoContent)=>{ 
  return {id: Math.floor(Math.random() * 100000), // 根據id 找哪一筆todo 去做完成complete或刪除delete
  todoContent, 
  complete: false}  
 }

function App() {
  const [todos, dispatch] = useReducer(reduser, []);  // [參數1 state: todos, 參數2 dispatch: dispatch (用來觸發 reduser 的 func) ] // = useReducer(dispatch觸發的func: reduser, todos一開始為一個空的array: [])
  const [todoContent, setTodoContent] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault(); // 防止表單被送出時網頁refresh    
    dispatch({ type:Action.ADD, payload: { todoContent: todoContent }}); 
    // dispatch會傳一些參數(條件)給reduser reduser根據參數改state 
    // 參數1, type(動作分類), 新增add 刪除 完成 算是一些動作action, 參數2,帶資料進去payload,第一個todoContent是屬性名稱:第二個todoContent是useState初始值參數
    // 避免type:ADD多一個字少一個字導致在case匹配錯誤 增加一個Action.jsx 定義Action {ADD: "ADD", TOGGLE: "TOGGLE",...} 再import Action
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
      {/* todos為一arr  有'完成'、'刪除'等type 根據type改變state 透過dispatch傳入 改變todos*/}  
      {todos.map((todo)=>(
        <Todo todo={ todo } dispatch={ dispatch } id={ todo.id }/>
      ))}      
    </div>
  )
}
export default App;