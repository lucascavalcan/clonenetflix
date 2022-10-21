import React from "react";
import './styles.css';

import { MovieFeatured } from "../../types/MovieFeatured";

type Props = {
    item: MovieFeatured
}

export const FeaturedMovie = (item: Props) => {
    
    let firstDate = new Date(item.item.first_air_date);
    let genres = [];
    for(let i in item.item.genres) {
        genres.push(item.item.genres[i].name);
    }
    
    let description = item.item.overview;
    if (description.length > 200) {
        description = description.substring(0, 200)+"...";
    }

    return (
        <section className="featured" style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">
                        {item.item.original_name}
                    </div>
                    <div className="featured--info">
                        <div className="featured--points">{item.item.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.item.number_of_seasons} temporada{item.item.number_of_seasons !==1 ? "s" : ""}</div>
                        <div className="featured--description">{description}</div>
                        <div className="featured--buttons">
                            <a href={`/watch/${item.item.id}`} className="featured--watchButton">▶ Assistir</a>
                            <a href={`/list/${item.item.id}`} className="featured--mylistButton">+ Minha Lista</a>
                        </div>
                        <div className="featured--genres"><strong>Gêneros: </strong>{genres.join(", ")}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

