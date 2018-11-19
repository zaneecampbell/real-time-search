import React from 'react';

const Header = (props) => (
    <h1>{props.title}</h1>
);

Header.defaultProps = {
    title: 'Real Time Search'
};

export default Header;