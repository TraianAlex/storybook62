export const UPDATE_TODO = "UPDATE_TODO";
export const CREATE_TODO = "CREATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

const initialState = {
  newTodo: "",
  todos: [{ title: "Finish this project" }],
};

const reduce = (state, action) => {
  switch (action.type) {
    case UPDATE_TODO:
      return {
        ...state,
        newTodo: action.todo,
      };
    case CREATE_TODO:
      return {
        newTodo: "",
        todos: state.todos.concat({ title: action.todo }),
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.title !== action.todo),
      };
    default:
      return state;
  }
};

let state = initialState;
let store = null;

export const createStore = () => {
  if (store) {
    return store;
  }
  let listeners = [];

  store = {
    subscribe: (listener) => {
      listeners.push(listener);
    },
    dispatch: (action) => {
      state = reduce(state, action);
      listeners.forEach((l) => l());
      return action;
    },
    getState: () => state,
  };

  return store;
};
