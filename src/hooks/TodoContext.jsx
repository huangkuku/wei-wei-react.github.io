// 新增、刪除的邏輯都在這裡
import { useReducer, createContext, useContext } from "react";
import TodoReducer, { ACTIONS, initState } from "./TodoReducer";

export const TodoContext = createContext(initState);

export const TodoProvider = ({children})=>{
    // {children}: Provider包住的Component
    const [state, dispatch]= useReducer(TodoReducer, initState); //使用useReducer dispatch觸發TodoReducer,state初始值: initState
    // 之前是在Todo的<button className="toggle" onClick={()=>{dispatch({...})} 這次在context處理
    // 被TodoContextProvider包住的Component都可以使用底下的func ex: addTodo
    const addTodo = (todoContent)=>{
        // addTodo (todoContent): 輸入的文字
        const todo = todoObj(todoContent);
        const newTodo =state.todos.concat(todo); // concat()複製原本的arr到新的arr, 在新的arr進行操作, state是initState 裡面有一個todos:[]
        dispatch({
            type: ACTIONS.ADD_TODO,
            payload: { todo: newTodo }
        });
    };
    const toggleTodo = (todoId)=>{ //todoId是外部(TodoReducer)傳進來
        // press 'Complete' 出現"line-through" 並顯示'Cancel'
        // state.todos is arr (2) [{…}, {…}] 0:{id:..,todoContent:..,complete:...}, 1:{id:...}
        const newTodo = state.todos.map((todo)=>{
            if(todo.id === todoId){
                return {...todo, complete: !todo.complete}
            }
            return todo;
        });
        dispatch({
            type:ACTIONS.TOGGLE_TODO,
            payload: { todo: newTodo }
        });
    };
    const deleteTodo = (todoId)=>{
        const newTodo = state.todos.filter((todo)=>todo.id !== todoId);
        // newTodo (2) [{…}, {…}], 0: {id: 71812, todoContent: 'dry in', complete: false} 1: {id: ..., todoContent:,, complete:...}
        dispatch({
            type:ACTIONS.DELETE_TODO,
            payload: { todo: newTodo }
        });
    };
    const value={
        todos: state.todos,
        addTodo,
        toggleTodo,
        deleteTodo
    }
    // How to use addTodo()? By .Provider 被Provider包住的component可讀取value裡的參數 ex: state, func...
    return <TodoContext.Provider value={value}> {children} </TodoContext.Provider>
};
// obj到陣列 todos:[]
const todoObj =(todoContent)=>{ 
    return {id: Math.floor(Math.random() * 100000), 
    todoContent, 
    complete: false}
   }
// 在<Todo> <TodoForm> 把 import useContext TodoContext 省略掉 建立一個hook: useTodo
export const useTodo = ()=>{
    const context = useContext(TodoContext);
    if(context === undefined){
        console.log("Error");
    }
    return context;
};
