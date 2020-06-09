import React from 'react';
import NavBar from './components/navbar';
import SearchBar from './components/searchbar';
import JobsView from './components/jobsview';
import View from './components/view';
class App extends React.Component{
	constructor(props) {
        super(props);
        this.handleSearchResult=this.handleSearchResult.bind(this);   
        this.fetchAllJobs=this.fetchAllJobs.bind(this); 
        this.state={
            values:[]
        }
    }
    handleSearchResult(_state)
    {
    	this.setState({data:_state});
        this.fetchAllJobs(3,4);
    }
    fetchAllJobs(s,e)
    {   
        fetch("http://localhost:5000/api/all", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          start:s,
          end:e,
        }),
    })
        .then((response) => response.json())
        .then((responseData) => {
             this.setState({values:responseData});
        })   
    }
    fetchAllJobs(s,e)
    {   
        fetch("http://localhost:5000/api/all", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          start:s,
          end:e,
        }),
    })
        .then((response) => response.json())
        .then((responseData) => {
             this.setState({values:responseData});
        })   
    }
	render() {
		return (
			<div>
				    <NavBar/>
				<div>
					<SearchBar handleSearchResult={this.handleSearchResult}/>
				</div><br/>
				<div>
					<JobsView values={this.state.values} range={10}/>
				</div>
                <div><br/>
                    <View fetchjobs={this.fetchAllJobs}/>
                </div>
			</div>
		);
	}
}
export default App;


