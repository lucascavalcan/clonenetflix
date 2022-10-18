import React from "react";
import './styles.css';

import { MovieFeatured } from "../../types/MovieFeatured";

type Props = {
    item: MovieFeatured
}

export const FeaturedMovie = (item: Props) => {
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
                        <div className="featured--year">2099</div>
                        <div className="featured--seasons">{item.item.number_of_seasons} temporada{item.item.number_of_seasons !==1 ? "s" : ""}</div>
                        <div className="featured--description">{item.item.overview}</div>
                        <div className="featured--buttons">

                        </div>
                        <div className="featured--genres"><strong>Gêneros: </strong>...</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

