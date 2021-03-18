import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk';

const reduxDevTools = typeof window !== 'undefined' && 
                      (window as any).__REDUX_DEVTOOLS_EXTENSION__ && 
                      (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const appDataStore = createStore(rootReducer, compose(applyMiddleware(thunk),reduxDevTools));

export { appDataStore };