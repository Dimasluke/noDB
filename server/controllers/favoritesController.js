let favoritesList = []

let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).json(favoritesList)
    },
    post: (req, res) => {
        const { videoId } = req.body.movieInfo.id
        const { title } = req.body.movieInfo.snippet
        const { url } = req.body.movieInfo.snippet.thumbnails.medium
        id++;
        favoritesList.push({
            id: {videoId},
            title: {title},
            image: { url }
        })
        res.status(200).json(favoritesList)
    },
    delete: (req, res) => {
        let updateId = req.params.id
        let updateIndex = favoritesList.findIndex(favorite => favorite.id.videoId == updateId)
        favoritesList.splice(updateIndex, 1)
        res.status(200).json(favoritesList)
    },
    update: (req, res) =>{
        let updateText = req.body.text
        let updateId = req.params.id
        let updateIndex = favoritesList.findIndex(favorite => favorite.id.videoId == updateId)
        let favorite = favoritesList[updateIndex]

        favoritesList[updateIndex] = {
            id: favorite.id,
            title: { title: updateText || favorite.title.title},
            image: favorite.image
        }
        res.status(200).json(favoritesList)
    }
}