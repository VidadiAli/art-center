import React, { useEffect, useState, useRef } from "react";
import "./FirstPart.css";
import { carosel } from "../../Data/Carosel";
import { useNavigate } from "react-router-dom";
import homeimg from './pese.jpg';
import { gsap } from 'gsap'; // Import GSAP

// Ana sehifedeki sekillerin deyişmesi

const FirstPart = () => {
  const [leftArray, setLeftArray] = useState([]);
  const navigate = useNavigate();

  // Create refs for the elements you want to animate
  const artCenterRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  const mainPage = (itemName) => {
    const url = itemName.split(" ").join("-").toLowerCase();
    navigate(`/about-us`);
    // alert("üzərində iş gedir")
  };

  const makeLeft = (distance) => {
    const arr = [];
    let leftDistance = distance;

    for (let i = 0; i < carosel.length; i++) {
      arr.push(leftDistance);
      leftDistance += 100;

      // Uzunluğu keçəndə sıfırlama
      if (leftDistance >= (carosel.length - 1) * 100) {
        leftDistance = -100;
      }
    }
    setLeftArray(arr);
  };

  useEffect(() => {
    let distance = -100;

    makeLeft(distance);
    distance += 100;

    const interval = setInterval(() => {
      makeLeft(distance);

      distance += 100;
      if (distance >= (carosel.length - 1) * 100) {
        distance = -100; // Yenidən başlama
      }
    }, 10000);

    // GSAP Animations
    // Create a timeline for synchronized animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(artCenterRef.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
      .fromTo(paragraphRef.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: -0.5 }) // Stagger with previous animation
      .fromTo(buttonRef.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: -0.5 }); // Stagger with previous animation

    return () => clearInterval(interval); // Təmizləmə
  }, []);

  return (
    <div className="home-carosel">
      {/* {carosel.map((e, index) => (
        <div
          key={e.id}
          className="home-carosel-child"
          style={{
            transform: `translateX(${leftArray[index] || 0}%)`, opacity: `${leftArray[index] === -100 ? '0' : '1'}`// `undefined`-i qarşısını almaq üçün
          }}
        >
          <img src={`
          ${e.imageCarosel.slice(0, 8)}raw.githubusercontent.com${e.imageCarosel.slice(18, e.imageCarosel.indexOf("blob"))}${e.imageCarosel.slice(e.imageCarosel.indexOf("blob") + 4, e.imageCarosel.length)}`}
            alt={e.nameCarosel} />
          <div className="home-carosel-text">
            <h1>{e.nameCarosel}</h1>
            <p>{e.textCarosel}</p>
            <button onClick={() => mainPage(e.nameCarosel)}>Ətraflı Bax</button>
          </div>
        </div>
      ))} */}

      <div className="home-main">
        <img src={homeimg} alt="Main Background" />
        <div className="black"></div>
        <div className="home-text">
          <span ref={artCenterRef}>ArtCenter</span> {/* Attach ref */}
          <div className="home-p-div">
            <p ref={paragraphRef}> 
            Artcenter Azerbaijan, Azərbaycanın zəngin mədəni irsini qorumaq, inkişaf etdirmək və dünya miqyasında tanıtmaq məqsədilə fəaliyyət göstərən yaradıcılıq və təhsil mərkəzidir.
            </p>
          </div>
          <button ref={buttonRef} onClick={() => mainPage("about-us")}>
            <a href="/about-us"></a>Ətraflı Bax
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPart;