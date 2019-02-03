import React, { Component } from 'react';
import { FaCube } from 'react-icons/fa';
import { IconContext } from 'react-icons';

class Searchbar extends Component {
  constructor (props) {
      super(props);
      this.state = {
          searchValue: ''
      }
    }

  updateSearch (value) {
      this.setState({
          searchValue: value
      })
  }

  render(){
    return (
      <header>
        <a className="header-icon" href="https://github.com/Dimasluke">
          <IconContext.Provider value={{ className: "react-icons" }} >< FaCube /></IconContext.Provider>
        </a>
        <input 
          className="searchInput" 
          type="text" 
          placeholder="Enter text here..."
          onChange={event => this.updateSearch(event.target.value)} 
        />
        <button 
          className="searchButton" 
          onClick={event => this.props.getResults(this.state.searchValue)}>
          Search
        </button>
        <span className="name">Luke Dimas</span>

      </header>
    )
  }
}

export default Searchbar;