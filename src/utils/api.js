import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

// Make sure VITE_APP_TMDB_TOKEN is defined in your .env file
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjFhZDdjNDdmMzMzZjc4OTVhYzBiODk0YmI5YzA4OCIsInN1YiI6IjY1YzdiOTM1ZTI5NWI0MDE3YmY4NTI1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RM8Dgdnj43GZXv8D3s9T9tZIs5uwRp4azMS-f8rvHZU";
// import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "Bearer " + TMDB_TOKEN, // Include "Bearer" before the token
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};
