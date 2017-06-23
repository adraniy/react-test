import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <header>
                    react-handsontable-test:
                    {' '}
                    <Link to="/">Home</Link>
                    {' '}
                    <Link to="/app/clients">Clients</Link>
                    {' '}
                    <Link to="/app/models">Models</Link>
                    {' '}
                    <Link to="/app/clients/andrew">Client</Link>
                </header>
            </div>
        );
    }
};
