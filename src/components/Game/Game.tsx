import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGameActiveArea } from '../../store/actions';

//components
import Square from '../Square/Square';

export default function Game(): ReactElement {
  const [activeSquare, setActiveSquare] = useState<null | number>(null);
  const player = useSelector((state:any) => state.player);
  const gameArea = useSelector((state:any) => state.gameArea);
  const gameActiveArea = useSelector((state: any) => state.gameActiveArea);
  const gameStart = useSelector((state:any) => state.gameStart);
  const dispatch = useDispatch();

  let timer:any = useRef(); 

  useEffect(() => {
    if (!player.game_settings) return;
    clearInterval(timer.current);
    if (gameStart) {
      timer.current = setInterval(() => {
        let active = Math.floor(Math.random() * gameActiveArea.length);
        while(activeSquare === gameActiveArea[active]) {
          setActiveSquare(null);
          active = Math.floor(Math.random() * gameActiveArea.length);
        }
        setActiveSquare(gameActiveArea[active]);
      }, player.game_settings.delay)
    } else {
      clearInterval(timer.current);
      dispatch(setGameActiveArea(gameArea));
      setActiveSquare(null);
    }
  }, [gameStart, gameActiveArea])

  return (
    <div className="game-field_game">
      {
        gameArea && gameArea.map((id:number, index:number) => (
          <Square 
            active={index === activeSquare ? true : false} 
            id={id}
            key={id}
          />
        ))
      }
    </div>
  )
}
