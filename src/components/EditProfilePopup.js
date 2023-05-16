import React , { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, props.isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonText={"Сохранить"}
      children={
        <>
          <fieldset className="popup__fieldset">
            <input
              id="input-name"
              type="text"
              className="popup__input popup__input_data_name"
              name="name"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              value={name}
              onChange={handleChangeName}
              required
            />
            <span
              className="popup__input-error name-input-error"
              id="input-name-error"
            ></span>
          </fieldset>
          <fieldset className="popup__fieldset">
            <input
              id="input-job"
              type="text"
              className="popup__input popup__input_data_about"
              name="about"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              value={description}
              onChange={handleChangeDescription}
              required
            />
            <span
              className="popup__input-error about-input-error"
              id="input-job-error"
            ></span>
          </fieldset>
        </>
      }
    />
  );
}

export default EditProfilePopup;
