// Action 타입
const ADD_TODO = 'ADD_TODO';
const GET_TODO_BY_ID = 'GET_TODO_BY_ID';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_STATUS_TODO = 'TOGGLE_STATUS_TODO';

// 액션 생성자
export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});

export const toggleStatusTodo = (payload) => ({
  type: TOGGLE_STATUS_TODO,
  payload,
});

export const getTodoByID = (payload) => ({
  type: GET_TODO_BY_ID,
  payload,
});

// 초기 상태
const initialState = {
  todos: [
    {
      id: '1',
      title: '리액트',
      body: '리액트를 배워봅시다',
      isDone: false,
    },
  ],
  todo: {
    id: '0',
    title: '',
    body: '',
    isDone: false,
  },
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload], // 배열에 새로운 아이템을 추가
      };

    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };

    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload;
        }),
      };

    default:
      return state;
  }
};

export default todos;
