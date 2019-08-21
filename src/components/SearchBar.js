import React from 'react';

class SearchBar extends React.Component{
    state = { term: '' };

    onFormSubmit = (e) => {
        e.preventDefault();
        
        this.props.onSubmit(this.state.term);
    }
        
    
    render(){
        return(
            <div  className="ui segment" style={{background: "#000000",  
                background: "-webkit-linear-gradient(to right, #434343, #000000)",  
                background: "linear-gradient(to right, #434343, #000000)" 
                }}>
                <form  onSubmit={this.onFormSubmit} className="ui field">
                <div className="field">
                <label style={{ color: 'white'}}>Image Search</label>
                    <input type="text" value={this.state.term} onChange={e =>
                    this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;