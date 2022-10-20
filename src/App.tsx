import React, {useEffect, useState} from "react";
import "./App.css";
import {api} from "./api";

import {MovieLists} from "./types/MovieLists";
import { MovieFeatured } from "./types/MovieFeatured";

import { MovieRow } from "./components/MovieRow";
import { FeaturedMovie } from "./components/FeaturedMovie";
import { Header } from "./components/Header";

const App = () => {
  
  const [movieList, setMovieList] = useState<MovieLists[]>([]);
  const [featuredData, setFeaturedData] = useState<null | MovieFeatured>(null);

  useEffect(()=>{
    async function loadAll() {
      //pegando a lista TOTAL
      let list = await api.getHomeList();
      setMovieList(list);

      //pegando o Featured (na seção em destaque só vai mostrar os filmes da lista "originais do netflix")
      let originals = list.filter(i => i.slug === "originals");
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];

      //pegando infos extras desse filme
      let chosenInfo = await api.getTvShowInfo(chosen.id);

      console.log(chosenInfo);
      setFeaturedData(chosenInfo)
    }

    loadAll();
  }, []);

  return (
    <div className="page">

      <Header/>

      {featuredData &&
        <FeaturedMovie item={featuredData}/>
      }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}

      </section>
    </div>
  )
};

export default App;


