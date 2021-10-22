import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import FirstScreen from 'screens/FirstScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FirstScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
