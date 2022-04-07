import React from "react";
import style from "./index.module.css";

const Visual = () => {
    return (
        <section className={style.visual}>
        <div className="inner">
            <div className={`${style.title} ${style.fade_in}`}>
            <h3>어디서도 누릴 수 없는 특급혜택</h3>
            <p>누릴 수 없는 특급 혜택들을 만나봐요!</p>
            </div>
            <div className="fade_in">
            <img className={`${style.cup1} ${style.image}`} alt="아기" src="img/main_banner.png" />
            </div>
        </div>
        </section>
    );
};

export default Visual
