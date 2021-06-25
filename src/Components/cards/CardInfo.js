import React from 'react';
import { Card, CardImg } from 'reactstrap';

const CardInfo = ({ card }) => {
  const renderCard = (card) => {
    return (
      <Card>
        <CardImg src={card.image} alt={card.name} />
      </Card>
    );
  };

  const renderInfo = (card) => {
    return (
      <ul className="list-unstyled">
        <li>
          <h6>Name :</h6>
          <div>{card.name}</div>
        </li>
        <li>
          <h6>Type : </h6>
          <div>{card.type}</div>
        </li>
        <li>
          <h6>Attack: </h6>
          <div>{card.attack}</div>
        </li>
        <li>
          <h6>Damage : </h6>
          <div>{card.damage}</div>
        </li>
        <li>
          <h6>Description : </h6>
          <div>{card.description}</div>
        </li>
      </ul>
    );
  };

  if (card != null) {
    return (
      <div className="p-5" style={{ backgroundColor: 'lightblue' }}>
        <div className="row">
          <div className="col-12 col-md-5 ">
            {/* <p>hi</p> */}
            {renderCard(card)}
          </div>
          <div className="col-12 col-md-5 border border-primary">
            <h4>Card Information</h4>
            {renderInfo(card)}
          </div>
        </div>
      </div>
    );
  } else return <div />;
};

export default CardInfo;
