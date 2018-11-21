import React from 'react';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const style = {
        padding: 20
}

class Search extends React.Component {
        state = {
                value: ''
        };

        handleContains = (e) => {
                const text = e.target.value.toLowerCase();
                this.setState({ value: e.target.value })
                this.props.handleContains(text);
        };

        render() {
                return (
                        <div>
                                <form onInput={this.handleContains}>
                                        <Typography variant='h2'>
                                                <TextField
                                                        style={style}
                                                        variant='outlined'
                                                        type='text'
                                                        value={this.state.value}
                                                        name='search'
                                                        autoComplete='off'>
                                                </TextField>
                                        </Typography>
                                </form>
                        </div>
                                        )
                                }
                        };
                        
export default Search;