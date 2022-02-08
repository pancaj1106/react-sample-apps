import React from 'react';

class SearchText extends React.Component {
    state = { term: '' };

    onCriteriaChanged = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onTextChanged(this.state.term);
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>
                            Video Search Text
                        </label>
                        <input type='text' value={this.state.term} onChange={this.onCriteriaChanged} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchText;