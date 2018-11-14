import React from 'react';
import Header from './Header';
import List from './List';
import Search from './Search';

export default class RealTimeSearch extends React.Component {
    state = {
        fullItems: ['Hello', 'World', 'This', 'is', 'my', 'test', 'React', 'app'],
        searchedItems: ['Hello', 'World', 'This', 'is', 'my', 'test', 'React', 'app']
    };

    handleContains = (text) => {
        const newArr = [];
        this.state.fullItems.map((item) => {
            if (item.toLowerCase().includes(text)) {
                newArr.push(item);
            };
        });
        this.setState(() => ({
            searchedItems: newArr
        }));
    };

    render() {
        return (
            <div>
                <Header />
                <Search handleContains={this.handleContains} />
                <List list={this.state.searchedItems} />
            </div>
        );
    };
};