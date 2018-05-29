import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="header">
                <h1>TODO list</h1>
                <div className="trash"/>
            </div>
        );
    }

}

export default Header;