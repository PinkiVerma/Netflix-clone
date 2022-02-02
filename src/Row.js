import React, {useState , useEffect} from 'react';
import axios from './axios';
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

// ../ = outer folder
// ./ same folder but can get different files
// / can get child files of same folder

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, settrailerUrl] = useState("")

    //A snippet of code which runs based on specific condition/variable
    //if [] , run once when row loads, and don't run again
    //if [variable] , run once when row loads and also every single time when movie changes
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);  

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
      };

    const handleClick=(movie)=>{
        if(trailerUrl){
            settrailerUrl(''); //if video is already playing, this closes it.
        }
        else{
            movieTrailer(movie?.name || "")
            .then(url=>{
                //https://www.youtube.com/watch?v=Z2-UE_37IX4
                const urlParams= new URLSearchParams(new URL(url).search);//(new URL(url).search); allows to get everything after ? in URL. new URLSearchParams allows us to use GET function.
                settrailerUrl(urlParams.get('v'));// urlParams.get("v") allows us to get "Z2-UE_37IX4" in the URL
            }).catch((error)=>console.log(error))
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            
            <div className="row_posters">
                {/* several row  -> posters*/}
                {movies.map((movie) =>(
                    <img 
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${
                        isLargeRow ? movie.poster_path:movie.backdrop_path}`
                    }
                        alt={movie.name}/>
                ))}
                </div>
                <div>
                    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
            </div>
        </div>
    )
}

export default Row;
//https://api.themoviedb.org/3/discover/tv?api_key=f243158148c678824fcd92b7ff36d472&with_networks=213
