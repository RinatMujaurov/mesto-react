import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText={"Сохранить"}
    >
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
            required
          />
          <span
            className="popup__input-error about-input-error"
            id="input-job-error"
          ></span>
        </fieldset>
      </>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
