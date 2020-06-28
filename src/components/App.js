import React from 'react';
import Header from './Header'
import Search from './Serach'
import Content from './Content'
import { useState } from "react";
import Result from "./Result"
import { Route,Switch} from 'react-router-dom';

function App(){
  let data=undefined;
  let data1=undefined;
  let [showHeadlines,setShowHeadlines]=useState([]);
  let [redirect,setRedirect]=useState(false);
  let [showResults,setShowResults]=useState([])
  let [buttonText,setButtonText]=useState(false);
  

 
  async function handleResponse(response){
    if(response.ok){
    return (await response.json());
    }
    else{
    throw console.error();
    }
  }



 async function GetFeed(e){
  e.preventDefault();
   const search=(e.target.elements.search.value);
   const response= await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=f713c285346a4e2fb0aef2aad8691751`)
   data=await handleResponse(response);
   await setShowResults(data.articles);
   await setRedirect(true);
   
 }
 async function redirectToHome(){
   await setRedirect(false);
 }
  async function getHeadlines(e){
    e.preventDefault();
  const response= await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=f713c285346a4e2fb0aef2aad8691751")
   data1=await handleResponse(response);
   console.log(data1);
   setShowHeadlines(data1.articles);
   setButtonText(true);

  }

   




  return(
    
    <div>
    <Header redirectToHome={redirectToHome}/>
    <Search getfeed={GetFeed} />
    <Switch>
    <Route path="/" exact render={
      (props) => <Content {...props} getHeadlines={getHeadlines} 
      showHeadlines={showHeadlines} 
      buttonText={buttonText} 
      redirect={redirect} />
    }  />
    <Route path="/search" exact render={
      (props) => <Result {...props} showResults={showResults} GetFeed={GetFeed} />
    }  />
    </Switch>
    </div>
   








  );
}
























export default App;