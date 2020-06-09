import React from 'react';
import {Dropdown,DropdownButton} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome'
import './../styles/DropDown.css'
class Search extends React.Component{
	constructor(props) {
        super(props);
        this.changetext=this.changetext.bind(this);
        this.handleselectchange=this.handleselectchange.bind(this);
        this.state = {
            lists:[],
            searchroles:'',
            Searchlists:[],
            selection:'select '+props.routecontent,
            type:props.routecontent,
        };
    }
  componentDidMount()
  {
    var url="http://localhost:5000/api/dropdown/"+this.state.type;
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email:this.state.email,
          password:this.state.password,
        })
    })
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({lists:this.map(responseData)});
            this.setState({Searchlists:this.map(responseData)});
        })
  }
  map(responseData)
  {
    const datas=[];
        for(var i=0;i<responseData["output"].length;i++)
        {
          if(responseData["output"][i][this.state.type] !=='') 
          datas.push(responseData["output"][i][this.state.type]);
        }
    return datas;
  }
  changetext(event)
  {
  	var name=event.target.name;
  	var value=event.target.value;
  	this.setState({[name]:value});
    const datas=[]
    for (var i=0;i<this.state.lists.length;i++)
  	{
  		var comp=this.state.lists[i].slice(0,value.length);
    	if(comp.toLowerCase()===value.toLowerCase())
    	{
        datas.push(this.state.lists[i]);
      }
  	}
    this.setState({Searchlists:datas});
  }
  handleselectchange(evt)
  {
    this.setState({selection:evt});
    this.props.handlecomponent(evt,this.state.type);
  }
	render() {
        return (
        	<>
              
              <DropdownButton
                variant="orange"
                alignRight
                title={this.state.selection}
                id="dropdown-menu-align-right dropdown btn"
                onSelect={this.handleselectchange}
                  >
              <div className="input-group">
              <div className="input-group-addon">
              <FontAwesome
              name='fa fa-search'
              size='lg'
              />
              </div>
                <input type="text" id="searcher" name="searchroles" value={this.state.searchtext} onChange={(evt)=>this.changetext(evt)}/>
              </div>
                  {this.state.Searchlists.map(function(name, index){
                    return <Dropdown.Item key={index} eventKey={name}>{name}</Dropdown.Item>;
                  })}
                </DropdownButton>
          </>
		);
	}
}
export default Search;


