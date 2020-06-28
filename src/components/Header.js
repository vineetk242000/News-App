import React from "react";
import {Link} from 'react-router-dom';

function Header(props){
    return(
<div className="header">
<h1>News App</h1>
<ul>
<li><Link to="/" onClick={props.redirectToHome}>Home</Link></li>
<li><a>Github</a></li>
<li><Link to="/search">Search</Link></li>
</ul>
</div>




    )
}



export default Header;