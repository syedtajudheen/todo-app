import { VISIBILITY_FILTERS } from "../../constants";

export const getTodosState = store => store.todos;

export const getTodoList = store => getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) => getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

export const getTodos = store => getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store) => {
  const allTodos = getTodos(store);
  const filteredTodos = filterTodos(store.todos.visiblityFilter, allTodos);
  if (store.todos.isSearchEnabled) {
    return filteredTodos.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(store.todos?.searchText)));
  }
  return filteredTodos;
};

const filterTodos = (visiblityFilter, allTodos) => {
  switch (visiblityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case VISIBILITY_FILTERS.ACTIVE:
      return allTodos.filter(todo => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
}