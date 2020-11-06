const handlers = {
    SHOW_ALERT: (state, {payload})=>({...payload, visible:true}),
    HIDE_ALERT: state =>({...state, visible:false}),
    default: state => state
}


export const alertReducer = (state, action) =>{
    const handle = handlers[action.type] || handlers.default;
    return handle(state, action)
}