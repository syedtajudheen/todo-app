import { VISIBILITY_FILTERS } from "../../constants";
import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_INPUT_MODE, SEARCH_TODOS } from "./types";

const initialState = {
  allIds: [],
  byIds: {},
  visiblityFilter: VISIBILITY_FILTERS.ALL,
  isSearchEnabled: false,
  searchText: ''
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    case SET_FILTER: {
      return {
        ...state,
        visiblityFilter: action.payload.filter
      };
    }
    case SET_INPUT_MODE:
      return {
        ...state,
        isSearchEnabled: action.payload
      }
    case SEARCH_TODOS:
      return {
        ...state,
        searchText: action.payload.searchText
      }
    default:
      return state;
  }
}

export default todosReducer;
