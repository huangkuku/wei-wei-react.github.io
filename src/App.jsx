import "./App.css";
import Todo from './Todo';
import TodoForm from "./TodoForm";

// 因為可以 return 很多筆資料 {todoContent: todoContent, complete: false, ...}
// const newTodo =(todoContent)=>{ 
//   return {id: Math.floor(Math.random() * 100000), // 根據id 找哪一筆todo 去做完成complete或刪除delete
//   todoContent, 
//   complete: false}  
//  }

function App() {
  
  return (
    <div>
      <TodoForm />
      <Todo />
      {/* {todos.map((todo)=>(
        <Todo todo={ todo } dispatch={ dispatch } id={ todo.id }/>
      ))}       */}
    </div>
  )
}
export default App;