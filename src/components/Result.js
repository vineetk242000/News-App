import React from "react";

function Result(props){
  return(
  <div className="content">
  <h1 className="headlines">Search Results</h1>
  {props.showResults.map(items =>(
    <div>
    <img src={items.urlToImage} />
    <h2><a href={items.url}>{items.title}</a></h2>
    <p>{items.description}</p>
    <p className="otherInfo"> Published:{items.publishedAt}<span>Author: {items.author}</span></p>
   </div>
   ))}
  </div>

)
}


export default Result;