import { useDispatch, useSelector } from 'react-redux';
import { Header, InputText, TodoList, ToggleInputMenus, VisibilityFilters } from '../components';
import { ADD_PLACEHOLDER, SEARCH_PLACEHOLDER } from '../constants';
import { addTodo, searchTodos, setFilter, setInputMode, toggleTodo } from '../store/todo/actions';
import { getTodosByVisibilityFilter } from '../store/todo/selectors';

const Todo = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(state => state.todos?.visiblityFilter);
  const todos = useSelector(state => getTodosByVisibilityFilter(state));
  const isSearchEnabled = useSelector(state => state.todos?.isSearchEnabled);
  const placeholderText = (isSearchEnabled ? SEARCH_PLACEHOLDER : ADD_PLACEHOLDER);

  const onSubmit = (value) => {
    if (!isSearchEnabled) {
      dispatch(addTodo(value));
    } else {
      dispatch(searchTodos(value));
    }
  };
  const onSetFilter = (currentFilter) => dispatch(setFilter(currentFilter));
  const onToggleMenu = (flag) => dispatch(setInputMode(flag));
  const onToggleTodo = (id) => dispatch(toggleTodo(id));

  return (
    <div className='todo-container'>
      <Header />
      <section>
        <InputText placeholder={placeholderText} onSubmit={onSubmit} />
        <TodoList todos={todos} onToggleTodo={onToggleTodo} />
      </section>
      <div className='footer'>
        <ToggleInputMenus isSearchEnabled={isSearchEnabled} onToggleMenu={onToggleMenu} />
        <VisibilityFilters
          activeFilter={activeFilter}
          onSetFilter={onSetFilter}
        />
      </div>
    </div>
  );
}

export default Todo;
