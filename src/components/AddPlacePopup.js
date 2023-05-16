import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name,
      link,
    });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm
      name="element"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
		buttonText={'Создать'}
		children={
			<>
			  <label className='popup__field'>
				 <input
					type='text'
					required
					className='popup__input popup__input_data_title'
					placeholder='Название'
					name='input-title'
					id='title-input'
					minLength='2'
					maxLength='30'
					onChange={handleNameChange}
					value={name}
				 />
				 <span className='popup__input-error title-input-error'></span>
			  </label>
			  <label className='popup__field'>
				 <input
					type='url'
					required
					className='popup__input popup__input_data_photo'
					placeholder='Ссылка на картинку'
					name='input-photo'
					id='url-input'
					onChange={handleLinkChange}
					value={link}
				 />
				 <span className='popup__input-error url-input-error'></span>
			  </label>
			</>
		 }
    />
  );
}

export default AddPlacePopup;
