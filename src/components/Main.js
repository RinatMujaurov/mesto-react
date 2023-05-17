import React, { useEffect, useState } from "react";
import Card from "./Card";
import api from "../utils/Api";
import addCardButton from "../images/Vector.svg";
import editAvatar from "../images/profile-avatar-edit.svg";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [cards, setCards] = useState([]);
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, initialCards]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(initialCards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-block" onClick={onEditAvatar}>
          <img
            className="profile__avatar-edit"
            src={editAvatar}
            alt="edit avatar"
          />
          <img
            style={{ backgroundImage: `url(${userAvatar})` }}
            src={userAvatar}
            alt=""
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <div className="profile__block">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        >
          <img
            src={addCardButton}
            alt="кнопка добавления изображений"
            className="profile__button-img"
          />
        </button>
      </section>
      <ul className="elements">
        {cards.map((card) => (
          <Card onCardClick={onCardClick} key={card._id} card={card} />
        ))}
      </ul>
    </main>
  );
}

export default Main;
