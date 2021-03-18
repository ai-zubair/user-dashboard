import React, { Component, JSXElementConstructor } from 'react';
import { Spinner } from '../commons/Spinner';


interface ComponentModule{
  default: JSXElementConstructor<ComponentProps>;
  [key: string]: JSXElementConstructor<ComponentProps>;
}

export interface ComponentProps{
  [key: string]: any;
}

interface AsyncRouteProps{
  componentLoader(): Promise<ComponentModule>;
  componentProps: ComponentProps;
  [key: string]: any;
}

interface AsyncRouteState{
  isRouteLoaded: boolean;
}

class AsyncRoute extends Component<AsyncRouteProps, AsyncRouteState> {

  routeComponent: JSXElementConstructor<ComponentProps> | null = null;
  
  constructor(props: AsyncRouteProps) {
    super(props)
  }

  state = {
    isRouteLoaded: false,
  }

  componentDidMount = async() => {
    const componentModule = await this.props.componentLoader();
    this.routeComponent = componentModule.default;
    this.setState({
      isRouteLoaded: true
    })
  }

  render() {
    if (this.state.isRouteLoaded && this.routeComponent) {
      return (
        <this.routeComponent {...this.props.componentProps}/>
      );
    } else {
      return (
        <Spinner />
      )
    }
  }
}

export { AsyncRoute };