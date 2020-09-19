import {createStore} from 'redux';
import rootReducer from './reducers/index';

export default function setupStore() {
  return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}