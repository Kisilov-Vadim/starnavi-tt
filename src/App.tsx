import React, { useEffect } from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css';
import { useDispatch } from 'react-redux'

import { Container } from 'semantic-ui-react'

//components
import GameField from './components/GameField/GameField';
import GameLeaderBoard from './components/GameLeaderBoard/GameLeaderBoard';
import { setDefaultSettings } from './store/actions';
import { getData } from './Utilits/Utilits';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {

    getData('http://localhost:3001/api/game-settings')
      .then(res => {
        dispatch(setDefaultSettings(res.map((item:any) => {
          item.selected = false;
          return item
        })));
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
