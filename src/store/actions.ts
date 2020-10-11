import { TDefaultSettings, TMessageState, TPlayerState, TStoreState, TWinners } from '../Utilits/Types'; 

export const ACTIONS = {
  SET_DEFAULT_SETTINGS: 'SET_DEFAULT_SETTINGS', 
  SET_WINNERS: 'SET_WINNERS', 
  SET_GAME_AREA: 'SET_GAME_AREA',
  SET_GAME_ACTIVE_AREA: 'SET_GAME_ACTIVE_AREA',
  SET_GAME_START: 'SET_GAME_START',
  SET_PLAYER: 'SET_PLAYER',
  SET_MESSAGE: 'SET_MESSAGE',
  SET_SCORE: 'SET_SCORE',
}

export const setDefaultSettings = (value: TDefaultSettings[]) => ({ type: ACTIONS.SET_DEFAULT_SETTINGS, value});
export const setWinners = (value: TWinners[]) => ({ type: ACTIONS.SET_WINNERS, value});
export const setGameArea = (value: number[]) => ({ type: ACTIONS.SET_GAME_AREA, value});
export const setGameActiveArea = (value: number[]) => ({ type: ACTIONS.SET_GAME_ACTIVE_AREA, value});
export const setGameStart = (value: boolean) => ({ type: ACTIONS.SET_GAME_START, value});
export const setPlayer = (value: TPlayerState) => ({ type: ACTIONS.SET_PLAYER, value});
export const setMessage = (value: TMessageState) => ({ type: ACTIONS.SET_MESSAGE, value});
export const setScore= (value: TStoreState) => ({ type: ACTIONS.SET_SCORE, value});