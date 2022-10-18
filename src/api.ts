import { MovieFeatured } from "./types/MovieFeatured";

const apiKey = "1eba2dcc3c79340337137c5d843d737a";
const base = 'https://api.themoviedb.org/3';

//Função auxiliar para dar um fetch na url e retornar o json de resultado
const basicFetch = async (endpoint: string) => {
    const req = await fetch(`${base}${endpoint}`);
    const json = await req.json();
    return json;
    

};

export const api = {
    getHomeList: async () => {

        return [
            {
                slug: "originals",
                title: "Originais do Netflix",
                items: await basicFetch(`/discover/tv/?with_network=213&language=pt-BR&api_key=${apiKey}`)
            },

            {
                slug: "trending",
                title: "Recomendado Para Você",
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${apiKey}`)
            },

            {
                slug: "toprated",
                title: "Em Alta",
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${apiKey}`)
            },

            {
                slug: "action",
                title: "Ação",
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${apiKey}`)
            },

            {
                slug: "comedy",
                title: "Comédia",
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${apiKey}`)
            },

            {
                slug: "horror",
                title: "Terror",
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${apiKey}`)
            },

            {
                slug: "romance",
                title: "Romance",
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${apiKey}`)
            },

            {
                slug: "documentary",
                title: "Documentários",
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${apiKey}`)
            }
        ];
    },

    //pegar informações extras de um filme específico
    getMovieInfo: async (id: number) => { 
        const endpoint = `/movie/${id}?language=pt-BR&api_key=${apiKey}`; 
        return basicFetch(endpoint); 
      }, 
    getTvShowInfo: async (id: number):Promise<MovieFeatured> => { 
        const endpoint = `/tv/${id}?language=pt-BR&api_key=${apiKey}`; 
        return basicFetch(endpoint); 
    },
};