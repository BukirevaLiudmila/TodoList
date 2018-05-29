import React from 'react';

const Todo = ({text, completed, onClick}) => (
    <li
        onClick={onClick}
        className={completed ? "icon-marked" : "icon-blank"}
    >
        {text}
    </li>
)


export default Todo;