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
	showpassword(){
		var x=document.getElementById("input");
		var y=document.getElementById("eye");
		if(x.type==="password") 
			{x.type="text";
			 y.style.backgroundColor="grey";
			}
		else {x.type="password"; y.style.backgroundColor="";}
	}
  handleUser(evt,field) {
  	this.setState({ log: { ...this.state.log, [field]: evt.target.value} });
  }
	render() {
		return (
			<>
			<Button className="btn" variant="success" onClick={this.handlelogin}>
				Login
        	</Button>
			<Modal className="Modal" show={this.state.login}  centered={true} size="sm" onHide={this.handlelogin}>
			<Modal.Body className="ModalBody">
			<Form.Group className="Form">
    			<div className="textjoin">
      				<FontAwesome
        			name='fa fa-envelope'
        			size='2x'
      			/>
      			<div className="fontjoin">
    				<Form.Control type="text" size="sm" placeholder="email" 
			    	value={this.state.log.email} 
			    	className="fa fa-envelope"
			    	onChange={(evt)=>this.handleUser(evt,"email")}
			    	/>
			    </div>
  				</div><br/>
			  		<Form.Control type="password" id="input" size="sm" placeholder="password"
  					value={this.state.log.password} 
			    	onChange={(evt)=>this.handleUser(evt,"password")}
  				/>
  				<FontAwesome
        			name='fa fa-eye-slash'
        			id="eye"
        			size='lg'
        			onClick={this.showpassword}
      			/>
      			<i> show password</i>
      			<br/><br/>
			    <Button className="centerbutton" size="md">Login</Button>
			</Form.Group>
			</Modal.Body>
			</Modal>
			</>
		);
	}
}
export default Login;


