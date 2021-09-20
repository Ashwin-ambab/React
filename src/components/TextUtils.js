import React from 'react';
import PropTypes  from 'prop-types';

class TextUtils extends React.Component{
    state = { term: " " };

    onInputClick =(e) => {
        e.preventDefault();
        console.log(this.state.term);

    }


    render(){
        return (
            <>
                <h1>{this.props.title}</h1>
                <form>
                    <textarea value={this.state.term} 
                     onChange={(e) => this.setState({term: e.target.value})} 
                    />
                </form>
                <button className="btn" onClick={this.onInputClick}>Submit</button>
            </>
            
        );
        
    }
}

TextUtils.propTypes = {
    title: PropTypes.string
}

TextUtils.defaultProps = {
    title: "Header of text area"
}

export default TextUtils;