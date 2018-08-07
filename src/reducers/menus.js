

import { combineReducers } from 'redux'

export function menu(state={},action)
{
  switch (action.type) {
    case 'LOAD_MENU':
        return  action.payload;
    default:
    return state;
  }

  return state;
}
