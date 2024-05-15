// 處理 更改state
export const initState = {
    todos:[]
}
export const ACTIONS = {
    ADD_TODO:"ADD_TODO",
    TOGGLE_TODO:"TOGGLE_TODO",
    DELETE_TODO: "DELETE_TODO"
}
// state: initState ,action: 透過外部的(TodoContext)dispatch傳遞進來
const TodoReducer =(state, action)=>{
    const { type, payload } = action; //先解構action action is Obj: {type: 'ADD_TODO'(看你底下的type是什麼), payload: {…}}
    switch(type){
        case ACTIONS.ADD_TODO: // 新增todo 利用context幫忙管理 新增到陣列todos
            return {
                ...state,
                todos: payload.todo
            }
        case ACTIONS.TOGGLE_TODO: 
            return {
                ...state,
                todos: payload.todo
            }
        case ACTIONS.DELETE_TODO: 
            return {
                ...state,
                todos: payload.todo
            }
        default:
            return state
    }
}
export default TodoReducer;