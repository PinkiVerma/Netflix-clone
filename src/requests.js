const API_KEY = "f243158148c678824fcd92b7ff36d472" ;

const requests = {
    fetchTrending: `trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;

//https://api.themoviedb.org/3/discover/tv?api_key=f243158148c678824fcd92b7ff36d472&with_networks=213
//https://api.themoviedb.org/3/trending/all/day?api_key=f243158148c678824fcd92b7ff36d472&language=en-US


