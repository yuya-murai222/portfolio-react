import React, { useEffect, useRef } from "react";

const Loader = () => {
  const loadingRef = useRef(null);

  useEffect(() => {
    if (!loadingRef.current) return;

    const hideLoading = () => {
      loadingRef.current.classList.add('loaded');
    };

    const handleLoad = () => {
      setTimeout(hideLoading, 1500);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="load" ref={loadingRef}>
      <div className="sp sp-wave"></div>
    </div>
  );
};

export default Loader;
