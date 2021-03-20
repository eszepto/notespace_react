import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import Route, {Link} from 'react-router-dom'
class Navbar extends React.Component {
    render(){
        return(
            <div>
                <img src={process.env.PUBLIC_URL + "/logo/NoteSpace_Logo-Name.png"}/>
                <SearchBox/>

                
                <Link to="/about">About</Link>
                <Link to="/help">Help</Link> 
            </div>
        )
    }
}

class SearchBox extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        
        return (
        <div>
            <form>
                <input id="searchbox" placeholder="Search" name="q"/>
                <button>
                    <img src={process.env.PUBLIC_URL + "/search.png"}/>
                </button>
            </form>
            
        </div>
        )
    }
}

export default Navbar
