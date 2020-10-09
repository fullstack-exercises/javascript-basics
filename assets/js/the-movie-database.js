const favoriteMovie = {
    title: 'Pitch Perfect',
    duration: 90,
    stars: ['Fat Amy', 'Beca Mitchell', 'Jesse', 'Cloe Beale', 'Emily']
};

const whichMovie = function() {
    console.log(favoriteMovie.title + ' lasts for ' + favoriteMovie.duration + ' minutes. Stars: ' + favoriteMovie.stars);
}

whichMovie();