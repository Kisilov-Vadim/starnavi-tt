import React, { useEffect } from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css';
import { useDispatch } from 'react-redux'

import { Container } from 'semantic-ui-react'

//components
import GameField from './components/GameField/GameField';
import GameLeaderBoard from './components/GameLeaderBoard/GameLeaderBoard';
import { setDefaultSettings, setWinners } from './store/actions';
import { getData, postData } from './Utilits/Utilits';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {

    getData('/api/game-settings')
      .then(res => {
        dispatch(setDefaultSettings(res.map((item:any, index:number) => {
          item.key = index;
          return item
        })))
      })
      .catch(err => console.error(err))

    postData('/api/winners')
      .then(res => {
        dispatch(setWinners(res));
      })
      .catch(err => console.error(err))
      
  }, [])

  return (
   <Container>
    <div className="main">
      <GameField />
      <GameLeaderBoard />
    </div>
   </Container>
  )
}

export default App;
