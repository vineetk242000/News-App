import React from"react"
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from "@material-ui/core";



function Search(props){

    return(
        <div>
        <center>
        <form onSubmit={props.getfeed}>
        <TextField  name="search" type="text"  placeholder="Enter any Keyword" autoComplete="off"  spellCheck="false" InputProps={{endAdornment: (
        <InputAdornment position="start">
        <SearchIcon />
        </InputAdornment>
        )
        }}></TextField>
        </form>
        </center>
        </div>
    )
}

export  default Search;