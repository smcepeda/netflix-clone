const API_KEY = "340d2c1540ff55c263284870097e795f";

const requests = {
    fetchTrending: 'trending/all/week?api_key=340d2c1540ff55c263284870097e795f&language=en-US',
    fetchNetflixOriginals: 'discover/tv?api_key=340d2c1540ff55c263284870097e795f&with_networks=213',
    fetchTopRated: 'movie/top_rated?api_key=340d2c1540ff55c263284870097e795f&language=en-US',
    fetchActionMovies: 'discover/movie?api_key=340d2c1540ff55c263284870097e795f&with_genres=28',
    fetchComedyMovies: 'discover/movie?api_key=340d2c1540ff55c263284870097e795f&with_genres=35',
    fetchHorrorMovies: 'discover/movie?api_key=340d2c1540ff55c263284870097e795f&with_genres=27',
    fetchRomanceMovies: 'discover/movie?api_key=340d2c1540ff55c263284870097e795f&with_genres=10749',
    fetchDocumentaries: 'discover/movie?api_key=340d2c1540ff55c263284870097e795f&with_gennres=99'

}

export default requests;