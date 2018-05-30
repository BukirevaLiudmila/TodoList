import React from 'react';

const Header = ({removeTodo}) => (
    <div className="header">
        <h1>TODO list</h1>
        <div className="trash" onClick={() => removeTodo()}/>
    </div>
)

export default Header;