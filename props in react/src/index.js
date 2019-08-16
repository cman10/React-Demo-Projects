//import react and react dom libraries 
import React from 'react';
import ReactDOM from 'react-dom';
function getbuttontext(){
    return 'click me bitch';
}

//create a react component
const App= () => {
    return <div>
    <label className="label"for="name">Enter name:</label>
    <input   id="name" type="text"/>
  <button style={{backgroundColor:'blue', color:'white'}}>{getbuttontext()}</button>
  </div>
};


//take the react component and show it on the screen
ReactDOM.render(
<App />,
document.querySelector('#root')
);