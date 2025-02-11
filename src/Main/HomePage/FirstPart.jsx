import React, { useEffect, useState } from "react";
import "./FirstPart.css";
import { carosel } from "../../Data/Carosel";
import { useNavigate } from "react-router-dom";

const FirstPart = () => {
  const [leftArray, setLeftArray] = useState([]);

  const navigate = useNavigate();

  const mainPage = (itemName) => {
    // const url = itemName.split(" ").join("-").toLowerCase()
    // navigate(`/sale/${url}`);
    alert("üzərində iş gedir.")
  }

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
        distance = -100; // Yenidən başlamaq üçün
      }

    }, 10000);

    return () => clearInterval(interval); // Təmizləmə
  }, []);

  return (
    <div className="home-carosel">
      {carosel.map((e, index) => (
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
      ))}
    </div>
  );
};

export default FirstPart;
