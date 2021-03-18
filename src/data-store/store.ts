import { createStore, compose } from 'redux';
import { rootReducer } from './rootReducer';

const reduxDevTools = typeof window !== 'undefined' && 
                      (window as any).__REDUX_DEVTOOLS_EXTENSION__ && 
                      (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const appDataStore = createStore(rootReducer, compose(reduxDevTools));

export { appDataStore };