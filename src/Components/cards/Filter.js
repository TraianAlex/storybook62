import React from "react";
import { Card, CardImg, ButtonGroup, Button } from "reactstrap";
import { FILTERS } from "./utils";

const Filter = ({ cards, selectCard, filter, cardsFilterSelect }) => {
  const cardsFiltered = cards
    .filter(({ type }) => {
      return !filter || type === filter;
    })
    .map((card) => {
      return (
        <div key={Math.random().toString(36).slice(2)} className="col-2 m-1">
          <Card onClick={() => selectCard(card.id)}>
            <CardImg src={card.image} alt={card.name} />
          </Card>
        </div>
      );
    });

  const filterButtons = FILTERS.map((filterName) => {
    return (
      <Button
        key={filterName}
        onClick={() => cardsFilterSelect(filterName)}
        style={{ marginLeft: "inherit" }}
      >
        {filterName}
      </Button>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex align-content-start flex-wrap">
          {cardsFiltered}
        </div>
        <div className="p-5 col-1">
          <ButtonGroup size="lg" vertical>
            <h6 style={{ color: "blue" }}>Card Attributes</h6>
            <Button onClick={() => cardsFilterSelect(null)}>All</Button>
            {filterButtons}
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default Filter;
