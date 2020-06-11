import React from 'react';
import NavBar from './components/navbar';
import View from './components/view';
import JobsViewSearch from './components/jobsviewsearch';

class App extends React.Component{
        constructor(props) {
        super(props);
        this.state={
        }
    }
        render() {
                return (
                        <div>
                            <NavBar/>
                    <View/>
                        </div>
                );
        }
}
export default App;



