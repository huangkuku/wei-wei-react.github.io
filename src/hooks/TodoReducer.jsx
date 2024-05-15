export const initState = {
    todos:[]
}

export const ACTIONS = {
    ADD_TODO:"ADD_TODO",
    TOGGLE_TODO:"TOGGLE_TODO",
    DELETE_TODO: "DELETE_TODO"
}
// state: initState ,action: 透過外部的dispatch傳遞進來
const TodoReducer =(state, action)=>{
    const { type, payload } = action; //先解構action
    console.log("type", type);
    console.log("action", action);
    switch(type){
        case ACTIONS.ADD_TODO: // 新增todo 利用context幫忙管理 新增到陣列todos
            return {
                ...state,
                todos: payload.todo
            }
        default:
            return state
    }
}
export default TodoReducer;