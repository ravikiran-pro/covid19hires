import React from 'react';
import Search from './search';
import {Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome'
import './../styles/SearchBar.css';

class SearchBar extends React.Component{
	constructor(props) {
        super(props);
        this.handlecomponent=this.handlecomponent.bind(this);
        this.sendresults=this.sendresults.bind(this);
    }
     handlecomponent(choice,_state){
      this.props.handleSearchResult(_state,choice);
      }
      sendresults()
      {
      	this.props.handleSearchResult(this.state);
      }
      popsearchmenu()
      {
      	var x=document.getElementById("group");
      	if(x.style.display === '')
      		x.style.display = 'inline-block';
      	else
      		x.style.display = '';
      }
	render() {
		return (
			<>
			  <div>
              <Button onClick={this.popsearchmenu}>
              Filter
              <FontAwesome
              name='fa fa-filter'
              size='lg'
              />
              </Button>
              </div>
              	<div id="group" className="container-fluid">
					<div className="search">
						<Search routecontent={"role"}
						handlecomponent={this.handlecomponent}/>
					</div>
					<div className="search">
						<Search routecontent={"location"}
						handlecomponent={this.handlecomponent}/>
					</div>
					<div className="search">
						<Search routecontent={"sector"}
						handlecomponent={this.handlecomponent}/>
					</div>
					<div className="search">
						<Search routecontent={"type"}
						handlecomponent={this.handlecomponent}/>
					</div>
					<div className="search">
						<input type="button" className="filter" onClick={this.sendresults} value="Search Jobs"/>
					</div>
				</div>
			</>
		);
	}
}
export default SearchBar;


