import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from'./Spinner';


class App extends React.Component{
   
    state={ lat: null,errorMessage : ''};
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>
                //to update state object we called set state 
                //gets extended automatically when extend react component
                this.setState({lat : position.coords.latitude}),
            err=>
                this.setState({errorMessage: err.message})
            );

         }
    render(){
        if(this.state.errorMessage&& !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if(!this.state.errorMessage&& this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>;
        }
            return <Spinner message="Please accept location request"/>;
        
    }
}
ReactDOM.render(<App />,document.querySelector('#root')
);