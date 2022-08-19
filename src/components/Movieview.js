import Hero from "./hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieView = () => {
  const { id } = useParams();
  const [isloading, setIsLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState({})

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5bbc34d253fc39ed0d04c74f241d91f8&language=en-US`)
      .then(response => response.json())
      .then(data => {

        setMovieDetails(data)
        setIsLoading(false)


      })
  }, [id])

  function renderMovieDetails() {
    if (isloading) {
      return <Hero text="Loading.........." />
    }
    if (movieDetails) {
      //todo
      const posterPath=`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
      const backDropUrl=`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
      return (
      <>
        <Hero text={movieDetails.original_title} backdrop={backDropUrl} />
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src={posterPath} alt="..." className="img-fluid shadow rounded"/>
            </div>
            <div className="col-md-9">
              <h2>{movieDetails.original_title}</h2>
              <p className="lead"><b>Overview:</b><br/>{movieDetails.overview}</p>
              <p className="lead"><b>Status:</b> {movieDetails.status}</p>
              <p className="lead"><b>Released Date:</b> {movieDetails.release_date}</p>
            </div>
          </div>
        </div>
      </>
      )
    }
  }

return renderMovieDetails()
};

export default MovieView;