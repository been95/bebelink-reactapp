import React from "react";
import style from "./index.module.css";

const Header = () => {
  return (
    <header>
      <div className={style.inner}>
        <h1>
          <a href="#" className={style.logo}>
            <span>베베링크</span>
          </a>
        </h1>

        <div className={style.menu}>
          <ul>
            <li>
              <a href="#">장바구니</a>
            </li>
            <li>
              <a href="#">로그인</a>
            </li>
          </ul>
          {/* <div className={style.search}>
            <input type="text" />
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> 
            search
          </div> */}
        </div>

        <ul className={style.main__menu}>
          <li className={style.item}>
            <div className={style.item__name}>인기상품</div>
            <div className={style.item__contents}>
              <div className={style.contents__menu}>
                <ul className={style.inner}>
                  <li>
                    <h4>인기상품</h4>
                    <ul>
                      <li>[루미]20.스펙트I360회전형카스트 + [미고]미니플러스5 유모차</li>
                      <li>[미고]미고미니플러스5유모차 + [미고]올인원힙시트</li>
                      <li>[미고]올인원힙시트 + [루미] 스펙트I360회전형카스트</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={style.item}>
            <div className={style.item__name}>카시트</div>
            <div className={style.item__contents}>
              <div className={style.contents__menu}>
                <ul className={style.inner}>
                  <li>
                    <h4>순성</h4>
                    <ul>
                      <li>[순성]데일리 모노Isofix 카시트</li>
                      <li>[순성]듀클핀 Isofix 카시트</li>
                      <li>[순성]듀클 캐리</li>
                    </ul>
                  </li>
                  <li>
                    <h4>다이치</h4>
                    <ul>
                      <li>[다이치]듀웰 오가닉 Larch-fix 카시트</li>
                      <li>[다이치]원픽스 360 Isofix 프리미엄</li>
                    </ul>
                  </li>
                  <li>
                    <h4>루미</h4>
                    <ul>
                      <li>[루미]데일리 모노Isofix 카시트</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={style.item}>
            <div className={style.item__name}>유모차</div>
            <div className={style.item__contents}>
              <div className={style.contents__menu}>
                <ul className={style.inner}>
                  <li>
                    <h4>미고</h4>
                    <ul>
                      <li>[미고]미고미니플러스5유모차</li>
                    </ul>
                  </li>
                  <li>
                    <h4>리안</h4>
                    <ul>
                      <li>[리안]21.그램플러스유모차</li>
                      <li>[리안]트윈쌍둥이 절충형 유모차</li>
                    </ul>
                  </li>
                  <li>
                    <h4>와이업</h4>
                    <ul>
                      <li>[와이업]위드 트라이크</li>
                    </ul>
                  </li>
                  <li>
                    <h4>조이</h4>
                    <ul>
                      <li>[조이]애발라이트듀오 쌍둥이유모차</li>
                    </ul>
                  </li>
                  <li>
                    <h4>지비</h4>
                    <ul>
                      <li>[지비]마리스2 유모차</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={style.item}>
            <div className={style.item__name}>아기띠</div>
            <div className={style.item__contents}>
              <div className={style.contents__menu}>
                <ul className={style.inner}>
                  <li>
                    <h4>미고</h4>
                    <ul>
                      <li>[미고]올인원힙시트</li>
                    </ul>
                  </li>
                  <li>
                    <h4>포그내</h4>
                    <ul>
                      <li>맥스라이트</li>
                    </ul>
                  </li>
                  <li>
                    <h4>다이치</h4>
                    <ul>
                      <li>[다이치]루이3IN1올인원아기띠</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={style.item}>
            <div className={style.item__name}>젖병소독기</div>
            <div className={style.item__contents}>
              <div className={style.contents__menu}>
                <ul className={style.inner}>
                  <li>
                    <h4>유팡</h4>
                    <ul>
                      <li>[유팡]플러스LED젖병소독기</li>
                    </ul>
                  </li>
                  <li>
                    <h4>레이퀸</h4>
                    <ul>
                      <li>[레이퀸]6세대젖병소독기</li>
                    </ul>
                  </li>
                  <li>
                    <h4>스펙트라</h4>
                    <ul>
                      <li>[스펙트라]젖병소독기</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={style.item}>
            <div className={style.item__name}>웨건,범퍼침대</div>
            <div className={style.item__contents}>
              <div className={style.contents__menu}>
                <ul className={style.inner}>
                  <li>
                    <h4>베베프람</h4>
                    <ul>
                      <li>[베베프람]이지고웨건플러스</li>
                    </ul>
                  </li>
                  <li>
                    <h4>조아뜨</h4>
                    <ul>
                      <li>[조아뜨]듀얼범퍼매트_T500</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
