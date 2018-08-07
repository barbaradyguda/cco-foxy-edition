import { combineReducers } from 'redux'


export function category(state=[],action)
{
  switch (action.type) {
    case 'LOAD_CATEGORY':
        return  action.payload;
    default:
    return state;
  }

  return state;
}
