import React from "react";
import {Provider} from "react-redux";
import {CSSTransitionGroup} from "react-transition-group";

import {store} from "./redux/store";
import ClientComponent from "./client/clientComponent";
import ModelsComponent from "./models/modelsComponent";
import Header from "./header";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import App from "./main";

export default class Layout extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter >
                    <Route render={({location}) => (
                        <div>
                            <Header />
                            <CSSTransitionGroup
                                transitionName="page-transition"
                                transitionEnterTimeout={1000}
                                transitionLeaveTimeout={0}>
                                <Switch location={location} key={location.key}>
                                    <Route render={({location}) => (
                                        <div style={{width: '100%'}}>
                                            <Route exact path='/' component={App}/>
                                            <Route path='/app/models' component={ModelsComponent}/>
                                            <Route path='/app/clients' component={ClientComponent}/>
                                        </div>
                                    )}/>
                                </Switch>
                            </CSSTransitionGroup>
                        </div>
                    )}/>
                </BrowserRouter>
            </Provider>
        );
    }
};