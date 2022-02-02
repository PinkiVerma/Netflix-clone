import axios from "axios";

/**base url to make requests to the movie database */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;
//https://api.themoviedb.org/3/discover/tv?api_key=f243158148c678824fcd92b7ff36d472&with_networks=213