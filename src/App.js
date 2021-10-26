import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { BootstrapLayout } from 'screens/BootstrapLayout';
import { BootstrapScreen } from 'screens/BootstrapScreen';
import { EffectScreen } from 'screens/EffectScreen';
import { EffectWindowScreen } from 'screens/EffectWindowScreen';
import FirstScreen from 'screens/FirstScreen';
import { RefsScreen } from 'screens/RefsScreen';
import { RefsScreen2 } from 'screens/RefsScreen2';
import { UseCallback } from 'screens/UseCallback';
import { UseMemo } from 'screens/UseMemo';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FirstScreen} />
        <Route path="/bootstrap" component={BootstrapScreen} />
        <Route path="/bootstrap-layout" component={BootstrapLayout} />
        <Route path="/refsScreen" component={RefsScreen} />
        <Route path="/refs2" component={RefsScreen2} />
        <Route path="/effect" component={EffectScreen} />
        <Route path="/effectWindow" component={EffectWindowScreen} />
        <Route path="/callback" component={UseCallback} />
        <Route path="/memo" component={UseMemo} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
