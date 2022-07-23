import "./banner.styles.scss";

const Banner = ({ title, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="banner-container"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="shop-button-container">
        <h1>{title}</h1>
        <div className="shop-button">SHOP NOW</div>
      </div>
    </div>
  );
};

export default Banner;
