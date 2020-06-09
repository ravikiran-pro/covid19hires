import React from 'react';
import Button from 'react-bootstrap/Button';
import FontAwesome from 'react-fontawesome';
import './../styles/View.css'

class View extends React.Component{
	constructor(props) {
        super(props);
        this.handleSearchResult=this.handleSearchResult.bind(this);    
        this.state={
            start:0,
            end:12,
        }
        this.increasecount=this.increasecount.bind(this);
        this.decreasecount=this.decreasecount.bind(this);
    }
    componentDidMount(){
        this.props.fetchjobs(this.state.start, this.state.end);
    }
    updatefetch(){}
    increasecount(){
        this.setState({start:this.state.start+12});
        this.setState({end:this.state.end+12})   ;
        this.props.fetchjobs(this.state.start+12, this.state.end+12);
    }
    decreasecount(){
        if(this.state.start-12 < 0 || this.state.start===0)   {alert("Item 0 reached"); return ;}
        this.setState({start:this.state.start-12});
        this.setState({end:this.state.end-12});
        this.props.fetchjobs(this.state.start-12,this.state.end-12);
    }
    handleSearchResult(_state)
    {
    	this.setState({data:_state});
    }
	render() {
		return (
			<div className="group">
                <Button className="btn1 bg-danger" onClick={this.decreasecount}>
                    <FontAwesome
                        name='fa fa-arrow-left'
                        size='lg'
                    />
                </Button>
                <Button className="btn2 bg-danger" onClick={this.increasecount}>
                    <FontAwesome
                        name='fa fa-arrow-right'
                        size='lg'
                    />
                </Button>
			</div>
		);
	}
}
export default View;


