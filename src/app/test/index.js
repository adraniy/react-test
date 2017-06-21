import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {createBrowserHistory} from 'history';
import { syncHistoryWithStore} from 'react-router-redux'
import {store} from "./redux/store";
import ClientComponent from "./client/clientComponent";
import ModelsComponent from "./models/modelsComponent";
import { BrowserRouter ,Switch,
    Route,
    Link} from 'react-router-dom';

import App from "./main";

const s = store;
const browserHistory = createBrowserHistory();
const sy = syncHistoryWithStore;
const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <header>
                    react-handsontable-test:
                    {' '}
                    <Link to="/">Home</Link>
                    {' '}
                    <Link to="/clients">Clients</Link>
                    {' '}
                    <Link to="/models">Models</Link>
                </header>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route path='/clients' component={ClientComponent}/>
                    <Route path='/models' component={ModelsComponent}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);