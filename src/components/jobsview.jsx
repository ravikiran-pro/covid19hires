import React from 'react';
import {Table} from 'react-bootstrap';
import '../styles/JobsView.css';

class JobsView extends React.Component{
    render() {
        return (
                <>       
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
                </>
        );
    }
}
export default JobsView;


