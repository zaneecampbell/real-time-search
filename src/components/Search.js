import React from 'react';

class Search extends React.Component {
        state = {
                value: ''
        };

        handleContains = (e) => {
                const text = e.target.value.toLowerCase();
                this.setState({value: e.target.value})
                this.props.handleContains(text);
        };

        render() {
                return(
                        <div>
                                <form  onInput={this.handleContains}>
                                        <input type='text' value={this.state.value} name='search' autoComplete='off'>
                                        </input>
                                </form>
                        </div>
                )
        }
};

export default Search;