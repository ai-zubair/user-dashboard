import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appDataStore } from './data-store/store';
import { AsyncRoute, ComponentProps } from './components/hoc/AsyncRoute';
import { ModuleLoaders } from './config/routeModuleLoaders';
class App extends Component {
  render() {
    return (
      <Provider store={appDataStore}>
        <Switch>
          <Route
            path="/"
            exact
            component={(props: ComponentProps) => <AsyncRoute componentLoader={ModuleLoaders.adminAuthLoader} componentProps={props} />}
          />
          <Route 
            path="/dashboard"
            component={(props: ComponentProps) => <AsyncRoute componentLoader={ModuleLoaders.dashboardLoader} componentProps={props} />}
          />
          <Route 
            path="/create-user"
            component={(props: ComponentProps) => <AsyncRoute componentLoader={ModuleLoaders.createUserLoader} componentProps={props} />}
          />
          <Route 
            path="/edit-user/:id"
            component={(props: ComponentProps) => <AsyncRoute componentLoader={ModuleLoaders.createUserLoader} componentProps={{...props, isEditRoute: true}} />}
          />
        </Switch>
      </Provider>
    )
  }
}

export { App };