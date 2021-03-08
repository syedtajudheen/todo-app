import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_INPUT_MODE, SEARCH_TODOS } from "./types";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

export const setInputMode = isSearchEnabled => ({
  type: SET_INPUT_MODE,
  payload: isSearchEnabled
});

export const searchTodos = (searchText) => ({
  type: SEARCH_TODOS,
  payload: {
    searchText
  }
});
