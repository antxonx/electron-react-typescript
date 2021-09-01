import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter, Route} from "react-router-dom";

import Home from './Home';

function render() {
  ReactDOM.render(
  (
    <HashRouter>
      <div>
        <Route path="/" exact component={ Home } />
      </div>
    </HashRouter>
  ), document.getElementById("app"));
}

render();