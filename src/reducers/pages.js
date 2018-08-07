import { combineReducers } from 'redux'


export function page(state={},action)
{
  switch (action.type) {
    case 'LOAD_PAGE':
        return  action.payload;
    default:
    return state;
  }

  return state;
}
