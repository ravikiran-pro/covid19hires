import React from 'react';
import {Table} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FontAwesome from 'react-fontawesome';
import SearchBar from './searchbar';
import Movement from './movement';
import './../styles/View.css'
import '../styles/JobsView.css';

class View extends React.Component{
    constructor(props) {
        super(props);
        this.handleSearchResult=this.handleSearchResult.bind(this); 
        this.fetchAllJobs=this.fetchAllJobs.bind(this); 
        this.increasestate=this.increasestate.bind(this);
        this.decreasestate=this.decreasestate.bind(this);
        this.state={
            start:-1,
            end:4,
            all:true,
            values:[],
            searchresult:{
                role:'',
                location:'',
                type:'',
                sector:''},
        }
    }
    decreasestate()
    {
        var e=this.state.end;
            if(e==0)    {alert("item[0]:reached"); return;}
        this.fetchAllJobs(e,"backwards");
    }
    increasestate()
    {
        var e=this.state.start;
        this.fetchAllJobs(e,"forwards");
    }
    handleSearchResult(_state,choice)
    {
        this.setState({start:0});
        this.setState({end:0});
        var e=this.state.searchresult;
        e[_state]=choice;
        this.setState({searchresult:{...this.state.searchresult,[_state]:choice}});
        this.fetchAllJobs(0,"forwards");
    }
    fetchAllJobs(e,endpoint)
    { 
        fetch("http://localhost:5000/api/searchresults/"+endpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          start:e,
          role:this.state.searchresult.role,
          location:this.state.searchresult.location,
          sector:this.state.searchresult.sector,
          type:this.state.searchresult.type
        }),
    })
        .then((response) => response.json())
        .then((responseData) => {
             this.setState({values:responseData});
             if(responseData.length<3){
                    alert("item end: reached");
                    return ;}
             this.setState({start:responseData[3]["sno"]});
             this.setState({end:responseData[0]["sno"]});
             console.log(responseData[0]["sno"],responseData[3]["sno"]);
        })   
    }
    render() {
        return (
                <>
                <div>
                    <SearchBar handleSearchResult={this.handleSearchResult}/>
                </div>
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
                        {this.state.values.map(function(name, index){
                        return (<tr key={index}>
                        <td>{name.company}</td>
                        <td>{name.role}</td>
                        <td>{name.location}</td>
                        <td><a href={name.link}>Apply</a></td>
                        </tr>);
                    })}
                    </tbody>
                </Table>
                 </div>
                 <Movement increasestate={this.increasestate} decreasestate={this.decreasestate}/>
                </>
        );
    }
}
export default View;


