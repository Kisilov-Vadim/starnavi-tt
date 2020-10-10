import React, { ReactElement, useEffect, useRef, useState } from 'react'
import './GameField.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Button, DropdownProps, Input, Select } from 'semantic-ui-react'
import { createGameArea } from '../../Utilits/Utilits';

//components
import Game from '../Game/Game';

//types
import { TDefaultSettings } from '../../Utilits/Types'; 

//actions
import { setDefaultSettings, setGameArea, setGameStart } from '../../store/actions';


export default function GameField(): ReactElement {
  const [start, setStart] = useState<boolean>(false);

  const gameSettings = useSelector((state: any) => state.gameSettings);
  const dispatch = useDispatch();

  const handleChange = (_:any, { value, options }:DropdownProps) => {
    let newGameSettings = [...gameSettings].map((setting: TDefaultSettings) => {
      if (setting.value === value) {
        setting.selected = true; 
      } else {
        setting.selected = false; 
      }
      return setting; 
    })
    let currentOption:any = options ? options.find((item: any ) => item.value === value) : 5;

    dispatch(setDefaultSettings(newGameSettings));
    dispatch(setGameArea(createGameArea(currentOption.square_per_line)))
  }

  const handleStartGame = () => {
    setStart((prev) => {
      dispatch(setGameStart(!prev));
      return !prev
    });
  }

  if (!gameSettings) {

    return (
      <h1>Loading...</h1>
    )
  } else {

    return (
      <div className="game-field">
        <div className="game-field_controls">
          <Select placeholder='Pick game mode' options={gameSettings} onChange={handleChange} />
          <Input placeholder='Enter your name' className="game-field_input" />
          <Button content={`${start ? 'Stop' : 'Play'}`} onClick={handleStartGame} />
        </div>
        <div className="game-field_congrats">
          <span>Message here</span>
        </div>
        <Game start={start} />
      </div>
    )
  }
}
