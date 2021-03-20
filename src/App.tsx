import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appDataStore } from './data-store/store';
import { AsyncRoute, ComponentProps } from './components/hoc/AsyncRoute';
import { ModuleLoaders } from './config/routeModuleLoaders';
import { APP_ROUTES } from './config/routes';
import FourOFour from './FourOFour';
class App extends Component {
  render() {
    return (
      <Provider store={appDataStore}>
        <Switch>
          <Route
            path={APP_ROUTES.AUTH}
            exact
            component={(props: ComponentProps) => <AsyncRoute componentLoader={ModuleLoaders.adminAuthLoader} componentProps={props} />}
          />
          <Route 
            path={APP_ROUTES.DASHBOARD}
            component={(props: ComponentProps) => <AsyncRoute componentLoader={ModuleLoaders.dashboardLoader} componentProps={props} />}
          />
          <Route 
            path={APP_ROUTES.CREATE_USER}
            component={(props: ComponentProps) => <AsyncRoute componentLoader={ModuleLoaders.createUserLoader} componentProps={props} />}
          />
          <Route 
            path={APP_ROUTES.EDIT_USER}
            component={(props: ComponentProps) => <AsyncRoute componentLoader={ModuleLoaders.createUserLoader} componentProps={{...props, isEditRoute: true}} />}
          />
          <Route 
            component={FourOFour}
          />
        </Switch>
      </Provider>
    )
  }
}

export { App };