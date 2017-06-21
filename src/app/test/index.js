import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {CSSTransitionGroup} from 'react-transition-group'
import {store} from "./redux/store";
import ClientComponent from "./client/clientComponent";
import ModelsComponent from "./models/modelsComponent";
import {
    BrowserRouter, Switch,RouteHandler,
    Route,
    Link
} from 'react-router-dom';

import App from "./main";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <header>
                    react-handsontable-test:
                    {' '}
                    <Link to="/">Home</Link>
                    {' '}
                    <Link to="/app/clients">Clients</Link>
                    {' '}
                    <Link to="/app/models">Models</Link>
                </header>

                <Route exact path='/'>
                    <CSSTransitionGroup
                        transitionName="fade"
                        transitionEnterTimeout={1300}
                        transitionLeaveTimeout={1300}>
                        <Route  path='/app/clients' component={ClientComponent}/>
                        <Route  path='/app/models' component={ModelsComponent}/>
                    </CSSTransitionGroup>
                </Route>

            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);