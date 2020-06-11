import React from 'react';
import {Table} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FontAwesome from 'react-fontawesome';
import './../styles/View.css'
import '../styles/JobsView.css';

class Movement extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.increasestate();
    }
    render() {
        return (
                <>
                <div className="View">       
                    <div className="group">
                <Button className="btn1 bg-danger" onClick={this.props.decreasestate}>
                    <FontAwesome
                        name='fa fa-arrow-left'
                        size='lg'
                    />
                </Button>
                <Button className="btn2 bg-danger" onClick={this.props.increasestate}>
                    <FontAwesome
                        name='fa fa-arrow-right'
                        size='lg'
                    />
                </Button>
            </div>
                 </div>
                </>
        );
    }
}
export default Movement;


