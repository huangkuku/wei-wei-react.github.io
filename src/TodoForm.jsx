import{ useState } from 'react'
import { useTodo } from './hooks/TodoContext';

const TodoForm = () => {
    // 簡化useContext(TodoContext) by useTodo
    const {addTodo} = useTodo(); // {addTodo}是 value={todos: state.todos, addTodo,...}
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