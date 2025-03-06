import React from 'react'
import Slider from './Slider';
import {Link} from "react-router-dom";

const TopPage = () => {

    
// メニュー展開時に背景を固定
const backgroundFix = (bool) => {
  const scrollingElement = () => {
    const browser = window.navigator.userAgent.toLowerCase();
    if ("scrollingElement" in document) return document.scrollingElement;
    return document.documentElement;
  };

  const scrollY = bool
    ? scrollingElement().scrollTop
    : parseInt(document.body.style.top || "0");

  const fixedStyles = {
    height: "100vh",
    position: "fixed",
    top: `${scrollY * -1}px`,
    left: "0",
    width: "100vw"
  };

  Object.keys(fixedStyles).forEach((key) => {
    document.body.style[key] = bool ? fixedStyles[key] : "";
  });

  if (!bool) {
    window.scrollTo(0, scrollY * -1);
  }
};




window.addEventListener("scroll", function () {
  const elements = document.getElementsByClassName("fade-left");
  Array.prototype.forEach.call(elements, function (element) {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop - windowHeight <= 0) {
      element.classList.add("left-animated");
    }
  });
});

window.addEventListener("scroll", function () {
  const elements = document.getElementsByClassName("fade-right");
  Array.prototype.forEach.call(elements, function (element) {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop - windowHeight <= 0) {
      element.classList.add("right-animated");
    }
  });
});

window.addEventListener("scroll", function () {
  const elements = document.getElementsByClassName("works-box");
  Array.prototype.forEach.call(elements, function (element) {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop - windowHeight <= 0) {
      element.classList.add("chain-animated");
    }
  });
});


  return (
    <main>
        <div id="wrapper">
            <div class="mv">
                <div class="main-logo">
                    <div class="main-logo-box">
                        <h1>YUYA MURAI</h1>
                        <p>PORT FOLIO</p>
                    </div>
                </div>
                <div class="slide swiper">
                    <Slider />
                </div>
            </div>
            <div id="top-sec1">
                <figure><img src="./img/sub1.jpg" alt="" class="sp-nn pc-bl" /><img src="./img/sp-sub1.jpg" alt="" class="sp-bl pc-nn" /></figure>
                <div class="sec-box1">
                    <div class="sub-title">
                        <h2>Profile</h2>
                        <p>自己紹介</p>
                    </div>
                    <div class="profile">
                        <h3>村井 悠矢</h3>
                        <p class="birth">1990.11.17</p>
                        <p class="pro-txt">
                            秋田県秋田市在住。<br />
                            2011～2012年まで介護福祉士として特別養護老親ホームに勤務。その後、2013～2015年まで専門学校の「秋田コア ビジネスカレッジ」に通い2015年に卒業。2015年3月～2023年12月まで「マゼンタ株式会社」にwebサイト制作チームにwebコーダーとして約9年間所属。<br />
                            現在は「Creative Creation株式会社」にwebコーダーとしてwebサイト制作に携わっています。
                        </p>
                    </div>
                </div>
            </div>
            <div id="top-sec2">
                <div class="skill">
                    <div class="sub-title">
                        <h2>Skill</h2>
                        <p>使用ツール・ソフト</p>
                    </div>
                    <div class="skill-box">
                        <ul>
                            <li>
                                <figure><img src="./img/icon01.png" alt="HTML" /></figure>
                                <p>HTML</p>
                            </li>
                            <li>
                                <figure><img src="./img/icon02.png" alt="CSS" /></figure>
                                <p>CSS</p>
                            </li>
                            <li>
                                <figure><img src="./img/icon03.png" alt="Java Script" /></figure>
                                <p>Java Script</p>
                            </li>
                            <li>
                                <figure><img src="./img/icon04.png" alt="JQuery" /></figure>
                                <p>JQuery</p>
                            </li>
                            <li>
                                <figure><img src="./img/icon05.png" alt="WordPress" /></figure>
                                <p>WordPress</p>
                            </li>
                            <li>
                                <figure><img src="./img/icon06.png" alt="Illustrator" /></figure>
                                <p>Illustrator</p>
                            </li>
                            <li>
                                <figure><img src="./img/icon07.png" alt="Photoshop" /></figure>
                                <p>Photoshop</p>
                            </li>
                            <li>
                                <figure><img src="./img/icon08.png" alt="Premiere" /></figure>
                                <p>Premiere</p>
                            </li>
                            <li>
                                <figure><img src="./img/icon09.png" alt="After Effects" /></figure>
                                <p>After Effects</p>
                            </li>
                            <li>
                                <figure><img src="./img/icon10.png" alt="Figma" /></figure>
                                <p>Figma</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="top-sec3">
                <div class="works">
                    <div class="sub-title">
                        <h2>Works</h2>
                        <p>制作実績</p>
                    </div>
                    <div class="works-area">
                        <div class="works-box">
                            <Link to='/works1'>
                                <figure><img src="./img/works01.jpg" alt="株式会社H.Eウェルネス" /></figure>
                                <div class="w-box-bottom">
                                    <p>Website</p>
                                    <p>株式会社H.Eウェルネス</p>
                                </div>
                            </Link>
                        </div>
                        <div class="works-box">
                            <Link to='/works2'>
                                <figure><img src="./img/works02.jpg" alt="株式会社スタンダード" /></figure>
                                <div class="w-box-bottom">
                                    <p>Website</p>
                                    <p>株式会社スタンダード</p>
                                </div>
                            </Link>
                        </div>
                        <div class="works-box">
                            <Link to='/works3'>
                                <figure><img src="./img/works03.jpg" alt="青森の体験メニュー予約サイト｜Join Aomori" /></figure>
                                <div class="w-box-bottom">
                                    <p>Website</p>
                                    <p>Join Aomori</p>
                                </div>
                            </Link>
                        </div>
                        <div class="works-box">
                            <Link to='/works4'>
                                <figure><img src="./img/works04.jpg" alt="JA-SS、ホクレンSSでJAカードをご利用いただくとご請求時にいつでも2円/&#8467;割引！｜JAカード" /></figure>
                                <div class="w-box-bottom">
                                    <p>Website</p>
                                    <p>JAカード</p>
                                </div>
                            </Link>
                        </div>
                        <div class="works-box">
                            <Link to='/works5'>
                                <figure><img src="./img/works05.jpg" alt="JA直売所・JAファーマーズマーケットでJAカードをご利用いただくとご請求時にいつでも5％割引！！｜JAカード" /></figure>
                                <div class="w-box-bottom">
                                    <p>Website</p>
                                    <p>JAカード</p>
                                </div>
                            </Link>
                        </div>
                        <div class="works-box">
                            <Link to='/works6'>
                                <figure><img src="./img/works06.jpg" alt="Rtable" /></figure>
                                <div class="w-box-bottom">
                                    <p>Website</p>
                                    <p>Rtable</p>
                                </div>
                            </Link>
                        </div>
                        <div class="works-box">
                            <Link to='/works7'>
                                <figure><img src="./img/works07.jpg" alt="秋田印刷製本株式会社" /></figure>
                                <div class="w-box-bottom">
                                    <p>Website</p>
                                    <p>秋田印刷製本株式会社</p>
                                </div>
                            </Link>
                        </div>
                        <div class="works-box">
                            <Link to='/works8'>
                                <figure><img src="./img/works08.jpg" alt="株式会社 高橋製作所" /></figure>
                                <div class="w-box-bottom">
                                    <p>Website</p>
                                    <p>株式会社 高橋製作所</p>
                                </div>
                            </Link>
                        </div>
                        <div class="works-box">
                            <Link to='/works9'>
                                <figure><img src="./img/works09.jpg" alt="JR東日本：御朱印長キャンペーンLP" /></figure>
                                <div class="w-box-bottom">
                                    <p>Website</p>
                                    <p>JR東日本</p>
                                </div>
                            </Link>
                        </div>
                        <div class="works-box">
                            <Link to='/works10'>
                                <figure><img src="./img/works10.jpg" alt="世界に誇れる景色～五能線の旅～" /></figure>
                                <div class="w-box-bottom">
                                    <p>Movie</p>
                                    <p>～五能線の旅～</p>
                                </div>
                            </Link>
                        </div>
                        <div class="works-box">
                            <Link to='/works11'>
                                <figure><img src="./img/works11.jpg" alt="津軽弁早口チャレンジ～家で話そう～" /></figure>
                                <div class="w-box-bottom">
                                    <p>Movie</p>
                                    <p>津軽弁早口チャレンジ</p>
                                </div>
                            </Link>
                        </div>
                        <div class="works-box">
                            <Link to='/works12'>
                                <figure><img src="./img/works12.jpg" alt="【秋田県教育旅行PR動画】小坂鉱山事務所（秋田県小坂町）" /></figure>
                                <div class="w-box-bottom">
                                    <p>Movie</p>
                                    <p>秋田県教育旅行PR動画</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default TopPage