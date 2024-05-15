import{ useState, useContext } from 'react'
import { TodoContext } from './hooks/TodoContext';

const TodoForm = () => {
    const {addTodo} = useContext(TodoContext); // {addTodo}是 value={todos: state.todos, addTodo,...}
    const [todoContent, setTodoContent] = useState("");
    const handleSubmit = (e) =>{
    e.preventDefault(); // 防止表單被送出時網頁refresh 
    //送出表單後執行addTodo
    addTodo(todoContent);   
  }
  return (
    <form onSubmit={ handleSubmit }>
        <input
        type="text"
        value={ todoContent }
        onChange={(e) => { setTodoContent(e.target.value) }}
        placeholder="Type in something..."
        />
    </form>
  )
}

export default TodoForm