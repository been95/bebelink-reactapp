import React, { useState, useEffect } from "react";
import Header from "./header";
import Visual from "./visual";
import Main from "./main";
import "./index.css";
function Home() {
  const [y, setY] = useState(0);

  useEffect(() => {
    function scrollHandler() {
      setY(window.scrollY);
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="home">
      <Header />
      <Visual/>
      <Main/>
    </div>
  );
}

export default Home;
