import "./App.css";
import Todo from './Todo';
import TodoForm from "./TodoForm";
import { TodoProvider } from "./hooks/TodoContext";

function App() {  
  return (
    <TodoProvider>{/* Provider包住的Component共享一個state */}
      <div>
        <TodoForm />
        <Todo />
      </div>
    </TodoProvider>
  );
}
export default App;