import { combineReducers } from 'redux'

export function post(state={},action)
{
  switch (action.type) {
    case 'LOAD_POST':
        return  action.payload;
    default:
    return state;
  }

  return state;
}
