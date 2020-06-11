import React from 'react';
import {Table} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FontAwesome from 'react-fontawesome';
import './../styles/View.css'
import '../styles/JobsView.css';

class JobsViewSearch extends React.Component{
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
    increasecount(){
        this.setState({start:this.state.start+12});
        this.setState({end:this.state.end+12})   ;
        this.props.fetchjobs(this.state.start+12, this.state.end+12,'');
    }
    decreasecount(){
        if(this.state.start-12 < 0 || this.state.start===0)   {alert("Item 0 reached"); return ;}
        this.setState({start:this.state.start-12});
        this.setState({end:this.state.end-12});
        this.props.fetchjobs(this.state.start-12,this.state.end-12,'');
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
                 </div>
        );
    }
}
export default JobsViewSearch;


