import React, { Component } from 'react';

class FavoritesCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
        editText: ''
    }
  }

  updateEditText (value) {
    this.setState({
        editText: value
    })
  }

  render () {
    const { videoId } = this.props.movieInfo.id
    const { title } = this.props.movieInfo.title
    const { editText } = this.state
    return (
      <div className="favoritesCard">
        <h1 className="favoritesCardTitle">{title}</h1>
        <button className="favoritesButton" onClick={event => this.props.updateShowVideo(videoId)}>Show Video</button>
        <button className="favoritesButton" onClick={event => this.props.deleteVideo(videoId)}>Delete</button>
        <div>
          <input 
            className="favoritesInput" 
            type="text" onChange={event => 
            this.updateEditText(event.target.value)}
          />  
          <button className="favoritesButton"
            onClick={event => this.props.editVideoTitle(videoId, editText)}>Edit
          </button>
        </div>
      </div>
    )
  }
}

export default FavoritesCard