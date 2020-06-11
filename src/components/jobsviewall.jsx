import React from 'react';
import {Table} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FontAwesome from 'react-fontawesome';
import './../styles/View.css'
import '../styles/JobsView.css';

class JobsViewAll extends React.Component{
    constructor(props) {
        super(props);
        this.handleSearchResult=this.handleSearchResult.bind(this);    
        this.state={
            start:0,
        }
    }
    componentDidMount(){
        this.props.increasestate();
    }
    handleSearchResult(_state)
    {
        this.setState({data:_state});
    }
    render() {
        return (
                <div className="View">       
                <Table responsive="md" hover size="sm" variant="dark" bordered id="table">
                    <thead className="head" size="lg">
                        <tr>
                        <th>Company</th>
                        <th>Role</th>
                        <th>Location</th>
                        <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.values.map(function(name, index){
                        return (<tr key={index}>
                        <td>{name.company}</td>
                        <td>{name.role}</td>
                        <td>{name.location}</td>
                        <td><a href={name.link}>Apply</a></td>
                        </tr>);
                    })}
                    </tbody>
                </Table>
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
        );
    }
}
export default JobsViewAll;


