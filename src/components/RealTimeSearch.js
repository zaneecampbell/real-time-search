import React from 'react';
import Header from './Header';
import List from './List';
import Search from './Search';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Paper style={{padding: 20, margin: 20}}>
                        <Header />
                    </Paper>
                    <Paper style={{padding: 20}}>
                        <Search handleContains={this.handleContains} />
                        <List list={this.state.searchedItems} />
                    </Paper>
                </Grid>
            </div>
                );
            };
};