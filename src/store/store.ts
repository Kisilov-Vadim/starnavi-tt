import { ACTIONS } from './actions';
import { createStore } from 'redux';

type TAction = {
  type: string
  value?: any
}

const initialState = {
  gameSettings: null,
  gameArea: null, 
  gameActiveArea: null,
  gameStart: false
};

export const reducer = (state=initialState, action:TAction) => {
  switch(action.type) {
    case ACTIONS.SET_DEFAULT_SETTINGS: 
      return {
        ...state,
        gameSettings: action.value
      }
    case ACTIONS.SET_GAME_AREA:
      return {
        ...state,
        gameArea: action.value,
        gameActiveArea: action.value
      }
    case ACTIONS.SET_GAME_ACTIVE_AREA: 
      return {
        ...state,
        gameActiveArea: action.value
      }
    case ACTIONS.SET_GAME_START: 
      return {
        ...state,
        gameStart: action.value
      }
    default:
      return state;
  }
}

const store = createStore(reducer)

export default store;