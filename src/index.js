import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/App/App'
import Login from './components/Login/Login'

import './sass/main.scss'

import reducers from './store/reducers.js'

const composedEnhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const store = createStore(reducers, composedEnhancer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/' component={Login} />
        <Route exact path='/home'>
          <App />
        </Route>
      </BrowserRouter>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
