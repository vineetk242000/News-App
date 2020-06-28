import React from "react";
import {Redirect} from 'react-router-dom'





function Content(props){
    let redirectTo=null;
    if(props.redirect==true){
        redirectTo=<Redirect to="/search" />
    }
    return(
        <div className="content">
         {redirectTo}
        <h1 className="headlines">Top Headlines in India</h1>
        <button onClick={props.getHeadlines}>{props.buttonText?"Refresh":"Get rhe latest Headlines"}</button>
        <div className="news">
        {props.showHeadlines.map(items =>(
            <div>
            <img src={items.urlToImage} />
            <h2><a href={items.url}>{items.title}</a></h2>
            <p>{items.description}</p>
            <p className="otherInfo"> Published:{items.publishedAt}<span>Author: {items.author}</span></p>
           </div>
        ))}
        </div> 
        </div>

        
    )
    
}

export default Content;