import React from "react";
import PropTypes from "prop-types";
import "../styles/roomSelect.scss";

const RoomSelect = ({ imgSrc, text }) => {
  if (!imgSrc || !text) {
    throw new Error("imgSrc and text props are required");
  }

  return (
    <div className="room-box-select">
      <img src={imgSrc} alt="Room" />
      <h3>{text}</h3>
    </div>
  );
};

RoomSelect.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default RoomSelect;
