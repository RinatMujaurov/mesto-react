import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  React.useEffect(() => {
    if (!props.isOpen) {
      avatarRef.current.value = "";
    }
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonText={"Сохранить"}
      children={
        <>
          <label className="popup__fieldset">
            <input
              className="popup__input popup__input_data_link"
              type="url"
              id="link-avatar-input"
              name="avatar"
              placeholder="Ссылка на аватар"
              required
              ref={avatarRef}
            />
            <span
              className="popup__input-error link-input-error"
              id="link-avatar-input-error"
            ></span>
          </label>
        </>
      }
    />
  );
}

export default EditAvatarPopup;
