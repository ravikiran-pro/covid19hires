import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FontAwesome from 'react-fontawesome'
import './../styles/Modal.css'
class App extends React.Component{
	constructor(props, context) {
		super(props, context);

		this.handlelogin = this.handlelogin.bind(this);
		this.handleregister = this.handleregister.bind(this);
		this.handleUser = this.handleUser.bind(this);
		this.handleRegstration = this.handleRegstration.bind(this)
		this.state = {
			login: false,
			register:false,
			captchaCode:'kmlask',
			log:{
				"email":'',
				"password":''
			},
			reg:{
				"user":'',
				"email":'',
				"password":'',
				"repassword":'',
				"captcha":''
			}
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
    
  handleUser(evt,field) {
  	this.setState({ log: { ...this.state.log, [field]: evt.target.value} });
  }
  handleRegstration(evt,field){
  	this.setState({ reg: { ...this.state.reg, [field]: evt.target.value} });	
  }
	render() {
		return (
			<div className="container">
			<h1 className="head">ddd</h1>
			<div className="useraccount">
				<Button style={{backgroundColor:'orange',float:"left"}} variant="success" onClick={this.handlelogin}>
					Login
        		</Button>
        		<Button style={{backgroundColor:'orange',float:"left"}} variant="success" onClick={this.handleregister}>
					Register
        		</Button>
        	</div>
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

			<Modal className="Modal" show={this.state.register}  centered={true} size="sm" onHide={this.handleregister}>
			<Modal.Body className="ModalBody">
			<Form.Group className="Form">
				<Form.Label variant="danger">Name</Form.Label>
  				<Form.Control type="text" size="sm" placeholder="name"
  				value={this.state.reg.user} 
  				onChange={(evt)=>this.handleRegstration(evt,"user")}
  				/>
  				<Form.Label>Email</Form.Label>
			    <Form.Control type="text" size="sm" placeholder="email"
			    value={this.state.reg.email} 
  				onChange={(evt)=>this.handleRegstration(evt,"email")}
			    />
			    <Form.Label>Password</Form.Label>
  				<Form.Control type="password" size="sm" placeholder="password"
  				value={this.state.reg.password} 
  				onChange={(evt)=>this.handleRegstration(evt,"password")}
  				/>
			    <Form.Label>Re-enter Password</Form.Label>
  				<Form.Control type="password" size="sm" placeholder="re-enter-passsword"
  				value={this.state.reg.repassword} 
  				onChange={(evt)=>this.handleRegstration(evt,"repassword")}
  				/><br/>
  				<Form.Label className="captchaStripes">
  				{this.state.captchaCode}
  				</Form.Label>
  				<FontAwesome
        			name='fa fa-refresh'
        			size='lg'
        			onClick={()=>{this.Generatecaptcha()}}
        			style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' ,cursor:'pointer',marginLeft :"15px"}}
      			/>
  				<Form.Control type="text" size="sm" placeholder="entercaptcha"
  				value={this.state.reg.captcha} 
  				onChange={(evt)=>this.handleRegstration(evt,"captcha")}
  				/><br/>
  				<Button className="centerbutton" size="md">Register</Button>
			</Form.Group>
			</Modal.Body>
			</Modal>
			</div>
		);
	}
}
export default App;


