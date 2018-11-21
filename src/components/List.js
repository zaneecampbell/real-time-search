import React from 'react';
import Typography from '@material-ui/core/Typography';

const List = (props) => (
    <div>
        <Typography variant="h2">
        {
            props.list.map((item) => (
                <li key={item}>{item}</li>
            ))
        }
        </Typography>
    </div>
);

export default List;