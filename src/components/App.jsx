import React from "react";
import Header from "./Header/Header";
import Searchbar from "./Seachbar/Searchbar";
import Card from "./Card/Card";
import Footer from "./Footer/Footer";
import { data } from "../Mock Data/data";

import "@fontsource/metropolis";
import "@fontsource/metropolis/200.css";
import "@fontsource/metropolis/700.css";

function App() {

  return (
    <div>
      <Header />
      <Searchbar />
      <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 px-5">
        {data.map(cardTerm => {
          return (
            <Card 
              key={cardTerm.id}
              img={cardTerm.img}
              title={cardTerm.title}
              author={cardTerm.author}
              rating={cardTerm.rating}
              stars={cardTerm.stars}
              views={cardTerm.views}
              price={cardTerm.price}
            />
          )
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
