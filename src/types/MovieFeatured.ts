export type MovieFeatured = {
    original_name: string;
    desc: string;
    image: string;
    id: number;
    backdrop_path: string;
    vote_average: number;
    number_of_seasons: number;
    overview: string;
    first_air_date: Date;
    genres: [
        {id: number, name: string}
    ];
}