import React from 'react';

const Header = (props) => (
    <h1>{props.title}</h1>
);

Header.defaultProps = {
    title: 'Header'
};

export default Header;