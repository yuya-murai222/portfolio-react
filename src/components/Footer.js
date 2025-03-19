import React, { useEffect, useRef } from "react";

const Footer = () => {
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
    <footer>
        <div className="pagetop"><a href="#root"><img src={process.env.PUBLIC_URL + "/img/pagetop.svg"} alt="pagetop" /></a></div>
        <address>&copy; 2024 Yuya Murai</address>
    </footer>

    
  )
}

export default Footer