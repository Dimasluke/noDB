import React, { Component } from 'react';
import FavoritesCard from './FavoritesCard'

class Favorites extends Component {
  render () {
  const { updateShowVideo, deleteVideo, editVideoTitle } = this.props
  let mappedFavorites = this.props.favorites.map((element, index) => {
    return (
      <div key={index}>
        <FavoritesCard 
          movieInfo={element} 
          updateShowVideo={updateShowVideo} 
          deleteVideo={deleteVideo}
          editVideoTitle={editVideoTitle}
        />
      </div>
    )
  })
    return (
      <div className="upperFavoritescontainer">
        <h1 className="favoritesTitle">Favorites</h1>
        <hr></hr>
        <div className="favoritesContainer">
          {mappedFavorites}
        </div>
      </div>
    )
  }
}

export default Favorites