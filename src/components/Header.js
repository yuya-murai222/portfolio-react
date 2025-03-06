import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  // メニュー展開時に背景を固定
  const backgroundFix = (bool) => {
    const scrollingElement = () => {
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

  const hamburgerRef = useRef(null);
  const focusTrapRef = useRef(null);
  const menuRef = useRef(null);

  const CLASS = "-active";
  let flg = false;

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const focusTrap = focusTrapRef.current;
    const menu = menuRef.current;
    const smoothScroll = (event) => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");

      if (!href || href === "#") return;

      // 現在のページがトップページでない場合は、トップページへ遷移
      if (window.location.pathname !== "/") {
        navigate(`/${href}`); // 例: "/#top-sec1"
        return;
      }

      // トップページの場合はスムーススクロールを実行
      const target = document.querySelector(href);
      if (!target) return;

      const position = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    };

    // すべての `#` リンクを取得してクリックイベントを設定
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    if (!hamburger || !menu || !focusTrap) return;

    // メニュー開閉制御
    const handleHamburgerClick = (e) => {
      e.currentTarget.classList.toggle(CLASS);
      menu.classList.toggle(CLASS);
      if (flg) {
        backgroundFix(false);
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.focus();
        flg = false;
      } else {
        backgroundFix(true);
        hamburger.setAttribute("aria-expanded", "true");
        flg = true;
      }
    };

    hamburger.addEventListener("click", handleHamburgerClick);

    // メニュー内リンククリック時にメニューを閉じる
    const handleMenuLinkClick = () => {
      if (flg) {
        hamburger.classList.remove(CLASS);
        menu.classList.remove(CLASS);
        backgroundFix(false);
        hamburger.setAttribute("aria-expanded", "false");
        flg = false;
      }
    };

    const menuLinks = menu.querySelectorAll("a[href^='#']");
    menuLinks.forEach((link) => {
      link.addEventListener("click", handleMenuLinkClick);
    });

    // フォーカストラップ制御
    const handleFocusTrap = () => {
      hamburger.focus();
    };
    focusTrap.addEventListener("focus", handleFocusTrap);

    // クリーンアップ関数
    return () => {
      hamburger.removeEventListener("click", handleHamburgerClick);
      menuLinks.forEach((link) => {
        link.removeEventListener("click", handleMenuLinkClick);
      });
      focusTrap.removeEventListener("focus", handleFocusTrap);
    };
  }, []);

  useEffect(() => {
    const smoothScroll = (event) => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      const position = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    };

    // すべての対象リンクを取得し、イベントリスナーを追加
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    // クリーンアップ処理
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  return (
    <header>
      <div className="logo">
        <a href="#">YUYA MURAI</a>
      </div>
      <nav className="pc-menu">
        <ul>
          <li>
            <a href="#top-sec1">Profile</a>
          </li>
          <li>
            <a href="#top-sec2">Skill</a>
          </li>
          <li>
            <a href="#top-sec3">Works</a>
          </li>
        </ul>
      </nav>
      <div className="sp-menu">
        <div className="header__inner">
          <button
            id="js-hamburger"
            type="button"
            className="hamburger"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="メニューを開く"
            ref={hamburgerRef}
          >
            <span className="hamburger__line"></span>
            <span className="hamburger__text"></span>
          </button>
          <div
            className="header__nav-area js-nav-area"
            id="navigation"
            ref={menuRef}
          >
            <nav id="js-global-navigation" className="global-navigation">
              <ul className="global-navigation__list">
                <li>
                  <a
                    href="#top-sec1"
                    className="global-navigation__link"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#top-sec2"
                    className="global-navigation__link"
                  >
                    Skill
                  </a>
                </li>
                <li>
                  <a
                    href="#top-sec3"
                    className="global-navigation__link"
                  >
                    Works
                  </a>
                </li>
              </ul>
              <div id="js-focus-trap" tabIndex="0" ref={focusTrapRef}></div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
