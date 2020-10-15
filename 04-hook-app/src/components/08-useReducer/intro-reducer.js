const initialState = [{
    id: 1,
    tarea: 'Comprar pan',
    done: false
}];

const todoReducer = (state = initialState, action) => {

    if(action?.type === 'agregar') return [...state, action.payload]
    
    return state;
}

let todos = todoReducer();

const nuevaTarea = {
    id: 2,
    tarea: 'Estudiar HTML',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    payload: nuevaTarea
}

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);