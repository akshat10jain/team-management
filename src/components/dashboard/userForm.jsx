import React from 'react';

const UserForm = (props) => {
  const {
    readOnly,
    placeholder,
    userName,
    userDesc,
    handelName,
    handelDesc,
    handelClick,
    buttonLabel,
    buttonCustomStyle
  } = props;

  return (
    <form>
      <label>Name</label>
      <input
        type="text"
        placeholder={placeholder}
        value={userName}
        onChange={handelName}
        readOnly={readOnly}
      />
      <label>Description</label>
      <textarea
        rows="11"
        cols="25"
        value={userDesc}
        onChange={handelDesc}
        readOnly={readOnly}
      />
      <button
        className={!buttonCustomStyle ? "button" : "button red-btn"}
        onClick={handelClick}
      >
        {buttonLabel}
      </button>
    </form>
  )
}

export default UserForm;