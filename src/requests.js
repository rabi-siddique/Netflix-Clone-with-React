const API_KEY = "9521a744e0f9635d63df415e25f4f307"

const requests = {
   fetchNetflixOrignials: `discover/tv?api_key=${API_KEY}&with_networks=213`
    ,fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`
    ,fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`
    ,fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`
    ,fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`
  ,fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`

}

export default requests