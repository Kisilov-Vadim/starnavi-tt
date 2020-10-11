import React, { ReactElement, useEffect, useState } from 'react';
import './Square.scss';
import $ from 'jquery';

//redux
import { useDispatch, useSelector } from 'react-redux';

//actions
import { setGameActiveArea, setScore, setGameStart, setMessage, setWinners } from '../../store/actions';
import { createDate, postData } from '../../Utilits/Utilits';


interface Props {
  active: boolean
  id: number
}

export default function Square({ active, id }: Props): ReactElement {
  const player = useSelector((state: any) => state.player);
  const gameStart = useSelector((state: any) => state.gameStart);
  const gameActiveArea = useSelector((state: any) => state.gameActiveArea);
  const score = useSelector((state: any) => state.score);
  const dispatch = useDispatch();

  const [height, setHeight] = useState<any>(`0px`);
  const [specialClass, setSpecialClass] = useState<string>('');
  const [winnerScore, setWinnerScore] = useState(Math.floor(Math.pow(player.game_settings.field, 2) / 2));

  const changeSquareHeight = () => {
    setHeight(`${$($('.game-field_square')[0]).width()}px`);
  }

  useEffect(() => {
    changeSquareHeight();
    setWinnerScore(Math.floor(Math.pow(player.game_settings.field, 2) / 2))
  }, [player])

  useEffect(() => {
    setSpecialClass('');
  }, [gameStart])

  useEffect(() => {
    window.addEventListener('resize', changeSquareHeight); 

    return () => {
      window.removeEventListener('resize', changeSquareHeight); 
    }
  }, [])

  let square_in_line = player.game_settings.field;

  const setStoreMessage = (text:string, color:string):void => {
    dispatch(setMessage({
      message: text,
      color: color
    }))
    setTimeout(() => {
      dispatch(setMessage({
        message: '',
        color: ''
      }))
    }, 3000)
  }

  const handleClick = () => {
    if (!gameStart) return;

    let newGameActiveArea = [...gameActiveArea].filter(item => item !== id);
    dispatch(setGameActiveArea(newGameActiveArea))

    if (active) {
      score.player += 1; 
      setSpecialClass('player');
    } else {
      score.computer += 1; 
      setSpecialClass('computer');
    }

    dispatch(setScore(score));
    
    if (score.player === winnerScore) {
      dispatch(setGameStart(false));
      dispatch(setScore({ player: 0, computer: 0 }))
      setStoreMessage(`Congratulation! ${player.name} win this game!`, 'green');
      let data = {
        name: player.name,
        date: createDate(new Date())
      }
      postData('/api/winners', [data])
        .then(res => dispatch(setWinners(res)))
        .catch(err => console.error(err))
    } else if (score.computer === winnerScore) {
      dispatch(setGameStart(false));
      dispatch(setScore({ player: 0, computer: 0 }))
      setStoreMessage(`Sorry, but ${player.name} lose`, 'red');
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
