import React from 'react';
import {Table,Button} from 'react-bootstrap';
import '../styles/JobsView.css';
class Tables extends React.Component{
	constructor(props) {
        super(props);
        this.state={
        	values:[],
            start:this.props.start,
            end:this.props.end,
            comp:null,
        }
        this.reply=this.reply.bind(this);
        this.increasecount=this.increasecount.bind(this);
    }
    componentDidMount()
    {
        fetch("http://localhost:5000/api/all", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          start:this.state.start,
          end:this.state.end,
        }),
    })
        .then((response) => response.json())
        .then((responseData) => {
             this.setState({responseData:responseData});
             for (var i = 0; i < responseData["user"].length; i++) {
                var value=[];
                value.push(responseData["user"][i]["company"]);
                value.push(responseData["user"][i]["role"]);
                value.push(responseData["user"][i]["location"]);
                value.push(responseData["user"][i]["link"]);
                this.state.values.push(value);
             }
             console.log(this.state.values);
        })
    }
    increasecount(evt,k){
        console.log(k);
        if(k===2){

        this.setState({start:this.state.end});
        this.setState({end:this.state.end+10});}    
        console.log(this.state.start,this.state.end);
        this.componentDidMount();
    }
    reply()
    {
        var comp=[],keys=0;
        for(var i=0;i<this.state.values.length;i++)
        {
            comp.push(
                    <tr>
                    <td key={keys+1}>{this.state.values[i][0]}</td>
                    <td key={keys+2}>{this.state.values[i][1]}</td>
                    <td key={keys+3}>{this.state.values[i][2]}</td>
                    <td><a href={this.state.values[i][3]}>Apply</a></td>
                    </tr>
                )
            keys+=4;
        }
        return comp;
    }
            
	render() {
		return (
                <>       
                <Table responsive="md" hover size="sm" variant="dark" bordered>
                    <thead className="head" size="lg">
                        <tr>
                        <th>Company</th>
                        <th>Role</th>
                        <th>Location</th>
                        <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {<this.reply/>}
                    </tbody>
                </Table>
                <Button>start</Button>
                <Button onClick={(evt)=>this.increasecount(evt,2)}>end</Button>
                </>
		);
	}
}
export default Tables;


