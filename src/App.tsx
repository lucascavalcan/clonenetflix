import React, {useEffect, useState} from "react";
import "./App.css";
import {api} from "./api";

import {MovieLists} from "./types/MovieLists";
import { MovieFeatured } from "./types/MovieFeatured";

import { MovieRow } from "./components/MovieRow";
import { FeaturedMovie } from "./components/FeaturedMovie";
import { Header } from "./components/Header";

import Loading from "./assets/loading.gif"

const App = () => {
  
  const [movieList, setMovieList] = useState<MovieLists[]>([]);
  const [featuredData, setFeaturedData] = useState<null | MovieFeatured>(null);
  const [blackHeader, setBlackHeader] =useState<boolean>(false)

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

  useEffect(()=>{
    const scrollListener = () => {
        if (window.scrollY > 10) {
          setBlackHeader(true);
        } else {
          setBlackHeader(false);
        }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, []);

  return (
    <div className="page">

      <Header black={blackHeader}/>

      {featuredData &&
        <FeaturedMovie item={featuredData}/>
      }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}

      </section>

      <footer>
          Feito com <span role="img" aria-label="coração">❤️</span> por Lucas Cavalcanti. <br/>
          Direitos de imagem para NetFlix. <br/>
          Dados pegos do site Themoviedb.org
      </footer>

      {movieList.length <= 0 &&
        <div className="loading">
          <img src={Loading} alt="Carregando"/>
        </div>
      }

    </div>
  )
};

export default App;


