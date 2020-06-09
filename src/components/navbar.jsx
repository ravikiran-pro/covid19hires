import React from 'react';
import Login from './loginmodal';
import Register from './registermodal';
import {Navbar} from 'react-bootstrap'
import './../styles/ModalForm.css';
class NavBar extends React.Component{
	render() {
		return (

			<div className="header">
			<Navbar className="navbar navbar-light bg-light">
  			<Navbar.Toggle />
  			<Navbar.Collapse className="justify-content-start">
	    		<Navbar.Text>
	    			<h1>Companies Hiring during covid 19</h1>
      			</Navbar.Text>
  			</Navbar.Collapse>
      		<Navbar.Collapse className="justify-content-end">
	    		<Navbar.Text>
	    			<Login/>
      				<Register/>
      			</Navbar.Text>
  			</Navbar.Collapse>
			</Navbar>
			</div>
		);
	}
}
export default NavBar;


