import React from "react";

function Card({ card, onCardClick }) {
	function handleClick() {
		onCardClick({link: card.link, name: card.name});
	 }  

  return (
    <li className="element">
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
      <button className="element__delete-button" type="button"></button>
      <div className="element__block">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-block">
          <button className="element__like" type="button"></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
