import { combineReducers } from 'redux';
import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js'

// each sub-reducer is managing its own part of global state
const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;