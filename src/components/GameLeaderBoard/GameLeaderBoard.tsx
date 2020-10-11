import React, { ReactElement } from 'react'
import './GameLeaderBoard.scss';
import { useSelector } from 'react-redux';
import { TWinners } from '../../Utilits/Types';
import { Loader } from 'semantic-ui-react';


export default function GameLeaderBoard(): ReactElement {
  const winners = useSelector((state:any) => state.winners);

  if (!winners) {
    return (
      <div className='game-board'>
        <Loader active inline='centered' />
      </div>
    )
  } else {
    return (
      <div className='game-board'>
        {
          winners.length !== 0 && <span className="game-board_title">Leader Board</span>
        }
        <div className="game-board_playersGroup">
          {
            winners.map(({name, date}:TWinners) => {
              return (
                <div className="game-board_player" key={date}>
                  <span className="name">{name}</span>
                  <span className="date">{date}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
