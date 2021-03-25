import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import Route, {Link} from 'react-router-dom'
import './Navbar.css';
import { Navbar, Form, Button } from 'react-bootstrap';

class Navb extends React.Component {
    render(){
        return(
            <div>
                <Navbar bg="light" className="d-flex align-items-center p-2 px-md-4 mb-3 container-fluid shadow-sm">
                    <div className="my-0 mr-md-auto">
                        <Navbar.Brand href="">
                            <img src={process.env.PUBLIC_URL + "/logo/NoteSpace_Logo-Name.png"} width="170" className="img"/>
                        </Navbar.Brand>
                    </div>    
                    <SearchBox/>
                    <div className="col-2">
                        <ul class="navbar-nav ml-auto justify-content-end">
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/help">Help</a>
                            </li>
                        </ul>
                    </div>
                </Navbar>
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
        <div className="mx-auto col-6">
            <Form inline className="mx-auto">
                <input className="searchbox" type="text" class="form-control col mr-sm-2 border-0" placeholder="Search" name="q" aria-describedby="basic-addon2" required/>
                <Button variant="light" className="search-btn" type="submit">
                    <img src={process.env.PUBLIC_URL + "/search.png"} width="18px" className="img"/>
                </Button>
            </Form>    
        </div>
        )
    }
}

export default Navb
