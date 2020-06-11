import React from 'react';
import NavBar from './components/navbar';
<<<<<<< HEAD
import SearchBar from './components/searchbar';
import JobsViewAll from './components/jobsviewall';
=======
import View from './components/view';
>>>>>>> resuable
import JobsViewSearch from './components/jobsviewsearch';

class App extends React.Component{
	constructor(props) {
        super(props);
        this.handleSearchResult=this.handleSearchResult.bind(this);   
        this.fetchAllJobs=this.fetchAllJobs.bind(this); 
        this.increasestate=this.increasestate.bind(this);
        this.decreasestate=this.decreasestate.bind(this);
        this.state={
            start:0,
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
    handleSearchResult(_state,choice)
    {
        this.setState({start:0});
        this.setState({end:0});
    	this.setState({searchresult:{...this.state.searchresult,[_state]:choice}});
        this.fetchAllJobs("forward");
    }
    decreasestate()
    {
        this.fetchAllJobs("backward");   
    }
    increasestate()
    {
        this.fetchAllJobs("forward");
    }
    fetchAllJobs(endpoint)
    { 
        fetch("http://localhost:5000/api/searchresults/"+endpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          start:this.state.start,
          role:this.state.searchresult.role,
          location:this.state.searchresult.location,
          sector:this.state.searchresult.sector,
          type:this.state.searchresult.type
        }),
    })
        .then((response) => response.json())
        .then((responseData) => {
             this.setState({values:responseData});
             this.setState({start:responseData[3]['sno']});
             this.setState({end:responseData[0]['sno']});
        })   
    }
	render() {
		return (
			<div>
	       		      <NavBar/>
				<div>
				    <SearchBar handleSearchResult={this.handleSearchResult}/>
				</div>
                    <JobsViewAll values={this.state.values} increasestate={this.increasestate} decreasestate={this.decreasestate}/>
=======
        this.state={
        }
    }
	render() {
		return (
			<div>
	       		    <NavBar/>
                    <View/>
>>>>>>> resuable
			</div>
		);
	}
}
export default App;


