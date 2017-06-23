import React from "react";
import * as actions from "./redux/actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Link} from 'react-router-dom';

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

    draw (){
        let c = [];
        for(let i = 0; i< 100; i++){
            c.push(<div key={i}> {i} </div>);
        }
        return c;
    }

    render() {
        return (
            <div style={{border: '1px solid black', margin: '20px 20px'}}>
                <span> client {this.state.name}</span>
                {this.draw()}
                <br/>
                <input type="text" onChange={this.changeName}/>
                <Link to={"/app/clients/"+this.state.name}>Client</Link>
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
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientComponent);
