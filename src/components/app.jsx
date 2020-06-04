import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
 
class App extends React.Component{
	constructor(props, context) {
		super(props, context);

		this.handlelogin = this.handlelogin.bind(this);
		this.handleregister = this.handleregister.bind(this);

		this.state = {
			login: false,
			register:false,
			captchaCode:'kmlask'
		};
	}
	componentDidMount(){
		this.Generatecaptcha();	
	}
	handlelogin() {
		if(this.state.login===true)
			this.setState({login:false});
		else
			this.setState({login:true});
	}
	handleregister() {
		if(this.state.register===true)
			this.setState({register:false});
		else
			this.setState({register:true});
	}
	Generatecaptcha() {  
            var chr1 = Math.ceil(Math.random() * 10) + '';  
            var chr2 = Math.ceil(Math.random() * 10) + '';  
            var chr3 = Math.ceil(Math.random() * 10) + '';  
  
            var str = new Array(4).join().replace(/(.|$)/g, function () { return ((Math.random() * 36) | 0).toString(36)[Math.random() < .5 ? "toString" : "toUpperCase"](); });  
    		this.setState({captchaCode:str + chr1 + ' ' + chr2 + ' ' + chr3})
        }  
	render() {
		return (
			<div className="container">
			<Button style={{backgroundColor:'orange',float:"left"}} variant="success" onClick={this.handlelogin}>
				Login
        	</Button>
			<Modal show={this.state.login} centered={true} size="sm" onHide={this.handlelogin}>
			<Modal.Body>
			<Form.Group>
				<Form.Label >Name</Form.Label>
  				<Form.Control type="text" size="sm" placeholder="name"/>
  				<Form.Label>Email</Form.Label>
			    <Form.Control type="text" size="sm" placeholder="email"/>
			    <Form.Label>Password</Form.Label>
  				<Form.Control type="text" size="sm" placeholder="password"/>
			    <Form.Label>Re-enter Password</Form.Label>
  				<Form.Control type="text" size="sm" placeholder="re-enter-passsword"/><br/>
  				<Form.Label style={{backgroundColor:'red',fontStyle:'italic',padding:"10px"}}>
  				{this.state.captchaCode}
  				</Form.Label>
  				<h1>ddd</h1>
  				<Button onClick={()=>{this.Generatecaptcha()}}></Button>
  				<Form.Control type="text" size="sm" placeholder="entercaptcha"/><br/>
  				<Button>Register</Button>
			</Form.Group>
			</Modal.Body>
			</Modal>

			<Button style={{backgroundColor:'orange',float:"left"}} variant="success" onClick={this.handleregister}>
				Register
        	</Button>
			<Modal show={this.state.register} centered={true} size="sm" onHide={this.handleregister}>
			<Modal.Body>
				
			</Modal.Body>
			</Modal>
			</div>

		);
	}
}
export default App;


