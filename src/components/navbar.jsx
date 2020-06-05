import React from 'react';
import Login from './loginmodal';
import Register from './registermodal';
import Navbar from 'react-bootstrap/Navbar'
class NavBar extends React.Component{
	render() {
		return (

			<>
			<Navbar className="navbar navbar-expand-lg navbar-light bg-light justify-lg-content-center">
  			<Navbar.Brand  className="head" href="#home">Companies Hiring during covid 19</Navbar.Brand>
  			<Navbar.Toggle />
  			<Navbar.Collapse className="justify-content-end">
	    		<Navbar.Text>
      				<Login/>
      				<Register/>
    			</Navbar.Text>
  			</Navbar.Collapse>
			</Navbar>
			</>
		);
	}
}
export default NavBar;


