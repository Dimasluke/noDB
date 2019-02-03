import React, { Component } from 'react';
import Youtube from 'react-youtube';
import axios from 'axios';
import Searchbar from './components/Searchbar'
import Moviecard from './components/Moviecard';
import './App.css';
import Favorites from './components/Favorites';
import { FaTwitter } from 'react-icons/fa';
import { IconContext } from 'react-icons';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showVideo: '',
      results: [],
      favorites: [],
      editText: ' ',
      quote: ''
    }
    this.updateShowVideo = this.updateShowVideo.bind(this)
    this.addFavorite = this.addFavorite.bind(this)
    this.deleteVideo = this.deleteVideo.bind(this)
    this.editVideoTitle = this.editVideoTitle.bind(this)
  }

  getResults = (value) => axios
    .get(`https://www.googleapis.com/youtube/v3/search/?key=${value}`)
    .then((response) =>{
      this.setState({
        results: response.data.items
    })
  })

  updateShowVideo (value) {
    this.setState({
      showVideo: value,
      results: this.state.results
    })
  }

  addFavorite (movieInfo) {
    axios
      .post('api/favorites', {movieInfo})
      .then((response) => {
        this.setState({
          favorites: response.data
        })
      })
    }

  deleteVideo (value) {
    axios
      .delete(`api/favorites/${value}`)
      .then((response) => {
        this.setState({
          favorites: response.data
        })
      })
    }


  editVideoTitle (id, text) {
    axios
      .put(`api/favorites/${id}`, {text})
      .then((response) => {
        this.setState({
          favorites: response.data
        })
      })
    }

  getNewQuote () {
    axios
      .get("/api/codewisdom")
      .then((response) => {
        this.setState({
          quote: response.data
        })
      })
  }

  componentDidMount (){
    axios
      .get('/api/favorites')
      .then((response) => {
        this.setState({
          favorites: response.data
        })
      })
    axios
      .get("/api/codewisdom")
      .then((response) => {
        console.log(response.data)
        this.setState({
          quote: response.data
        })
      })
  }

  render() {
    let mappedResults = this.state.results.map((element, index) => {
      return (
        <div key={element.etag} className="movieCard" >
          <Moviecard 
            movieInfo={this.state.results[index]} 
            updateShowVideo={this.updateShowVideo}  
          />
          <button className="movieResultAdd" onClick={event => this.addFavorite(element)}>Add Favorite</button>  
        </div>
      )
    })
    return (
      <div>
        <Searchbar  getResults={this.getResults} /> 
        <section>
          <div className="sectionDiv">
            <p className="twitterQuote"><span className="quoteStyles">{this.state.quote}</span>
              <span>
                <button onClick={event => {this.getNewQuote()}} className="quoteButton">
                  <IconContext.Provider value={{ className: "react-icons1" }} >< FaTwitter /></IconContext.Provider>   
                </button>
              </span>
            </p>
            <span className="youtube-iframe">
              <Youtube videoId={this.state.showVideo} height = "390" width = "640"  />
            </span>
            <div className="movieContainer"> 
              {mappedResults}
            </div> 
              <Favorites 
                favorites={this.state.favorites} 
                updateShowVideo={this.updateShowVideo} 
                deleteVideo={this.deleteVideo} 
                editVideoTitle={this.editVideoTitle} 
              />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
