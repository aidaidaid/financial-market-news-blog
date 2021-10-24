import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from './components/header';
import Articles from './screens/articles';
import Article from './screens/article';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Articles}/>
          <Route path="/articles" component={Articles}/>
          <Route path="/article/:id" component={Article}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
