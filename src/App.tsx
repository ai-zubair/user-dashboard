import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AsyncRoute, ComponentProps } from './hoc/AsyncRoute';
import { ModuleLoaders } from './config/routeModuleLoaders';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            component={(props: ComponentProps) => <AsyncRoute componentLoader={ModuleLoaders.landingLoader} componentProps={props} />}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export { App };