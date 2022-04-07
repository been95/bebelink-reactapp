import React from 'react'
import style from "./index.module.css";

const Main = () => {
  const [content,setName] =useState("");
  const [accordion,setName] = useState(0);
  return (
    <section className={style.popular_product}>
        <div className={style.popular_title}>
          <h3>인기상품</h3>
          <p>어시서도 볼 수 없는 특별한 혜택들</p>
        </div>
        <div className={style.popular_img}>
          {/* <img src="img/popular_product_banner.png"></img> */}
        </div>
        <div className={style.popular_content} value={content}>
          <div className={style.popular_accordion} value={accordion}>
            <div className={style.popular_title}>
              01 <strong>[루미]20.스펙트I카스트+[미고]미고미니플러스5유모차</strong>
            </div>
            <div className={style.popular_desc}>스펙트i360회전형카스트 미고미니플러스5 유모차</div>
          </div>
          <div className={style.popular_accordion}>
            <div className={style.popular_title}>
              02 <strong>[미고]미니플러스5유모차 + [미고]올인원 아기띠</strong>
            </div>
            <div className={style.popular_desc}>미고미니플러스5 유모차 미고올인원아기띠</div>
          </div>
          <div className={style.popular_accordion}>
            <div className={style.popular_title}>
              03 <strong>[미고]올인원힙시트 + [루미]스펙트i360회전카스트</strong>
            </div>
            <div className={style.popular_desc}>미고올인원힙시트 스펙트i360회전형카스트</div>
          </div>
        </div>
      </section>
  )
}

export default Main
