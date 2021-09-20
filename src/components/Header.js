import React from "react";
import { Link } from "react-router-dom";

const Header = ({items}) => {
    return (
        <div className="ui three item menu">
            <Link to="/" className="item">SEARCH</Link>
            <Link to="/textutils" className="item">TEXTUTILS</Link>
            <Link to="/accordion" className="item">ACCORDION</Link>
        </div>
    );
}

export default Header;