import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  };

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
            onChange={handleNameChange}
            value={name || ''}
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
            onChange={handleDescriptionChange}
            value={description || ''}
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
