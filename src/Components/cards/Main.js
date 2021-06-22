import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Filter from "./Filter";
import CardInfo from "./CardInfo";
import { CARDS } from "./utils";

const Main = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [filter, setFilter] = useState(null);

  return (
    <div style={{ backgroundColor: "lightcyan" }}>
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
        selectCard={(cardId) => setSelectedCard(cardId)}
        filter={filter}
        cardsFilterSelect={(filterName) => setFilter(filterName)}
      />
      <CardInfo card={CARDS.filter((card) => card.id === selectedCard)[0]} />
    </div>
  );
};

export default Main;
