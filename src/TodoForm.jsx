import{ useState } from 'react'

const TodoForm = () => {
    const [todoContent, setTodoContent] = useState("");
    const handleSubmit = (e) =>{
    e.preventDefault(); // 防止表單被送出時網頁refresh    
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