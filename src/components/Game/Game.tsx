import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGameActiveArea } from '../../store/actions';

//components
import Square from '../Square/Square';

interface Props {
  start: boolean
}

export default function Game({ start }: Props): ReactElement {
  const [activeSquare, setActiveSquare] = useState<null | number>(null);
  const gameArea = useSelector((state:any) => state.gameArea);
  const gameActiveArea = useSelector((state: any) => state.gameActiveArea);
  const dispatch = useDispatch();

  let timer:any = useRef(); 

  useEffect(() => {
    clearInterval(timer.current);
    if (start) {
      timer.current = setInterval(() => {
        let active = Math.floor(Math.random() * (gameActiveArea.length - 0) + 0);
        while(activeSquare === gameActiveArea[active]) {
          setActiveSquare(null);
          active = Math.floor(Math.random() * (gameActiveArea.length - 0) + 0);
        }
        setActiveSquare(gameActiveArea[active]);
      }, 1000)
    } else {
      console.log('test')
      clearInterval(timer.current);
      dispatch(setGameActiveArea(gameArea));
      setActiveSquare(null);
    }
  }, [start, gameActiveArea])

  return (
    <div className="game-field_game">
      {
        gameArea && gameArea.map((id:number, index:number) => (
          <Square 
            active={index === activeSquare ? true : false} 
            id={id}
          />
        ))
      }
    </div>
  )
}
