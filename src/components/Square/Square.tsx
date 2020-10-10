import React, { ReactElement, useEffect, useState } from 'react';
import './Square.scss';
import $ from 'jquery';

//redux
import { useDispatch, useSelector } from 'react-redux';

//actions
import { setGameActiveArea } from '../../store/actions';

interface Props {
  active: boolean
  id: number
}

export default function Square({ active, id }: Props): ReactElement {
  const gameSettings = useSelector((state: any) => state.gameSettings);
  const gameStart = useSelector((state: any) => state.gameStart);
  const gameActiveArea = useSelector((state: any) => state.gameActiveArea);
  const dispatch = useDispatch();

  const [height, setHeight] = useState<any>(`0px`);
  const [specialClass, setSpecialClass] = useState<string>('');

  useEffect(() => {
    setHeight(`${$($('.game-field_square')[0]).width()}px`); 
  }, [gameSettings])

  useEffect(() => {
    setSpecialClass('');
  }, [gameStart])

  let square_in_line = gameSettings.find((item:any) => item.selected === true).square_per_line;

  const handleClick = () => {
    if (!gameStart) return;

    let newGameActiveArea = [...gameActiveArea].filter(item => item != id);
    dispatch(setGameActiveArea(newGameActiveArea))

    if (active) {
      setSpecialClass('player');
    } else {
      setSpecialClass('computer');
    }
  }

  return (
    <div 
      className={
        `game-field_square 
         ${gameStart ? specialClass ? 'game-field_square-' + specialClass : '' : null}
         ${active ? 'game-field_square-active' : ''}
         `
      }
      style={{ height, width: `calc(100% / ${square_in_line} - 10px)` }}
      onClick={handleClick}
    >
      
    </div>
  )
}
