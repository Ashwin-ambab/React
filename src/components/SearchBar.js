import React from "react";

class SearchBar extends React.Component{
    render(){
        return(
            <div className="ui search">
                <div className="ui icon input">
                    <input className="prompt" type="text" />
                    <i className="search icon"></i>
                </div>
                <div className="results"></div>
            </div>
        );
    };
}

export default SearchBar;