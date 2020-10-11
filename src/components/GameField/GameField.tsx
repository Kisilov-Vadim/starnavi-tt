import React, { ReactElement, useState } from 'react'
import './GameField.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Button, DropdownProps, Input, Loader, Select } from 'semantic-ui-react'
import { createGameArea } from '../../Utilits/Utilits';

//components
import Game from '../Game/Game';

//actions
import { setGameArea, setGameStart, setMessage, setPlayer } from '../../store/actions';
import Message from '../Message/Message';


export default function GameField(): ReactElement {
  const [name, setName] = useState<string>('');

  const gameSettings = useSelector((state: any) => state.gameSettings);
  const gameStart = useSelector((state: any) => state.gameStart);
  const player = useSelector((state:any) => state.player)
  const dispatch = useDispatch();

  const handleChange = (_:any, { value, options }:DropdownProps) => {
    let currentOption:any = options ? options.find((item: any ) => item.value === value) : 5;

    player.game_settings = currentOption; 

    dispatch(setPlayer(player));
    dispatch(setGameArea(createGameArea(currentOption.field)))
  }

  const handleStartGame = () => {
    if (name === '' || !player.game_settings) {
      dispatch(setMessage({
        message: 'Fill in all the details above',
        color: 'red'
      }))
      setTimeout(() => {
        dispatch(setMessage({
          message: '',
          color: ''
        }))
      }, 3000)
      return;
    }
    player.name = name;
    dispatch(setPlayer(player));
    dispatch(setGameStart(!gameStart));
  }

  const handleNameChange = (e:any) => {
    setName(e.target.value)
  }

  if (!gameSettings) {
    return (
      <div className="game-field">
        <Loader active inline='centered' />
      </div>
    )
  } else {

    return (
      <div className="game-field">
        <div className="game-field_controls">
          <Select placeholder='Pick game mode' options={gameSettings} onChange={handleChange} disabled={gameStart} />
          <Input 
            placeholder='Enter your name' 
            className="game-field_input" 
            disabled={gameStart} 
            value={name}
            onChange={handleNameChange}
          />
          <Button content={`${gameStart ? 'Stop' : 'Play'}`} onClick={handleStartGame} />
        </div>
        <Message />
        <Game />
      </div>
    )
  }
}
