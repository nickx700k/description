import React from "react";
import { useState } from "react";
import "./Cards.scss";
import Moreinfo from "./Moreinfo";

export default function Cards({ card }) {
  const [display, setDisplay] = useState(false);
  const handleMouseClick = () => {
    setDisplay(true);
  };

  const handleMouseOut = () => {
    setDisplay(false);
  };

  const [showMore, setShowMore] = useState(false);

  const btnToggle = () => {
    setShowMore((preState) => !preState);
  };

  return (
    <>
      <div className="Cards">
        <img src={card.Thumnail} alt="Card Photo" className="Cards--image" />
        <img
          src={card.image}
          alt="photo thumnail"
          className="Cards--thumnail"
        />
        <h2 className="Cards--title">Title: {card.title}</h2>
        <span className="Cards--publiture">Publiture: {card.Publisher}</span>
        <span className="Cards--ports">Ports: {card.Ports}</span>
        <button className="Cards--button" onMouseDown={handleMouseClick}>
          Descrition
        </button>
      </div>
      {display && (
        <div className="show-form">
          <div className="show-form--all">
            <div className="show-form--all-forClose">
              <span
                className="show-form--all-forClose--close"
                onMouseDown={handleMouseOut}
              >
                &times;
              </span>
            </div>

            <div className="flex">
              <div className="flex2">
                <h2>Description</h2>

                {showMore ? (
                  <>
                    <span className="show-form--all--show" onClick={btnToggle}>
                      &#94;
                    </span>
                  </>
                ) : (
                  <>
                    <span className="show-form--all--less" onClick={btnToggle}>
                      &#8964;
                    </span>
                  </>
                )}
              </div>
              <p className="show-form--all--p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus suscipit molestiae repudiandae officiis nemo quae rerum
                praesentium adipisci autem dolore eaque perferendis
              </p>
            </div>
            {showMore ? (
              <ul>
                <li>
                  {" "}
                  <p className="show-form--all--desc">{card.Description}</p>
                </li>
                <li>
                  {" "}
                  <p className="show-form--all--desc">{card.Description}</p>
                </li>
              </ul>
            ) : (
              <p className="show-form--all--desc">
                {card.Description.substr(0, 0)}
              </p>
            )}
          </div>

          <div className="flex2">
            <h2>Buy</h2>
            <span className="show-form--all--next">&#62;</span>
          </div>
        </div>
      )}
    </>
  );
}
