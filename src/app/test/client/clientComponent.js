import React from 'react';
import * as actions from './redux/actions'
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'

export class ClientComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name || 'default name'
        };
        this.changeName = (e) => {
          props.actions.changeClientName(e.target.value);
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.name !== this.state.name) {
            this.setState({name: newProps.name});
        }
    }

    render() {
        return (
            <div>
                <span> client {this.state.name}</span>
                <br/>
                <input type="text" onChange={this.changeName} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.client.name
    }
};

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientComponent);
