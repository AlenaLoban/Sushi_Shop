import React from "react";
import style from "../core/css/index.module.scss";
import image from "/home-sushi.png"
import bg from "/png-image.png"

const Home: React.FC = () => {
  return (
    <div className={style.home}>
      <div
        className={style.home__bg}
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className={style.home__body}>
        <h1>Sushi Town</h1>
        <img src={image} alt="" />
      </div>
    </div>
  );
};
export default Home;
