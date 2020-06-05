import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FontAwesome from 'react-fontawesome'
import './../styles/ModalForm.css'
class Login extends React.Component{
	constructor(props, context) {
		super(props, context);

		this.handlelogin = this.handlelogin.bind(this);
		this.handleUser = this.handleUser.bind(this);
		this.state = {
			login: false,
			log:{
				"email":'',
				"password":''
			},
		};
	}
	handlelogin() {
		if(this.state.login===true)
			this.setState({login:false});
		else
			this.setState({login:true});
	}
  handleUser(evt,field) {
  	this.setState({ log: { ...this.state.log, [field]: evt.target.value} });
  }
	render() {
		return (
			<>
			<Button style={{backgroundColor:'orange',float:"left"}} variant="success" onClick={this.handlelogin}>
				Login
        	</Button>
			<Modal className="Modal" show={this.state.login}  centered={true} size="sm" onHide={this.handlelogin}>
			<Modal.Body className="ModalBody">
			<Form.Group className="Form">
				<Form.Label>Email</Form.Label>
			    <Form.Control type="text" size="sm" placeholder="email" 
			    value={this.state.log.email} 
			    onChange={(evt)=>this.handleUser(evt,"email")}
			    />
			    <Form.Label>Password</Form.Label>
  				<Form.Control type="password" size="sm" placeholder="password"
  				value={this.state.log.password} 
			    onChange={(evt)=>this.handleUser(evt,"password")}
  				/><br/>
			    <Button className="centerbutton" size="md">Login</Button>
			</Form.Group>
			</Modal.Body>
			</Modal>
			</>
		);
	}
}
export default Login;


