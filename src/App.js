import React from 'react';
import {Provider} from 'react-redux'
import store from './store/store'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import MainContainer from './containers/MainContainer'
import Errorhandler from './components/Errorhandler'
import NotFound from './components/NotFound'

function App () {
  return ( 
    <Provider store={store}>
      <BrowserRouter>
      <div>
        <NavBar/>
          <Errorhandler>
            <Switch>
              <Route exact path="/" component={MainContainer}/>
              <Route path="/fashion" component={MainContainer}/>
              <Route path="/politics" component={MainContainer}/>
              <Route path="/business" component={MainContainer}/>
              <Route path="/movies" component={MainContainer}/>
              <Route path="/books" component={MainContainer}/>
              <Route path="/world" component={MainContainer}/>
              <Route path="/insider" component={MainContainer}/>
              <Route path="/technology" component={MainContainer}/>
              <Route path="/science" component={MainContainer}/>
              <Route path="*" component={NotFound}/>
            </Switch>
          </Errorhandler>
      </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
