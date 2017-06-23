import React from "react";
import * as actions from "./redux/actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

export default class Client extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.match.params.name || 'default name'
        };
    }


    render() {
        return (
            <div style={{border: '1px solid green', margin: '20px 20px'}}>
                <span> client name is {this.state.name}</span>
                </div>
        );
    }
}
