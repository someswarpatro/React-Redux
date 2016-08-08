/* eslint-disable no-console */
console.log('hi');

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchBar';

class App extends Component{
  render(){
    return(
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('app'));
