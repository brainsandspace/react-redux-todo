const todo = (state = {}, action) => {
  switch (action.type) {

    case 'ADD_TODO': 
      return {
        id: action.id,
        text: action.text,
        completed: false
      };

    case 'TOGGLE_TODO':
      console.log('state', state, action)
      console.log((state.id !== action.id))
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };

    default:
      return state;
  }
}
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': 
      console.log('in todos', state, action)
      return [
        ...state, 
        todo(undefined, action)
      ];

    case 'TOGGLE_TODO':
      return state.map(t => 
          todo(t, action)
        );

    default:
      return state;
  }
}

export default todos;