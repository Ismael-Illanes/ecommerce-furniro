import PropTypes from "prop-types";
import "../styles/roomSelect.scss";
import { useTranslation } from "react-i18next";

const RoomSelect = ({ imgSrc, text }) => {
  const { t } = useTranslation();

  if (!imgSrc || !text) {
    throw new Error("imgSrc and text props are required");
  }

  return (
    <div className="room-box-select">
      <picture>
        <source srcSet={imgSrc} width={381} height={480} />
        <img
          width={381}
          height={480}
          loading="lazy"
          src={imgSrc}
          alt={t(text)}
        />
      </picture>
      <h3>{t(text)}</h3>
    </div>
  );
};

RoomSelect.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default RoomSelect;
