import React from "react";
import style from "../core/css/index.module.scss";
const Home: React.FC = () => {
  return (
    <div className={style.home}>
      <div
        className={style.home__bg}
        style={{ backgroundImage: "url(" + "png-image.png" + ")" }}
      ></div>
      <img src="home-sushi.png" alt="" />
      <div className={style.home__body}>
        <h1>Sushi Town</h1>
      </div>
    </div>
  );
};
export default Home;
