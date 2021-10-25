import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { BootstrapLayout } from 'screens/BootstrapLayout';
import { BootstrapScreen } from 'screens/BootstrapScreen';
import FirstScreen from 'screens/FirstScreen';
import { RefsScreen } from 'screens/RefsScreen';
import { RefsScreen2 } from 'screens/RefsScreen2';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FirstScreen} />
        <Route path="/bootstrap" component={BootstrapScreen} />
        <Route path="/bootstrap-layout" component={BootstrapLayout} />
        <Route path="/refsScreen" component={RefsScreen} />
        <Route path="/refs2" component={RefsScreen2} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
