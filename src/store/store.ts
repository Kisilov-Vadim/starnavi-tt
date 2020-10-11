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
  gameStart: false,
  player: {
    name: '', 
    game_settings: null
  },
  alert_message: {
    message: '',
    color: ''
  },
  score: {
    computer: 0, 
    player: 0
  },
  winners: null
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
    case ACTIONS.SET_PLAYER: 
      return {
        ...state, 
        player: { ...action.value }
      }
    case ACTIONS.SET_MESSAGE: 
      return {
        ...state, 
        alert_message: { ...action.value }
      }
    case ACTIONS.SET_SCORE: 
      return {
        ...state, 
        score: { ...action.value }
      }
    case ACTIONS.SET_WINNERS: 
      return {
        ...state, 
        winners: action.value
      }
    default:
      return state;
  }
}

const store = createStore(reducer)

export default store;