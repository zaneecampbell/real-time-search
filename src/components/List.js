import React from 'react';

const List = (props) => (
    <div>
        {
            props.list.map((item) => (
                <li key={item}>{item}</li>
            ))
        }
    </div>
);

export default List;