import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Skills from '../pages/Skills';

// import { Container } from './styles';

export default function routes() {
  return (
    <div>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/Skills' component={Skills}/>
        </Switch>
    </div>
  );
}

