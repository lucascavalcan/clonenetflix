import React from "react";
import './styles.css';

import { MovieFeatured } from "../../types/MovieFeatured";

type Props = {
    item: MovieFeatured
}

export const FeaturedMovie = (item: Props) => {
    return (
        <div>
            Filme em destaque
        </div>
    )
}

