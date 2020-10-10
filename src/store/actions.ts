import { TDefaultSettings } from '../Utilits/Types'; 

export const ACTIONS = {
  SET_DEFAULT_SETTINGS: 'SET_DEFAULT_SETTINGS', 
  SET_GAME_AREA: 'SET_GAME_AREA',
  SET_GAME_ACTIVE_AREA: 'SET_GAME_ACTIVE_AREA',
  SET_GAME_START: 'SET_GAME_START'
}

export const setDefaultSettings = (value: TDefaultSettings[]) => ({ type: ACTIONS.SET_DEFAULT_SETTINGS, value});
export const setGameArea = (value: number[]) => ({ type: ACTIONS.SET_GAME_AREA, value});
export const setGameActiveArea = (value: number[]) => ({ type: ACTIONS.SET_GAME_ACTIVE_AREA, value});
export const setGameStart = (value: boolean) => ({ type: ACTIONS.SET_GAME_START, value});