import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Filter from "./Filter";
import CardInfo from "./CardInfo";
import { CARDS } from "./utils";

const Main = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardsFiltered, setCardsFiltered] = useState(null);

  const cardSelect = (cardId) => setSelectedCard(cardId);

  const cardsFilterSelect = (filterName) => setCardsFiltered(filterName);

  return (
    <div style={{backgroundColor: 'lightcyan'}}>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/" className="mx-auto">
            {" "}
            Card Selection Menu{" "}
          </NavbarBrand>
        </div>
      </Navbar>
      <Filter
        cards={CARDS}
        selectCard={cardSelect}
        cardsFiltered={cardsFiltered}
        cardsFilterSelect={cardsFilterSelect}
      />
      <CardInfo card={CARDS.filter((card) => card.id === selectedCard)[0]} />
    </div>
  );
};

export default Main;
