import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { BootstrapLayout } from 'screens/BootstrapLayout';
import { BootstrapScreen } from 'screens/BootstrapScreen';
import FirstScreen from 'screens/FirstScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FirstScreen} />
        <Route path="/bootstrap" component={BootstrapScreen} />
        <Route path="/bootstrap-layout" component={BootstrapLayout} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
