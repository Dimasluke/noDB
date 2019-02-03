import React, { Component } from 'react';

class Moviecard extends Component {
  constructor (props) {
    super(props);
      this.state = {
      }
    }

  render () {
    const { videoId } = this.props.movieInfo.id
    const { title} = this.props.movieInfo.snippet
    const { url } = this.props.movieInfo.snippet.thumbnails.high
    return (
          <div className="movieCard">
            <h1 className="movieResultTitle">{title}</h1>
            <img className="movieResultImage" alt="" style={{ height : "75px", width: "75px" }} src={url} />
            <button className="movieResultShow" onClick={event => this.props.updateShowVideo(videoId)} >Show Video</button>
          </div>
    )
  }
}

export default Moviecard